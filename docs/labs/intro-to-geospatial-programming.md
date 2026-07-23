# ArcPy Lab

<p class="lab-subtitle">Introduction to Geospatial Programming with Eurostat NUTS Regions</p>

<p class="lab-back"><a href="../../lessons/#intro-to-geospatial-programming">&larr; Back to Lessons</a></p>

<div class="lab-toc"><b>On this page:</b> <a href="#student-handout">Student Handout</a> &middot; <a href="#data-acquisition">Data Acquisition</a> &middot; <a href="#project-instructions">Project Instructions</a> &middot; <a href="#result-reference">Result Reference</a></div>

<div class="lab-widget">
<div class="contents">
<div class="contents-head">Contents - click a layer to open</div>

<h2 id="student-handout" class="sr-anchor">Student Handout</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-handout" onclick="toggleOpen(this,'panel-handout')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Student Handout <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Scenario, tasks, and deliverables</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-handout">
<h2>Scenario</h2>
<p>The European Union publishes a standardised geographic classification called NUTS &mdash; Nomenclature of Territorial Units for Statistics. Level 1 divides each country into its major administrative regions (e.g. Scotland, Bavaria, Ile-de-France). In this lab you will use ArcPy to automate three common GIS workflows: inspecting a dataset programmatically, dissolving regions into country boundaries, and exporting one shapefile per country in a loop.</p>
<div class="callout"><b>Power of scripting:</b> Everything you do in this lab &mdash; inspect, dissolve, export &mdash; could be done by hand in the ArcGIS Pro interface. The difference is that the manual workflow takes 30 minutes and works for one dataset at a time. A Python script takes 30 seconds and can be re-run on any future dataset without changing a single click. This is why geospatial analysts learn to code.</div>
<div class="callout"><b>Note:</b> This lab uses Eurostat NUTS 2021 Level-1 data downloaded from the EU GISCO service. Unlike the CDC SVI dataset from the Dissolve Lab, this is a well-maintained, complete dataset with no missing values and no quirky sentinel codes &mdash; a good starting point for learning arcpy.</div>
<h2>Learning Objectives</h2>
<p>By the end of this lab, students will be able to:</p>
<ul>
<li>Use arcpy.Describe() to inspect the geometry type and coordinate system of a feature class.</li>
<li>Count features with arcpy.management.GetCount() and list attribute fields with arcpy.ListFields().</li>
<li>Extract unique attribute values using arcpy.da.SearchCursor().</li>
<li>Dissolve features by a group field using arcpy.management.Dissolve().</li>
<li>Write a Python loop to export one shapefile per category using arcpy.conversion.ExportFeatures().</li>
</ul>
<h2>Tasks</h2>
<ol>
<li>Download the Eurostat NUTS 2021 Level-1 shapefile and add it to an ArcGIS Pro project.</li>
<li>Run the Part 2 inspection script. Record the feature count, coordinate system name, and the list of country codes printed to the Python window.</li>
<li>Symbolize the layer using Unique Values on CNTR_CODE. Take a screenshot.</li>
<li>Run the Part 3 Dissolve script to create Europe_Countries. Confirm the output has one polygon per country.</li>
<li>Run the Part 4 export loop. Verify that one .shp file was created for each country code.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>Screenshot 1 &mdash; NUTS Level-1 regions symbolized by CNTR_CODE (Unique Values).</li>
<li>Screenshot 2 &mdash; Python window showing the Part 2 inspection output (feature count, field list, country codes).</li>
<li>Screenshot 3 &mdash; Europe_Countries layer after Dissolve, symbolized by CNTR_CODE.</li>
<li>Screenshot 4 &mdash; Python window showing the Part 4 export loop ("Exported: XX" lines).</li>
<li>Written answers to the Discussion Questions below (check yourself against the Result Reference section once you've attempted them).</li>
</ul>
</div>

<h2 id="data-acquisition" class="sr-anchor">Data Acquisition Instructions</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition Instructions <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: downloading the Eurostat NUTS 2021 shapefile</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h2>Dataset: Eurostat NUTS 2021 Level 1</h2>
<p>Source: Eurostat / GISCO (Geographic Information System of the Commission), <code>gisco-services.ec.europa.eu</code>. No account required. Free for reuse under the Eurostat copyright notice.</p>
<p>The Nomenclature of Territorial Units for Statistics (NUTS) is a hierarchical system maintained by Eurostat for dividing European territory into comparable regions. The 2021 edition covers 37 countries, including all 27 EU member states plus the UK, Norway, Switzerland, and several candidate countries.</p>
<table>
<tr><th>Level</th><th>Description</th><th>Approx. count</th></tr>
<tr><td>NUTS 0</td><td>Countries</td><td>37</td></tr>
<tr><td>NUTS 1</td><td>Major regions / groups of regions</td><td>~125 features, 37 countries</td></tr>
<tr><td>NUTS 2</td><td>Basic regions for regional policy</td><td>~242</td></tr>
</table>
<ol>
<li>Open your browser and go to the GISCO distribution service: <code>gisco-services.ec.europa.eu/distribution/v2/nuts/download/ref-nuts-2021-10m.shp.zip</code>.</li>
</ol>
<div class="callout"><b>Note:</b> You can paste the URL above directly into your browser address bar. The ZIP file (~2 MB) will download immediately without navigating the full website.</div>
<ol start="2">
<li>Extract the ZIP. Inside you will find several sets of shapefiles at different scales and levels. Locate the file named <code>NUTS_RG_10M_2021_4326_LEVL_1.shp</code> (10 m resolution, Level 1, WGS 84).</li>
<li>In ArcGIS Pro, create a new project called <code>ArcPy_Lab</code>. Go to Map tab &rarr; Add Data and select <code>NUTS_RG_10M_2021_4326_LEVL_1.shp</code>. The layer loads in WGS 84 (EPSG:4326).</li>
</ol>
<h2>Key Fields</h2>
<table>
<tr><th>Field</th><th>Type</th><th>Description</th></tr>
<tr><td>NUTS_ID</td><td>String</td><td>Unique NUTS region code (e.g. UKC for North East England)</td></tr>
<tr><td>LEVL_CODE</td><td>Integer</td><td>NUTS level (0, 1, 2, or 3)</td></tr>
<tr><td>CNTR_CODE</td><td>String</td><td>2-letter ISO country code &mdash; the dissolve and export field</td></tr>
<tr><td>NAME_LATN</td><td>String</td><td>Region name in Latin script</td></tr>
<tr><td>NAME_ENGL</td><td>String</td><td>Region name in English</td></tr>
<tr><td>EU_STAT</td><td>String</td><td>EU member status (Y/N)</td></tr>
<tr><td>EFTA_STAT</td><td>String</td><td>EFTA member status (Y/N)</td></tr>
</table>
</div>

<h2 id="project-instructions" class="sr-anchor">Project Instructions</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-proj" onclick="toggleGated(this,'panel-proj')">
<span class="swatch locked" id="swatch-proj">&#128274;</span>
<span class="layer-body">
<span class="layer-title">Project Instructions <span class="layer-tag tag-locked" id="tag-proj">locked</span></span>
<span class="layer-desc">Full ArcGIS Pro walkthrough, step by step. Enter your access code to view.</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-proj">
<div class="gate-form" id="gateform-proj">
<p>Enter the access code your instructor gave you to view the Project Instructions.</p>
<div class="gate-row">
<input type="text" class="gate-input" id="gateinput-proj" placeholder="Access code">
<button type="button" class="gate-btn" onclick="checkCode('proj')">Unlock</button>
</div>
<p class="gate-error" id="gateerror-proj">Incorrect code, please try again.</p>
</div>
<div class="gate-content" id="gatecontent-proj">
<h2>Project Instructions</h2>
<p><i>Introduction to Geospatial Programming with Eurostat NUTS Regions.</i></p>
<h3>Part 1 - Load and Symbolize</h3>
<ol>
<li>Add <code>NUTS_RG_10M_2021_4326_LEVL_1</code> to your ArcGIS Pro project. The default symbology shows all features in a single colour.</li>
<li>In the Contents panel, click the layer to select it. Go to the Feature Layer tab &rarr; Appearance &rarr; Symbology.</li>
<li>In the Symbology pane, set the Primary Symbology to Unique Values and the Field to CNTR_CODE. Click Add All Values.</li>
<li>Zoom to the layer extent. You will see 37 differently coloured countries, each subdivided into their NUTS Level-1 regions.</li>
<li>Take Screenshot 1.</li>
</ol>
<div class="callout"><b>Why this matters:</b> Symbolizing by CNTR_CODE before running any Python helps you visually confirm the data is correct &mdash; you can immediately see whether all countries are present and whether the geometry looks right. Always inspect data visually before processing it.</div>
<h3>Part 2 - Inspect the Dataset with arcpy</h3>
<p>Open the Python window (Analysis tab &rarr; Python). Paste and run the code below. It uses four core arcpy functions to programmatically read the dataset's geometry, coordinate system, feature count, field schema, and unique country codes.</p>
<pre><code>import arcpy

layer = 'NUTS_RG_10M_2021_4326_LEVL_1'

desc = arcpy.Describe(layer)
print('Shape type :', desc.shapeType)
print('Spatial ref:', desc.spatialReference.name)

n = arcpy.management.GetCount(layer)[0]
print('Feature count:', n)

print('\nFields:')
for f in arcpy.ListFields(layer):
    print(' ', f.name, '|', f.type)

countries = set()
with arcpy.da.SearchCursor(layer, ['CNTR_CODE']) as cur:
    for row in cur:
        countries.add(row[0])
print('\nCountries found:', len(countries))
print(sorted(countries))
</code></pre>
<div class="callout"><b>Why this matters:</b> arcpy.Describe() is the programmatic equivalent of right-clicking a layer and choosing Properties. GetCount() and ListFields() read the table structure. SearchCursor reads the actual data row by row. Together these four tools let you audit any dataset without opening a single dialog box.</div>
<p>Expected output summary: Shape type Polygon; Spatial ref GCS_WGS_1984; Feature count 125 (regions and overseas territories); Fields include NUTS_ID, LEVL_CODE, CNTR_CODE, NAME_LATN, NAME_ENGL, EU_STAT, and more; Countries found 37.</p>
<ol start="1">
<li>Take Screenshot 2 &mdash; capture the Python window showing the full output.</li>
</ol>
<h3>Part 3 - Dissolve to Country Boundaries</h3>
<p>The NUTS Level-1 file contains sub-national regions, not country outlines. To create one polygon per country you use Dissolve with CNTR_CODE as the dissolve field. ArcGIS Pro merges all regions sharing the same country code into a single (possibly multi-part) polygon.</p>
<pre><code>import arcpy, os

arcpy.env.overwriteOutput = True
layer = 'NUTS_RG_10M_2021_4326_LEVL_1'

aprx = arcpy.mp.ArcGISProject('CURRENT')
gdb  = aprx.defaultGeodatabase
out  = os.path.join(gdb, 'Europe_Countries')

arcpy.management.Dissolve(
    in_features=layer,
    out_feature_class=out,
    dissolve_field='CNTR_CODE',
    multi_part='MULTI_PART'
)
n = arcpy.management.GetCount(out)[0]
print('Country polygons:', n)
</code></pre>
<div class="callout"><b>Note:</b> The script uses arcpy.mp.ArcGISProject("CURRENT") to find the project's default geodatabase automatically. This means you do not need to hard-code a path &mdash; the output always goes into the correct GDB regardless of where the project is saved on disk.</div>
<p>After running, Europe_Countries appears in the Contents panel. Symbolize it by CNTR_CODE (Unique Values) and zoom to its extent.</p>
<ol>
<li>Confirm the output has 37 features (one per country).</li>
<li>Take Screenshot 3.</li>
</ol>
<h3>Part 4 - Export One Shapefile per Country</h3>
<p>The final step automates a task that would be extremely tedious to do manually: exporting the NUTS regions for each country into a separate shapefile. The script uses a Python set to collect unique country codes, then loops over them and calls ExportFeatures with a WHERE clause.</p>
<pre><code>import arcpy, os

layer = 'NUTS_RG_10M_2021_4326_LEVL_1'
out_folder = r'C:\GIS\ArcPy_Lab\by_country'
os.makedirs(out_folder, exist_ok=True)

countries = set()
with arcpy.da.SearchCursor(layer, ['CNTR_CODE']) as cur:
    for row in cur:
        countries.add(row[0])

for code in sorted(countries):
    where = "CNTR_CODE = '" + code + "'"
    out_shp = os.path.join(out_folder, code + '_NUTS1.shp')
    arcpy.conversion.ExportFeatures(layer, out_shp, where)
    print('  Exported:', code)
print('Done! Files in:', out_folder)
</code></pre>
<div class="callout"><b>Power of scripting:</b> This loop replaces what would otherwise be 37 manual "Select by Attributes &rarr; Export" operations. With 37 countries the manual approach would take roughly 20 minutes and be error-prone. The script runs in under 30 seconds and produces identical results every time. Scale it to 242 NUTS-2 regions or thousands of census tracts with zero additional effort.</div>
<p>After the loop finishes, navigate to your by_country folder in Windows Explorer. You should see one .shp file per country code (AL_NUTS1.shp, AT_NUTS1.shp, BE_NUTS1.shp, ... UK_NUTS1.shp) &mdash; 37 files in total.</p>
<ol>
<li>Scroll the Python window to show the "Exported: XX" lines. Take Screenshot 4.</li>
</ol>
</div>
</div>

<h2 id="result-reference" class="sr-anchor">Result Reference</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-result" onclick="toggleGated(this,'panel-result')">
<span class="swatch locked" id="swatch-result">&#128274;</span>
<span class="layer-body">
<span class="layer-title">Result Reference <span class="layer-tag tag-locked" id="tag-result">locked</span></span>
<span class="layer-desc">Discussion answer key and verified output numbers to check your work.</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-result">
<div class="gate-form" id="gateform-result">
<p>Enter the access code your instructor gave you to view the Result Reference.</p>
<div class="gate-row">
<input type="text" class="gate-input" id="gateinput-result" placeholder="Access code">
<button type="button" class="gate-btn" onclick="checkCode('result')">Unlock</button>
</div>
<p class="gate-error" id="gateerror-result">Incorrect code, please try again.</p>
</div>
<div class="gate-content" id="gatecontent-result">
<h2>Discussion Questions and Answer Key</h2>
<p><b>Q1. What is the feature count of the NUTS Level-1 layer, and why is it higher than the number of countries?</b></p>
<p>Answer: The layer has 125 features. NUTS Level-1 includes overseas territories and outermost regions (e.g. French Guiana, the Canary Islands, the Azores) as separate features even though they belong to the same country. After Dissolve, these are merged back into their parent country polygon, producing 37 country-level features.</p>
<p><b>Q2. Why do we use multi_part="MULTI_PART" in the Dissolve call?</b></p>
<p>Answer: Countries with non-contiguous territory (islands, overseas regions) would be split into multiple separate polygons under SINGLE_PART. MULTI_PART keeps all pieces of one country in a single multi-polygon feature, which is the geographically correct representation.</p>
<p><b>Q3. What does arcpy.da.SearchCursor do that arcpy.ListFields cannot?</b></p>
<p>Answer: ListFields reads the schema &mdash; it tells you what fields exist and their data types. SearchCursor reads the actual values stored in those fields, row by row. You need SearchCursor to find distinct country codes because those are data values, not structural information about the table.</p>
<p><b>Q4. If you needed to run this same workflow on NUTS Level-2 data (242 regions) in the future, what would you change in the script?</b></p>
<p>Answer: Only the layer name variable &mdash; change 'NUTS_RG_10M_2021_4326_LEVL_1' to 'NUTS_RG_10M_2021_4326_LEVL_2'. All the logic (inspect, dissolve, export) stays identical. This is the core value of scripting: parameterised code adapts to new data with minimal changes.</p>
<h2>Verified Reference Numbers</h2>
<table>
<tr><th>Checkpoint</th><th>Expected value</th></tr>
<tr><td>Input feature count (Part 2)</td><td>125</td></tr>
<tr><td>Unique countries found (Part 2)</td><td>37</td></tr>
<tr><td>Europe_Countries polygons after Dissolve (Part 3)</td><td>37</td></tr>
<tr><td>Shapefiles written by the export loop (Part 4)</td><td>37 (one per country code)</td></tr>
</table>
<div class="callout"><b>Note:</b> If your counts differ from the table above, recheck that you're using the NUTS 2021 Level-1 file specifically (not Level-2 or a different vintage), and that CNTR_CODE was used as the dissolve field in Part 3.</div>
<h2>Data Source Citation</h2>
<p>Eurostat, GISCO &mdash; Geographic Information System of the Commission. NUTS 2021, Level 1 (10 m resolution). Downloaded from <code>gisco-services.ec.europa.eu/distribution/v2/nuts/</code>. Data are freely available for reuse under the Eurostat copyright notice.</p>
</div>
</div>
<footer>Europe_Countries / CNTR_CODE</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "ARC2026",
result: "ARC2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../overlay/">Overlay</a></span>
<span class="lab-nav-next"></span>
</div>
