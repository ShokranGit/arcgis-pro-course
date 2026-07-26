# Table Join Lab

<p class="lab-subtitle">Mapping Rural Health Access - Nebraska Counties</p>

<p class="lab-back"><a href="../../lessons/#table-join">&larr; Back to Lessons</a></p>

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
<p>A rural health policy office needs to identify which Nebraska counties have the weakest primary care access so outreach funding can be targeted effectively. The health statistics exist only as a spreadsheet; the county boundaries exist only as a shapefile. A Table Join attaches the numbers to the map using a shared identifier, making previously un-mappable data mappable.</p>
<h2>Tasks</h2>
<ol>
<li>Add the Nebraska county shapefile and the health CSV to a new ArcGIS Pro project.</li>
<li>Select By Attributes where STATEFP = 31 to isolate Nebraska, then Export Features.</li>
<li>Join the CSV to the exported layer using county name as the shared key.</li>
<li>Verify the join matched all 93 counties by opening the attribute table.</li>
<li>Export Features again to make the join permanent, then symbolize with Graduated Colors on PrimCare_Rate.</li>
<li>Build a layout and export a JPEG.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>Screenshot of the Add Join dialog showing the correct Input Field and Join Field.</li>
<li>Screenshot of the attribute table after the join, showing health columns present.</li>
<li>Screenshot of the Symbology pane with Graduated Colors on PrimCare_Rate.</li>
<li>The exported JPEG map layout.</li>
<li>A paragraph (4-6 sentences) identifying geographic patterns: which parts of Nebraska have the lowest physician access and why.</li>
</ul>
</div>


<h2 id="data-acquisition" class="sr-anchor">Data Acquisition</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: downloading the county boundaries and the health data file</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h3>Dataset 1 - Nebraska County Boundaries (Census TIGER)</h3>
<ol>
<li>Go to <code>census.gov/cgi-bin/geo/shapefiles/index.php</code>. No account required.</li>
<li>Select layer type Counties (and equivalent). Download the ZIP and extract it. The shapefile is <code>tl_2025_us_county.shp</code> (year may vary).</li>
</ol>
<div class="callout"><b>Note:</b> This is a nationwide file. You will filter it to Nebraska only in Part 1 of the walkthrough.</div>
<h3>Dataset 2 - NE_County_Health.csv</h3>
<p>Download the file below and save it to your project folder. Do not open and re-save it in Excel - Excel silently changes field types and will break the join. The CSV contains 93 rows (one per Nebraska county) with columns: GEOID, County, Population, Pct_Rural, PrimCare_Rate, Pct_Uninsured, Premature_Deaths, Median_Income.</p>
<p><a class="md-button" href="NE_County_Health.csv">Download NE_County_Health.csv</a></p>
<p class="ref-caption">Source: U.S. Census Bureau population estimates and CDC/HRSA county-level health indicators (illustrative). This file has been extracted and restructured by the instructor specifically for this lab — it is not the original, unmodified government dataset.</p>
<div class="callout"><b>Key concept:</b> The join uses county name (NAME &rarr; County), not FIPS code. ArcGIS Pro reads all-digit CSV columns as integers, while the shapefile stores GEOID as text - "31055" &ne; 31055 in a join. County names are unambiguously text in both datasets and always match.</div>
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
<p><i>Mapping Rural Health Access - Nebraska Counties. Tabular Data and Mapping, Table Join.</i></p>
<h3>Part 1 - Setup: Load Data and Isolate Nebraska</h3>
<ol>
<li>Open ArcGIS Pro, create a new project (Map template).</li>
<li>Map tab &rarr; Add Data. Add <code>tl_2025_us_county.shp</code> and <code>NE_County_Health.csv</code>. The CSV appears under Standalone Tables - it has no geometry.</li>
<li>Right-click the counties layer &rarr; Selection &rarr; Select By Attributes. Build the expression: STATEFP is equal to 31. Click OK. Confirm 93 counties are selected.</li>
</ol>
<div class="ref-figure">
<img src="../table-join-select-by-attributes.png" alt="Select By Attributes dialog with STATEFP equal to 31 selecting Nebraska counties">
<p class="ref-caption">Select By Attributes: STATEFP = 31 selects all 93 Nebraska counties.</p>
</div>
<ol start="4">
<li>Right-click the counties layer &rarr; Data &rarr; Export Features. Name the output Nebraska_counties, save to your project geodatabase. Click OK. A new layer with 93 features appears.</li>
</ol>
<div class="ref-figure">
<img src="../table-join-export-features.png" alt="Export Features dialog exporting selected 93 records to Nebraska_counties">
<p class="ref-caption">Export Features: Use selected records (93) &rarr; Nebraska_counties.</p>
</div>
<ol start="5">
<li>Remove the original nationwide counties layer - you no longer need it.</li>
</ol>
<h3>Part 2 - Join the Health Data Table</h3>
<ol>
<li>Right-click Nebraska_counties &rarr; Joins and Relates &rarr; Add Join.</li>
<li>Fill in the dialog exactly as shown below and click OK:</li>
</ol>
<div class="ref-figure">
<img src="../table-join-add-join-dialog.png" alt="Add Join dialog with Input Field NAME and Join Field County">
<p class="ref-caption">Add Join: Input Field = NAME, Join Table = NE_County_Health.csv, Join Field = County.</p>
</div>
<ol start="3">
<li>Open the attribute table. Scroll right past the shapefile columns and confirm the CSV columns are present (County, PrimCare_Rate, etc.) with actual values - not &lt;Null&gt;. A correct join shows 93/93 matched rows.</li>
</ol>
<div class="callout"><b>Watch out:</b> If all health columns show &lt;Null&gt;, the join failed. Check that Input Join Field = NAME and Join Table Field = County. If an old join is attached, right-click &rarr; Joins and Relates &rarr; Remove All Joins, then redo.</div>

<h3>Part 3 - Export to Permanent Feature Class and Symbolize</h3>
<p>The Add Join is temporary. Export Features converts it to a permanent geodatabase feature class with proper numeric field types - required for Graduated Colors to work.</p>
<ol>
<li>Right-click Nebraska_counties &rarr; Data &rarr; Export Features. Name the output NE_Health_Counties, save to your geodatabase. Click OK.</li>
<li>Right-click the new NE_Health_Counties layer &rarr; Symbology.</li>
<li>Change the renderer to Graduated Colors. Set Field to PrimCare_Rate. Choose a color scheme where low values are visually distinct (avoid yellow on a light basemap - use a blue or orange-red scheme). Leave Classes at 5.</li>
<li>Right-click NE_Health_Counties &rarr; Zoom to Layer. The choropleth map of Nebraska appears.</li>
</ol>
<div class="ref-figure">
<img src="../table-join-graduated-colors.png" alt="Graduated Colors symbology on PrimCare_Rate showing Nebraska choropleth map">
<p class="ref-caption">Graduated Colors on PrimCare_Rate - yellow (low) to red (high). Sand Hills counties in the northwest appear in the lowest class (0.0 = physician deserts).</p>
</div>
<div class="callout"><b>Note:</b> If PrimCare_Rate does not appear in the Graduated Colors field picker, you are symbolizing the joined Nebraska_counties layer rather than the exported NE_Health_Counties. Switch to the exported layer and try again.</div>
<h3>Part 4 - Layout and Export</h3>
<ol>
<li>Insert tab &rarr; New Layout &rarr; Letter, Landscape.</li>
<li>Insert &rarr; Map Frame. Draw a large frame. Add Legend, North Arrow, and Scale Bar from the Insert tab.</li>
<li>Add a text element: "Primary Care Physician Access - Nebraska Counties".</li>
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
<p><i>Mapping Rural Health Access - Nebraska Counties. Tabular Data and Mapping, Table Join.</i></p>
<h3>Reference Answer Key - Verified Results</h3>
<p>Expected results using the provided NE_County_Health.csv joined to the Census TIGER Nebraska county boundaries:</p>
<ul>
<li>A correct join matches all 93 counties with zero nulls.</li>
<li>The graduated color map shows a clear east-west gradient - eastern urban counties (Douglas, Lancaster, Sarpy) have the highest physician access.</li>
<li>Sand Hills and Panhandle counties have the lowest physician access.</li>
<li>Fourteen counties have PrimCare_Rate = 0.0 - genuine physician deserts, not data errors.</li>
</ul>
<div class="callout"><b>Note:</b> If your own matched-row count differs from 93/93, recheck that the join used NAME &rarr; County (text fields), not a numeric FIPS or GEOID field - that is the most common source of a mismatched join.</div>
</div>
</div>
<footer>tl_2025_us_county / NE_County_Health.csv / Nebraska_counties / NE_Health_Counties</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "TBJ2026",
result: "TBJ2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../select-by-location/">Select by Location</a></span>
<span class="lab-nav-next"><a href="../buffer/">Buffer</a></span>
</div>
