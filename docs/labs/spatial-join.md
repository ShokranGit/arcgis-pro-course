# Spatial Join Lab

<p class="lab-subtitle">Counting Schools per District - Oregon</p>

<p class="lab-back"><a href="../../lessons/#spatial-join">&larr; Back to Lessons</a></p>

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
<p>An Oregon state education office wants to verify how many public schools fall within each school district's official boundary - a data-quality check against administrative records. This is a classic point-in-polygon Spatial Join: the geographic relationship itself (which polygon contains which point) becomes the basis for the match, without needing any shared attribute field. The result is a school count attached to every district polygon.</p>
<h2>Tasks</h2>
<ol>
<li>Download Oregon public school point locations and Oregon unified school district boundaries, both from NCES EDGE.</li>
<li>Isolate Oregon from each nationwide file using Select By Attributes, then Export Features to create OR_Schools and OR_Districts.</li>
<li>Run a Spatial Join - districts as Target Features, schools as Join Features, Match Option: Contains.</li>
<li>Open the output attribute table, sort by Join_Count descending, and identify the highest-count district.</li>
<li>Symbolize districts by school count using Graduated Colors on Join_Count.</li>
<li>Build a layout and export a JPEG.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>Screenshot of the Spatial Join dialog with all parameters configured.</li>
<li>The output attribute table sorted by Join_Count descending, showing the top districts.</li>
<li>A map of Oregon symbolized by school count per district.</li>
<li>The exported JPEG layout.</li>
<li>A short paragraph naming the district with the most schools and describing the geographic pattern (where are high-count districts concentrated, and why).</li>
</ul>
</div>

<h2 id="data-acquisition" class="sr-anchor">Data Acquisition</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: downloading Oregon school locations and district boundaries</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h3>Dataset 1 - Public School Point Locations (NCES EDGE)</h3>
<ol>
<li>Go to <code>nces.ed.gov/programs/edge/Geographic/SchoolLocations</code>. No account required.</li>
<li>Confirm you are on the most recent year (currently 2024-25). Scroll down to the Data heading.</li>
<li>Click "Public School File" - not the District or Postsecondary file. It downloads as a ZIP named something like <code>EDGE_GEOCODE_PUBLICSCH_2425.zip</code>.</li>
<li>Extract the outer ZIP. Inside you will find four items including a second ZIP named <code>Shapefile_SCH.zip</code>. Extract that inner ZIP separately - the actual .shp file is one level deeper than expected.</li>
<li>Confirm you have a .shp file before continuing. Add it to ArcGIS Pro.</li>
</ol>
<div class="callout"><b>Watch out:</b> This is a nationwide file with ~102,000 school points. The field to filter Oregon schools is OPSTFIPS (operating state FIPS), not STATEFP. Use OPSTFIPS = 41 in Select By Attributes. Using the wrong field will select zero records or the wrong state.</div>
<h3>Dataset 2 - School District Boundaries (NCES EDGE)</h3>
<ol>
<li>Go to <code>nces.ed.gov/programs/edge/Geographic/DistrictBoundaries</code>. Same EDGE site, no account required.</li>
<li>The page shows the current year's data. Click "Layers by District Type (169 MB)". It downloads as <code>TL_2025_SD.zip</code>.</li>
<li>Extract the ZIP. You will see four shapefiles:
<ul>
<li><code>TL_2025_US_SDE.shp</code> - Elementary districts</li>
<li><code>TL_2025_US_SDS.shp</code> - Secondary districts</li>
<li><code>TL_2025_US_SDU.shp</code> - Unified districts (use this one)</li>
<li><code>TL_2025_VT_SDA.shp</code> - Vermont only (ignore)</li>
</ul>
</li>
<li>Add <code>TL_2025_US_SDU.shp</code> to ArcGIS Pro. Filter Oregon with STATEFP = 41 in Select By Attributes.</li>
</ol>
<div class="callout"><b>Note:</b> Oregon uses unified K-12 districts, so SDU covers the whole state. SDE/SDS splits apply only to northeastern states.</div>
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
<p><i>Counting Schools per District - Oregon. Tabular Data and Mapping, Spatial Join.</i></p>
<h3>Part 1 - Setup: Isolate Oregon from Both Datasets</h3>
<ol>
<li>Open ArcGIS Pro, create a new project (Map template). Add <code>TL_2025_US_SDU.shp</code> and <code>EDGE_GEOCODE_PUBLICSCH_2425.shp</code> via Map &rarr; Add Data.</li>
<li>Right-click TL_2025_US_SDU &rarr; Selection &rarr; Select By Attributes. Expression: STATEFP is equal to 41. Click OK - 188 districts selected (cyan highlight over Oregon).</li>
</ol>
<div class="ref-figure">
<img src="../spatial-join-select-by-attributes-districts.png" alt="Select By Attributes on TL_2025_US_SDU with STATEFP equal to 41">
<p class="ref-caption">Select By Attributes on TL_2025_US_SDU: STATEFP = 41 selects 188 Oregon unified districts.</p>
</div>
<ol start="3">
<li>Right-click TL_2025_US_SDU &rarr; Data &rarr; Export Features. Output name: OR_Districts, save to project geodatabase. Click OK.</li>
</ol>
<div class="ref-figure">
<img src="../spatial-join-export-features-districts.png" alt="Export Features dialog exporting 188 selected districts to OR_Districts">
<p class="ref-caption">Export Features: 188 selected records &rarr; OR_Districts.</p>
</div>
<ol start="4">
<li>Right-click EDGE_GEOCODE_PUBLICSCH_2425 &rarr; Selection &rarr; Select By Attributes. Expression: OPSTFIPS is equal to 41. Click OK - 1,299 Oregon schools selected.</li>
</ol>
<div class="ref-figure">
<img src="../spatial-join-select-by-attributes-schools.png" alt="Select By Attributes on the schools layer with OPSTFIPS equal to 41">
<p class="ref-caption">Select By Attributes on the schools layer: OPSTFIPS = 41 (not STATEFP) selects 1,299 Oregon schools.</p>
</div>
<ol start="5">
<li>Right-click EDGE_GEOCODE_PUBLICSCH_2425 &rarr; Data &rarr; Export Features. Output name: OR_Schools. Click OK.</li>
</ol>
<div class="ref-figure">
<img src="../spatial-join-export-features-schools.png" alt="Export Features dialog exporting 1,299 selected schools to OR_Schools">
<p class="ref-caption">Export Features: 1,299 selected records &rarr; OR_Schools.</p>
</div>
<ol start="6">
<li>Remove the two nationwide layers. You now have OR_Districts (188 polygons) and OR_Schools (1,299 points) in your project.</li>
</ol>

<h3>Part 2 - Run the Spatial Join</h3>
<p>A Spatial Join attaches the identity of each district polygon to every school point that falls inside it, then counts. Unlike a Table Join, no shared ID field is needed - location alone determines the match.</p>
<ol>
<li>Analysis tab &rarr; Tools &rarr; search "Spatial Join". Open it.</li>
<li>Configure the dialog as shown below and click Run:</li>
</ol>
<div class="ref-figure">
<img src="../spatial-join-dialog.png" alt="Spatial Join dialog with OR_Districts as Target Features and OR_Schools as Join Features">
<p class="ref-caption">Spatial Join dialog: OR_Districts as Target, OR_Schools as Join Features, Match Option = Contains.</p>
</div>
<div class="callout"><b>Key concept:</b> "Contains" means: for each district polygon, count every school point that falls inside it. The output is a copy of OR_Districts with a new Join_Count field showing the number of schools per district. No shared attribute field was needed - location did the matching.</div>
<ol start="3">
<li>Right-click OR_Districts_SpatialJoin &rarr; Attribute Table. Click the Join_Count column header to sort descending. The top district is Portland with 91 schools.</li>
</ol>
<div class="ref-figure">
<img src="../spatial-join-attribute-table.png" alt="Attribute table sorted by Join_Count descending showing Portland with 91 schools">
<p class="ref-caption">Attribute table sorted by Join_Count descending: Portland (91), Salem-Keizer (68), Beaverton (56), Eugene 4J (40), Hillsboro (39).</p>
</div>
<h3>Part 3 - Symbolize and Export Layout</h3>
<ol>
<li>Right-click OR_Districts_SpatialJoin &rarr; Symbology. Change renderer to Graduated Colors. Set Field to Join_Count. Leave Classes at 5.</li>
<li>Right-click the layer &rarr; Zoom to Layer. The choropleth map of Oregon appears, with Willamette Valley districts standing out in the highest classes.</li>
</ol>
<div class="ref-figure">
<img src="../spatial-join-graduated-colors.png" alt="Graduated Colors symbology on Join_Count showing high school counts in the Willamette Valley">
<p class="ref-caption">Graduated Colors on Join_Count: dark = many schools (Portland metro), light = few (eastern Oregon). 5 classes, Natural Breaks.</p>
</div>
<ol start="3">
<li>Insert tab &rarr; New Layout &rarr; Letter, Landscape. Add a Map Frame, Legend, North Arrow, Scale Bar, and a title text element.</li>
<li>Share tab &rarr; Export Layout. File type: JPEG, 150 DPI. Click Export.</li>
</ol>
</div>
</div>

<h2 id="result-reference" class="sr-anchor">Result Reference</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-result" onclick="toggleGated(this,'panel-result')">
<span class="swatch locked" id="swatch-result">&#128274;</span>
<span class="layer-body">
<span class="layer-title">Result Reference <span class="layer-tag tag-locked" id="tag-result">locked</span></span>
<span class="layer-desc">Verified expected output. Enter your access code to view.</span>
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
<h2>Result Reference</h2>
<p><i>Counting Schools per District - Oregon. Tabular Data and Mapping, Spatial Join.</i></p>
<h3>Reference Answer Key - Verified Results</h3>
<p>This lab has been run end-to-end. Confirmed Oregon results:</p>
<ul>
<li>Oregon unified school districts: 188</li>
<li>Oregon public schools exported: 1,299</li>
<li>Top district by school count: Portland School District - 91 schools</li>
<li>2nd: Salem-Keizer School District - 68 | 3rd: Beaverton - 56 | 4th: Eugene 4J - 40 | 5th: Hillsboro - 39</li>
<li>Pattern: high-count districts cluster in the Willamette Valley (Portland metro, Salem, Eugene). Eastern Oregon districts cover large geographic areas but contain very few schools each.</li>
</ul>
<div class="callout"><b>Note:</b> If your Join_Count numbers look off, recheck that you used OPSTFIPS (not STATEFP) to isolate Oregon schools before running the Spatial Join - mixing up those two fields on the schools layer is the most common source of error in this lab.</div>
</div>
</div>
<footer>TL_2025_US_SDU / EDGE_GEOCODE_PUBLICSCH_2425 / OR_Districts / OR_Schools / OR_Districts_SpatialJoin</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "SPJ2026",
result: "SPJ2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../table-join/">Table Join</a></span>
<span class="lab-nav-next"><a href="../buffer/">Buffer</a></span>
</div>
