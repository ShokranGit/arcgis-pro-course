# Attribute Table and Field Lab

<p class="lab-subtitle">Mapping ADA Accessibility - NYC Subway Stations</p>

<p class="lab-back"><a href="../../lessons/#attribute-table-and-field">&larr; Back to Lessons</a></p>

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
<p>The MTA wants a GIS point layer of NYC subway stations annotated with ADA accessibility status - data that feeds into their Capital Program accessibility reporting. You will start from a raw CSV file, convert it to a permanent spatial layer, and use Select By Attributes together with Field Calculator to populate a new attribute field - no coding required.</p>
<h2>Tasks</h2>
<ol>
<li>Download the MTA Subway Stations dataset as a CSV from data.ny.gov.</li>
<li>Add the CSV to ArcGIS Pro and review its attribute table, noting field names and data types.</li>
<li>Use XY Table To Point (right-click the table &rarr; Create Points From Table) to convert the lat/lon columns directly into a permanent point feature class named NYC_Subway_Stations.</li>
<li>Add a new Text field ADA_Status. Use Select By Attributes + Calculate Field to label stations "Accessible" or "Not Accessible" - no coding required.</li>
<li>Symbolize stations by ADA_Status using Unique Values, and export a map layout as JPEG.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>Screenshot of the XY Table To Point geoprocessing dialog with all parameters configured before running.</li>
<li>Screenshot of the attribute table showing the ADA_Status field fully populated (first 10 rows visible, no blank cells).</li>
<li>Map of NYC symbolized by ADA_Status with a legend.</li>
<li>Exported JPEG layout (Letter, Landscape, 150 DPI).</li>
<li>One-paragraph response: Which boroughs have the highest concentration of accessible stations, and what does this suggest about equity in transit access?</li>
</ul>
</div>


<h2 id="data-acquisition" class="sr-anchor">Data Acquisition</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: downloading the MTA subway stations table</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h3>Dataset - MTA Subway Stations (New York State Open Data)</h3>
<p>The dataset comes from data.ny.gov - the New York State Open Data portal (separate from NYC Open Data). It is maintained by the Metropolitan Transportation Authority and updated as stations change. No account is required.</p>
<ol>
<li>Go to <code>data.ny.gov</code> and search for "MTA Subway Stations".</li>
<li>Open the result titled "MTA Subway Stations" by MTA. Confirm the publisher is the Metropolitan Transportation Authority.</li>
<li>Click the Export button (top-right area of the dataset page).</li>
<li>Select CSV from the format list. The file downloads as a .csv file (approximately 160 KB).</li>
<li>Save the file to your project folder. Do not open or edit it in Excel - this can corrupt field types.</li>
</ol>
<div class="callout"><b>Note:</b> Direct download link: <code>data.ny.gov/api/views/39hk-dx4f/rows.csv</code></div>
<h3>Key Fields in the Dataset</h3>
<table>
<tr><th>Field Name</th><th>Type</th><th>Description</th></tr>
<tr><td>Stop Name</td><td>Text</td><td>Full name of the station</td></tr>
<tr><td>Borough</td><td>Text</td><td>M, Bk, Bx, Q, or SI</td></tr>
<tr><td>Daytime Routes</td><td>Text</td><td>Space-separated train lines (e.g. "A C E")</td></tr>
<tr><td>Structure</td><td>Text</td><td>Subway, Elevated, Open Cut, or At Grade</td></tr>
<tr><td>GTFS Latitude</td><td>Double</td><td>Y coordinate in decimal degrees (WGS 1984)</td></tr>
<tr><td>GTFS Longitude</td><td>Double</td><td>X coordinate in decimal degrees (WGS 1984)</td></tr>
<tr><td>ADA</td><td>Integer</td><td>1 = accessible, 0 = not accessible</td></tr>
<tr><td>ADA Notes</td><td>Text</td><td>Conditions or qualifications on ADA access</td></tr>
<tr><td>Station ID</td><td>Integer</td><td>Unique numeric identifier per station</td></tr>
<tr><td>Line</td><td>Text</td><td>Subway line/trunk name (e.g. "IND Eighth Ave")</td></tr>
</table>
<div class="callout"><b>Watch out:</b> Do NOT open the CSV in Excel before adding it to ArcGIS Pro. Excel may auto-format Station ID as a number with commas, or silently convert field types. Add the raw downloaded file directly to your ArcGIS Pro project.</div>
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
<p><i>Mapping ADA Accessibility - NYC Subway Stations. Tabular Data and Mapping, Attribute Table and Field.</i></p>
<h3>Part 1 - Add the CSV and Review the Attribute Table</h3>
<ol>
<li>Open ArcGIS Pro. Create a new project using the Map template.</li>
<li>In the Catalog pane, navigate to your project folder. Right-click the CSV file &rarr; Add To Current Map. It appears in the Contents pane as a table (no geometry yet).</li>
<li>Right-click the table in the Contents pane &rarr; Open. The attribute table opens - note the row count shown at the bottom of the table.</li>
</ol>
<p>Review the field types visible in the column headers or via the Fields view:</p>
<table>
<tr><th>Field Name</th><th>Type</th><th>Description</th></tr>
<tr><td>Stop Name</td><td>Text</td><td>Unique station names - unambiguously text</td></tr>
<tr><td>Borough</td><td>Text</td><td>Single-letter codes: M, Bk, Bx, Q, SI</td></tr>
<tr><td>Daytime Routes</td><td>Text</td><td>Space-separated strings: "A C E", "1 2 3"</td></tr>
<tr><td>GTFS Latitude</td><td>Double</td><td>Decimal degrees - this is your Y field</td></tr>
<tr><td>GTFS Longitude</td><td>Double</td><td>Decimal degrees - this is your X field</td></tr>
<tr><td>ADA</td><td>Integer</td><td>0 or 1 - binary flag, not True/False text</td></tr>
<tr><td>Station ID</td><td>Integer</td><td>Whole number ID - no decimal places</td></tr>
</table>
<div class="callout"><b>Key concept:</b> ArcGIS Pro assigns field types when it reads the CSV: columns with only digits become Integer or Double; columns with letters become Text. Latitude and Longitude come in as Double, which is what XY Table To Point requires for the X and Y fields.</div>
<h3>Part 2 - XY Table To Point</h3>
<ol>
<li>In the Contents pane, right-click the CSV table (listed under Standalone Tables) &rarr; Create Points From Table &rarr; XY Table To Point. The geoprocessing tool dialog opens.</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-create-points-menu.png" alt="Right-click the CSV table under Standalone Tables and choose Create Points From Table then XY Table To Point">
<p class="ref-caption">Right-click the CSV table under Standalone Tables &rarr; Create Points From Table &rarr; XY Table To Point.</p>
</div>
<ol start="2">
<li>Configure the tool parameters:</li>
</ol>
<table>
<tr><th>Parameter</th><th>Value</th></tr>
<tr><td>Input Table</td><td>MTA_Subway_Stations (auto-filled)</td></tr>
<tr><td>Output Feature Class</td><td>NYC_Subway_Stations (in your project geodatabase)</td></tr>
<tr><td>X Field</td><td>GTFS Longitude</td></tr>
<tr><td>Y Field</td><td>GTFS Latitude</td></tr>
<tr><td>Z Field</td><td>(leave blank)</td></tr>
<tr><td>Coordinate System</td><td>GCS WGS 1984</td></tr>
</table>
<div class="ref-figure">
<img src="../attribute-field-xy-table-to-point.png" alt="XY Table To Point dialog with X Field set to GTFS Longitude and Y Field set to GTFS Latitude">
<p class="ref-caption">XY Table To Point dialog with all parameters configured. Note X Field is GTFS Longitude and Y Field is GTFS Latitude.</p>
</div>
<ol start="3">
<li>Click OK. ArcGIS Pro creates NYC_Subway_Stations as a permanent feature class directly in your geodatabase. The station points appear on the map.</li>
<li>Remove the original CSV table from the Contents pane. You now work only from NYC_Subway_Stations.</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-points-created.png" alt="Station points displayed across all five boroughs with the attribute table showing 496 rows">
<p class="ref-caption">After clicking OK, station points appear across all five boroughs. The attribute table shows 496 rows.</p>
</div>
<div class="callout"><b>Key concept:</b> Unlike the legacy "Display XY Data" approach (which created a temporary event layer requiring a separate Export Features step), XY Table To Point writes a permanent feature class in one step. You can now add, edit, and calculate fields on it freely.</div>
<h3>Part 3 - Add a Field and Use the Field Calculator</h3>
<p>You will add a new field to NYC_Subway_Stations and populate it using Select By Attributes combined with Calculate Field. The key idea: first select a group of features, then assign a value to only those selected rows. No Python code is required - just dropdowns and typed text values.</p>
<ol>
<li>Open the attribute table of NYC_Subway_Stations. Click Add Field (the + icon on the table toolbar).</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-add-field.png" alt="Add Field button on the attribute table toolbar">
<p class="ref-caption">Click the Add Field button (+) on the attribute table toolbar to open the Fields view.</p>
</div>
<ol start="2">
<li>In the Fields view that opens, set Name to ADA_Status, Data Type to Text, and Length to 15. Click Save (the floppy disk icon on the ribbon), then close the Fields view.</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-fields-view.png" alt="Fields view showing the new ADA_Status field with Data Type Text and Length 15">
<p class="ref-caption">Fields view showing the new ADA_Status field: Data Type Text, Length 15. Click Save on the ribbon, then close this tab.</p>
</div>
<p>Now populate the field using selection - two rounds:</p>
<ol start="3">
<li>On the attribute table toolbar, click Select By Attributes. A dialog opens - this is a separate tool from Calculate Field.</li>
<li>In the Select By Attributes dialog, build the expression: ADA is equal to 1. Click OK. The dialog closes. Check the status bar at the bottom of the attribute table - it should now say something like "162 of 496 selected". If it still says "0 of 496 selected", the selection did not work - do not go on to the next step.</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-select-by-attributes.png" alt="Select By Attributes dialog with the expression ADA is equal to 1">
<p class="ref-caption">Select By Attributes: build the expression ADA is equal to 1, then click OK.</p>
</div>
<ol start="5">
<li>Right-click the ADA_Status column header &rarr; Calculate Field. The Calculate Field dialog opens. You should still see the selection count in the status bar.</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-calculate-field-menu.png" alt="Right-click context menu on the ADA_Status column header showing Calculate Field">
<p class="ref-caption">Right-click the ADA_Status column header and select Calculate Field from the context menu.</p>
</div>
<ol start="6">
<li>In the Expression box at the bottom of the dialog, type exactly "Accessible" - just those 12 characters, quotation marks included. Do not type anything else. Click OK. Only the selected rows update - the rest stay blank for now.</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-calculate-accessible.png" alt="Calculate Field dialog with the quoted value Accessible applied to 162 selected records">
<p class="ref-caption">Calculate Field: type "Accessible" in the Expression box. The blue toggle confirms only the 162 selected rows will be updated.</p>
</div>
<p>Switch to the other group:</p>
<ol start="7">
<li>Back on the attribute table toolbar, click Switch. This inverts the selection - now all stations with ADA equal to 0 are selected. The status bar count will change.</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-switch-selection.png" alt="Switch Selection button inverting the selection in the attribute table">
<p class="ref-caption">After clicking Switch, the selection inverts - stations with ADA equal to 0 are now highlighted in the map and table.</p>
</div>
<ol start="8">
<li>Right-click ADA_Status &rarr; Calculate Field. In the Expression box type "Not Accessible" (with quotes, nothing else). Click OK.</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-calculate-not-accessible.png" alt="Calculate Field dialog with the quoted value Not Accessible applied to 334 selected records">
<p class="ref-caption">Calculate Field: type "Not Accessible" for the inverted selection of 334 records.</p>
</div>
<ol start="9">
<li>Click Clear on the toolbar to deselect everything. Scroll through the table - every row in ADA_Status should now read either Accessible or Not Accessible, with no blanks.</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-clear-selection.png" alt="Attribute table after clearing the selection with the ADA_Status column fully populated">
<p class="ref-caption">After clicking Clear, the ADA_Status column is fully populated - every row shows either Accessible or Not Accessible.</p>
</div>
<div class="callout"><b>Key concept:</b> This Select &rarr; Calculate pattern is one of the most common field-editing workflows in GIS. By selecting a subset first, Calculate Field only touches those rows - leaving the others unchanged. You can repeat this as many times as needed to fill in a field group by group, without writing any code.</div>
<h3>Part 4 - Symbolize and Export the Layout</h3>
<ol>
<li>Right-click NYC_Subway_Stations in the Contents pane &rarr; Symbology.</li>
<li>Change the renderer to Unique Values. Set Field 1 to ADA_Status. Two classes appear automatically: Accessible and Not Accessible.</li>
</ol>
<div class="ref-figure">
<img src="../attribute-field-symbology.png" alt="Symbology pane set to Unique Values on ADA_Status with two classes detected">
<p class="ref-caption">Symbology pane set to Unique Values on ADA_Status - two classes are detected automatically from the field values.</p>
</div>
<ol start="3">
<li>Set colors: Accessible &rarr; green, Not Accessible &rarr; gray. Adjust symbol size to 4 pt for readability.</li>
<li>Right-click the layer &rarr; Zoom to Layer to see all of NYC.</li>
<li>Insert tab &rarr; New Layout &rarr; Letter, Landscape.</li>
<li>Add a Map Frame (drag to fill most of the page), a Title ("NYC Subway Stations - ADA Accessibility"), a Legend, a North Arrow, and a Scale Bar.</li>
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
<p><i>Mapping ADA Accessibility - NYC Subway Stations. Tabular Data and Mapping, Attribute Table and Field.</i></p>
<h3>Reference Answer Key - Verified Results</h3>
<p>This lab has been tested end-to-end against the MTA Subway Stations dataset from data.ny.gov. MTA updates the file periodically, so row counts vary by download date. Confirmed values for reference:</p>
<ul>
<li>Total stations in dataset: varies by MTA release date - the 2024-25 file contained about 496 records at the time of testing. Use whatever count your download returns.</li>
<li>Unique structure types: Subway (underground), Elevated, Open Cut, At Grade.</li>
<li>ADA_Status: every station with ADA equal to 1 should read "Accessible"; every station with ADA equal to 0 should read "Not Accessible". No rows should remain blank after both selection rounds.</li>
<li>The Select By Attributes plus Calculate Field workflow behaves identically regardless of the record count.</li>
</ul>
<h3>Common Student Errors</h3>
<ul>
<li>Typing a condition into the Calculate Field expression box (for example !ADA! = 1 or ADA = 1). This is the most common error. The Calculate Field box receives only the value to store - "Accessible" or "Manhattan" - nothing else. The condition belongs in Select By Attributes, which is a completely separate tool opened first. Typing a condition in Calculate Field produces ERROR 000539 (SyntaxError: invalid syntax).</li>
<li>Using GTFS Latitude as X and GTFS Longitude as Y - the axes are reversed. Longitude is always X (east-west) and Latitude is Y (north-south). Stations will appear in the ocean or on the wrong continent.</li>
<li>Forgetting quotation marks in Calculate Field. The expression box expects a text value with quotes: "Accessible" - not just the word Accessible. Without quotes ArcGIS Pro treats it as a field name and throws an error.</li>
<li>Running Calculate Field before making a selection. If no features are selected when you click OK, Calculate Field updates every row - overwriting the previous round. Always confirm the selection count in the status bar before calculating.</li>
</ul>
<div class="callout"><b>Note:</b> If any ADA_Status cells are still blank, one of the two rounds ran without an active selection. Clear the selection, redo Select By Attributes for that group, and calculate again.</div>
</div>
</div>
<footer>MTA_Subway_Stations.csv / NYC_Subway_Stations / ADA_Status</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "ATF2026",
result: "ATF2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"></span>
<span class="lab-nav-next"><a href="../select-by-attributes/">Select by Attributes</a></span>
</div>
