# Selection by Location Lab

<p class="lab-subtitle">Mapping robbery risk near parks and police stations - Chicago, IL</p>

<p class="lab-back"><a href="../../lessons/#select-by-location">&larr; Back to Lessons</a></p>

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
<p>The Chicago Police Department's community safety unit wants to understand how reported robberies in 2025 relate spatially to public parks and police stations. You have been asked to identify which parks have experienced a robbery on or adjacent to their grounds, which robberies happened close to a park, and, among those, which ones also occurred far from police coverage, since these may warrant additional patrol attention.</p>
<h2>Tasks</h2>
<ol>
<li>Download the three source datasets (2025 robbery points, park boundaries, police station points) from the City of Chicago Data Portal.</li>
<li>Build a new ArcGIS Pro project and add all three datasets, converting the two CSV files into point feature classes using XY Table To Point.</li>
<li>Run Select By Location to find all parks that intersect a 2025 robbery point.</li>
<li>Run Select By Location to find all robberies within 500 feet of a park.</li>
<li>Refine that selection with a second Select By Location to find, of those, which are also within 1 mile of a police station.</li>
<li>Symbolize the three result layers, build a layout with a legend, north arrow, and scale bar, and export a JPEG.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>Screenshot of each Select By Location dialog box (showing the parameters used) for Tasks 3 through 5.</li>
<li>Screenshot of each resulting attribute table showing the selected count.</li>
<li>The final exported JPEG map layout.</li>
<li>A short paragraph (3 to 5 sentences) explaining what the final selection represents geographically and why that subset might matter for patrol planning.</li>
</ul>
</div>

<h2 id="data-acquisition" class="sr-anchor">Data Acquisition Instructions</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition Instructions <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: downloading all three source datasets</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h2>Part 1 - Robbery Points <span style="font-weight:400;color:var(--ink-soft)">(dataset ID <code>ijzp-q8t2</code>)</span></h2>
<h3>Option A - Manual filter on the portal</h3>
<ol>
<li>Go to the dataset page: <code>data.cityofchicago.org/Public-Safety/Crimes-2001-to-Present/ijzp-q8t2</code></li>
<li>Click the <b>Data</b> tab near the top of the page (next to About).</li>
<li>The full table loads, sorted by date, with a total record count shown at the bottom left.</li>
<li>Scroll to the <b>Primary Type</b> column header. Hover directly over the header text, a small hamburger icon appears on the right edge of the cell.</li>
<li>Click that icon, then click the funnel/filter tab inside the popup.</li>
<li>The operator defaults to <b>Contains</b>, leave it as is. Type <code>ROBBERY</code> and press Enter.</li>
<li>Click outside the popup. The record count should now read <b>317,909</b>.</li>
<li>Scroll right to the <b>Year</b> column header, hover to reveal its hamburger icon, click it, then the funnel/filter tab.</li>
<li>The operator defaults to <b>Equals</b>, type <code>2025</code> and press Enter.</li>
<li>Click outside the popup. The record count should now read <b>5,810</b>, confirm this exact number before continuing.</li>
<li>Click <b>Export</b> (top right), choose the <b>Download file</b> tab, and set format to <b>CSV</b>.</li>
<li>Confirm the radio button is on "Modified data (5,810 rows)", do <b>not</b> choose "All data," which downloads roughly 8.5 million unfiltered records.</li>
<li>Click <b>Download</b> and save as <code>Robberies_2025.csv</code> into your project's Data folder.</li>
</ol>
<div class="callout"><b>Watch out:</b> if you click Export before the Year filter finishes refreshing, the download may contain every year, not just 2025. Always confirm the count reads exactly 5,810 first.</div>
<h3>Option B - Direct pre-filtered download link</h3>
<p>Paste this URL directly into your browser's address bar:</p>
<p><code>data.cityofchicago.org/resource/ijzp-q8t2.csv?primary_type=ROBBERY&year=2025&$limit=10000</code></p>
<p>This uses the portal's public API to return only ROBBERY rows from 2025. Rename the downloaded file to <code>Robberies_2025.csv</code>.</p>
<h2>Part 2 - Park Boundaries <span style="font-weight:400;color:var(--ink-soft)">(dataset ID <code>ej32-qgdr</code>)</span></h2>
<ol>
<li>Go to the "Parks - Chicago Park District Park Boundaries (current)" dataset page.</li>
<li>Click <b>Export</b>, set the format to <b>Shapefile</b>, and click <b>Download</b>.</li>
<li>Save as <code>Parks.zip</code> into your Data folder and extract it. Confirm it contains 617 records.</li>
</ol>
<h2>Part 3 - Police Stations <span style="font-weight:400;color:var(--ink-soft)">(dataset ID <code>z8bn-74gv</code>)</span></h2>
<ol>
<li>Go to the "Police Stations" dataset page.</li>
<li>Click <b>Export</b>. Only CSV, XLSX, and XML are available (no shapefile), select <b>CSV</b>.</li>
<li>Click <b>Download</b> and save as <code>PoliceStations.csv</code>. Confirm it contains 23 records.</li>
</ol>
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
<p><i>Mapping Robbery Risk Near Parks and Police Stations - Chicago, IL. Intro to GIS, Selection by Location.</i></p>
<h3>Part 1 - Folder Structure and Project Setup</h3>
<ol>
<li>Create a project folder, e.g. <code>...\Selection by Location\Project\Chicagoroberry_SelecByLocation\</code>.</li>
<li>Inside it, create a Data subfolder and place <code>Robberies_2025.csv</code>, <code>Parks.shp</code> (plus companions), and <code>PoliceStations.csv</code> there.</li>
<li>Open ArcGIS Pro, choose New Project, name it, and browse to save it in the folder above.</li>
</ol>
<h3>Part 2 - Add Data</h3>
<ol>
<li>On the Map tab, click Add Data and browse to your Data folder.</li>
<li>Add <code>Parks.shp</code> directly, it's already a feature class.</li>
<li>Add <code>Robberies_2025.csv</code> and <code>PoliceStations.csv</code> as standalone tables.</li>
</ol>
<h3>Part 3 - Convert CSVs to Points (XY Table To Point)</h3>
<ol>
<li>Open the XY Table To Point tool (Analysis tab, Tools, search "XY Table To Point").</li>
<li>Input Table: <code>Robberies_2025.csv</code>. Set X Field to longitude, Y Field to latitude. Name the output <code>Robberies_2025_XYTableToPoint</code>. Run.</li>
<li>Repeat for <code>PoliceStations.csv</code>, using its longitude/latitude fields. Name the output <code>Police_Stations_20260714_XYTableToPoint</code> (or your own date-stamped name).</li>
<li>Confirm both new point layers appear on the map with sensible Chicago-area extents.</li>
</ol>
<h3>Part 4 - Task 3: Parks That Intersect a Robbery</h3>
<ol>
<li>Select the Parks layer in Contents. Analysis tab, Select By Location.</li>
<li>Input Features: Parks. Relationship: Intersect. Selecting Features: Robberies_2025_XYTableToPoint.</li>
<li>Click Apply. You should see 13 parks selected.</li>
<li>Export the selection (right-click layer, Data, Export Features) as <code>Parks_With_Robberies</code>. Clear selection.</li>
</ol>

<h3>Part 5 - Task 4: Robberies Within 500 ft of a Park</h3>
<ol>
<li>Select the Robberies layer. Select By Location.</li>
<li>Input Features: Robberies_2025_XYTableToPoint. Relationship: Within a Distance, distance = 500 Feet. Selecting Features: Parks.</li>
<li>Click Apply. You should see 1,101 robberies selected.</li>
<li>Export as <code>Robberies_Near_Parks</code>. Do not clear selection yet.</li>
</ol>
<h3>Part 6 - Task 5: Refine by Distance to Police Station</h3>
<ol>
<li>With the 1,101 robberies still selected, run Select By Location again on the same layer.</li>
<li>Relationship: Within a Distance, distance = 1 Mile. Selecting Features: Police_Stations_20260714_XYTableToPoint. Selection type: Select Subset From the Currently Selected Features.</li>
<li>Click Apply. You should see 348 selected.</li>
<li>Export as <code>Robberies_NearParks_NearStations</code>. Clear selection.</li>
</ol>
<h3>Part 7 - Symbolize, Build Layout, Export JPEG</h3>
<ol>
<li>Symbolize Parks_With_Robberies in green, Robberies_Near_Parks in orange, Robberies_NearParks_NearStations in red.</li>
<li>Insert tab, New Layout, Letter (ANSI) Landscape. Insert a map frame of your Map.</li>
<li>Add a legend, north arrow, and scale bar from the Insert tab.</li>
<li>If the legend text looks clipped, drag its right edge wider so full layer names are visible.</li>
<li>Add a title manually via Insert, Text, Straight Text Box.</li>
<li>Export the layout as JPEG (300 dpi) into your project folder.</li>
</ol>
</div>
</div>

<h2 id="result-reference" class="sr-anchor">Result Reference</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-result" onclick="toggleGated(this,'panel-result')">
<span class="swatch locked" id="swatch-result">&#128274;</span>
<span class="layer-body">
<span class="layer-title">Result Reference <span class="layer-tag tag-locked" id="tag-result">locked</span></span>
<span class="layer-desc">Verified counts to check your work. Enter your access code to view.</span>
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
<p><i>Mapping Robbery Risk Near Parks and Police Stations - Chicago, IL. Intro to GIS, Selection by Location.</i></p>
<h3>Reference Counts</h3>
<p>Use these to confirm your own results before submitting. If your counts don't match, check your filter values and distance units before re-running the selection, don't just adjust your query to match these numbers.</p>
<ul>
<li>Total 2025 robberies: 5,810</li>
<li>Total park polygons: 617</li>
<li>Total police stations: 23</li>
<li>Task 3, Parks intersecting a 2025 robbery: 13 of 617</li>
<li>Task 4, Robberies within 500 ft of a park: 1,101 of 5,810</li>
<li>Task 5, Of those, also within 1 mile of a police station: 348 (must be less than or equal to 1,101)</li>
</ul>
<div class="callout">These counts confirm your workflow was executed correctly, they are not a substitute for doing the selections yourself, and your submitted screenshots must show your own Select By Location dialogs and attribute tables.</div>
</div>
</div>

<footer>attribute table - selection set</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "SBL2026",
result: "SBL2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../select-by-attributes/">Select by Attributes</a></span>
<span class="lab-nav-next"><a href="../surface-analysis/">Surface Analysis</a></span>
</div>
