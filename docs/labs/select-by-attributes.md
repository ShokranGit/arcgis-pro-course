# Selection by Attributes Lab

<p class="lab-subtitle">Mapping America's riskiest counties - FEMA National Risk Index</p>

<p class="lab-back"><a href="../../lessons/#select-by-attributes">&larr; Back to Lessons</a></p>

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
<p>A national disaster-resilience nonprofit is prioritizing counties for outreach grants and wants three different risk "cuts" of the country mapped.</p>
<h2>Tasks</h2>
<ol>
<li>Download the <code>NRI_Shapefile_Counties</code> zip file from FEMA's National Risk Index data page (OpenFEMA).</li>
<li>Create a project and add the county shapefile to your map.</li>
<li>Open the attribute table and review the following fields: <code>RISK_SCORE</code>, <code>RISK_RATNG</code>, <code>SOVI_SCORE</code>, <code>WFIR_RISKR</code>, <code>HRCN_RISKR</code>.</li>
<li>Using Select By Attributes, select counties where RISK_RATNG equals "Very High." Export this selection as a new layer named <code>Highest_Overall_Risk</code>. Report how many counties were selected and name the states where most of them are concentrated.</li>
<li>Using Select By Attributes, select counties where WFIR_RISKR equals "Very High" or HRCN_RISKR equals "Very High" (extreme wildfire or hurricane risk). Export as <code>Extreme_SingleHazard_Risk</code>. Report the count and describe the geographic pattern (coasts vs. interior West).</li>
<li>Using Select By Attributes, select counties where RISK_SCORE is greater than 75 and SOVI_SCORE is greater than 75 (top-quartile overall risk that is also top-quartile socially vulnerable). Export as <code>HighRisk_HighVulnerability</code>. Report the count.</li>
<li>Create a layout showing all three exported layers as distinct colors on one U.S. map, with all map elements, and export as .jpeg.</li>
<li>In your report, briefly explain in words the difference between a single-condition, an OR-condition, and an AND-condition selection, using your three results as examples.</li>
</ol>
<div class="callout"><b>Note:</b> Screenshots must show the Select By Attributes dialog with the expression visible, plus the attribute table after each selection.</div>
</div>

<h2 id="data-acquisition" class="sr-anchor">Data Acquisition Instructions</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition Instructions <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: downloading the FEMA National Risk Index county data</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h2>FEMA National Risk Index, County Level</h2>
<ol>
<li>Open a web browser and go to: <code>www.fema.gov/about/openfema/data-sets/national-risk-index-data</code> (Alternative: search "FEMA National Risk Index data" in Google and click the result titled "National Risk Index Data | FEMA.gov").</li>
<li>Scroll down until you see the heading "Available Downloadable National Risk Index Data (v1.20, December 2025)" and the table below it. The table has four columns: Dataset, Table Format, Shapefile, Geodatabase.</li>
<li>Find the row labeled "All Counties" (it is the second row in the table, right below "All States and Territories").</li>
<li>In the "All Counties" row, click the word Download under the Shapefile column (do not click the ones under "Table Format" or "Geodatabase", those give you different file types you don't need for this assignment).</li>
<li>The download will start automatically as soon as you click, there is no confirmation page. The file is named <code>NRI_Shapefile_Counties.zip</code> and is about 150 MB, so it may take a minute depending on your connection.</li>
<li>Once the download finishes, go to your Downloads folder, right-click <code>NRI_Shapefile_Counties.zip</code>, and choose Extract All... (Windows) to unzip it. Choose a destination folder you'll remember, for example, the project folder you'll create in ArcGIS Pro.</li>
<li>Confirm the extracted folder contains files named something like <code>NRI_Shapefile_Counties.shp</code>, <code>.dbf</code>, <code>.shx</code>, <code>.prj</code>, etc. These four are the ones you'll need, don't delete any of them, they work together as one shapefile.</li>
</ol>
<div class="callout"><b>Watch out:</b> the table has three format choices per dataset (Table / Shapefile / Geodatabase) and it's easy to misclick since they're right next to each other. Clicking any Download link starts an automatic download with no extra confirmation step, don't click multiple download links "just to see."</div>
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
<p><i>Mapping America's Riskiest Counties - FEMA National Risk Index. Intro to GIS, Selection by Attribute.</i></p>
<h3>Part 1 - Folder Structure and Project Setup</h3>
<ol>
<li>On your computer, create a new folder named <code>LastName_SelectionByAttribute</code> (e.g., in Documents or a course folder).</li>
<li>Inside it, create two subfolders: Data and Maps.</li>
<li>Move your unzipped <code>NRI_Shapefile_Counties</code> folder (from the download step) into the Data subfolder.</li>
<li>Open ArcGIS Pro. On the Start screen, click New Project (top-left, blue "+ New" card, or "New Project" in the list).</li>
<li>In the "Create a New Project" dialog, choose Map as the template, then click OK.</li>
<li>Name the project <code>LastName_SelectionByAttribute</code>. Click the Browse (folder icon) button next to "Location" and navigate to the folder you made in step 1. Uncheck "Create a new folder for this project" if it's checked (since you already made the folder). Click OK, then click the OK button on the dialog to create the project.</li>
<li>ArcGIS Pro opens with a blank map called "Map" in the Contents pane on the left and the map view in the center.</li>
</ol>
<h3>Part 2 - Add the Data</h3>
<ol>
<li>On the ribbon, click the Map tab, then click Add Data (the icon with a plus sign and a stack of layers, on the left side of the ribbon).</li>
<li>In the "Add Data" browser window, navigate to your Data folder, then into <code>NRI_Shapefile_Counties</code>, select the file ending in .shp (e.g., <code>NRI_Shapefile_Counties.shp</code>), and click OK.</li>
<li>The county polygons for the entire U.S. and territories will draw on the map. In the Contents pane, you'll see the layer listed as <code>NRI_Shapefile_Counties</code>.</li>
</ol>
<h3>Part 3 - Explore the Attribute Table</h3>
<ol>
<li>In the Contents pane, right-click the <code>NRI_Shapefile_Counties</code> layer name, then click Attribute Table.</li>
<li>The table opens at the bottom of the screen. Scroll right (or use the horizontal scrollbar) to locate the fields RISK_SCORE, RISK_RATNG, SOVI_SCORE, WFIR_RISKR, and HRCN_RISKR. Click on a column header to confirm the exact spelling before you build your queries.</li>
<li>Close the attribute table by clicking the X on its tab.</li>
</ol>

<h3>Part 4 - Selection 1: Single Condition (Very High Overall Risk)</h3>
<ol>
<li>On the ribbon, click the Map tab, then click Select By Attributes (in the "Selection" group, magnifying glass over a table icon).</li>
<li>In the Select By Attributes pane (opens on the right), confirm "Input Rows" is set to <code>NRI_Shapefile_Counties</code> and "Selection type" is New selection.</li>
<li>Click Add Clause. A new row appears with three dropdowns: field, operator, value.</li>
<li>Set the first dropdown to RISK_RATNG, the operator dropdown to is equal to, and in the value box type Very High (or use the value dropdown if it auto-populates and pick "Very High" from the list).</li>
<li>Click Apply at the bottom of the pane. In the map, 17 counties should highlight in cyan/teal (the default selection color). You can verify the count in the bottom-left status bar or by reopening the attribute table (it will show "17 of 3232 Selected" at the bottom).</li>
</ol>
<h3>Part 5 - Export Selection 1</h3>
<ol>
<li>Right-click the <code>NRI_Shapefile_Counties</code> layer in Contents, hover over Data, then click Export Features.</li>
<li>In the "Export Features" dialog, set Output Location to your Data folder and Output Name to <code>Highest_Overall_Risk</code>. Click OK.</li>
<li>A new layer <code>Highest_Overall_Risk</code> appears in Contents, containing only those 17 counties.</li>
<li>Back on the Map tab, click Clear Selection (in the Selection group) to clear the current highlight before starting the next query.</li>
</ol>
<h3>Part 6 - Selection 2: OR Condition (Extreme Wildfire or Hurricane Risk)</h3>
<ol>
<li>Reopen Select By Attributes (Map tab). Make sure "Input Rows" is back to <code>NRI_Shapefile_Counties</code> (not the exported layer) and "Selection type" is New selection.</li>
<li>Click Add Clause. Set field to WFIR_RISKR, operator is equal to, value Very High.</li>
<li>Click Add Clause again for a second row. Before setting its fields, change the logical operator dropdown between the two clauses from And to Or (it appears to the left of the second clause).</li>
<li>Set the second clause's field to HRCN_RISKR, operator is equal to, value Very High.</li>
<li>Click Apply. You should see 51 counties selected.</li>
<li>Export this selection the same way as Part 5, naming it <code>Extreme_SingleHazard_Risk</code>.</li>
<li>Click Clear Selection again.</li>
</ol>

<h3>Part 7 - Selection 3: AND Condition (High Risk and High Social Vulnerability)</h3>
<ol>
<li>Reopen Select By Attributes. Add a clause: RISK_SCORE is greater than 75.</li>
<li>Add a second clause, keep the logical operator as And, set field SOVI_SCORE, operator is greater than, value 75.</li>
<li>Click Apply. You should see 145 counties selected.</li>
<li>Export this selection, naming it <code>HighRisk_HighVulnerability</code>.</li>
<li>Click Clear Selection, then turn off the visibility of the original <code>NRI_Shapefile_Counties</code> layer by unchecking its checkbox in Contents (so only your three colored result layers show).</li>
</ol>
<h3>Part 8 - Symbolize the Three Layers</h3>
<ol>
<li>In Contents, click the colored square/symbol directly under <code>Highest_Overall_Risk</code> to open the Symbology pane. Choose a solid fill color (e.g., red), then close the pane.</li>
<li>Repeat for <code>Extreme_SingleHazard_Risk</code> (e.g., orange) and <code>HighRisk_HighVulnerability</code> (e.g., purple).</li>
<li>Optionally add a basemap for context: Map tab, Basemap dropdown, choose "Light Gray Canvas."</li>
</ol>
<h3>Part 9 - Build and Export the Layout</h3>
<ol>
<li>Click the Insert tab, then click New Layout, Letter (ANSI), Landscape.</li>
<li>A new layout view opens. On the Insert tab, click Map Frame, choose your map, then click and drag on the layout page to draw the map frame.</li>
<li>With the map frame selected, use the Layout tab's Zoom/Pan tools (or Activate) to fit the continental U.S. nicely in the frame.</li>
<li>On the Insert tab, add: Title (type "Riskiest Counties in the United States"), Legend (drag to place, it will auto-populate your three layers), North Arrow, and Scale Bar.</li>
<li>Once everything is placed and looks clean, click the Share tab, then Export Layout. Set format to JPEG, choose your Maps folder as the destination, and click Export.</li>
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
<p><i>Mapping America's Riskiest Counties - FEMA National Risk Index. Intro to GIS, Selection by Attribute.</i></p>
<h3>Reference Counts</h3>
<p>Use these to confirm your own results before submitting:</p>
<ul>
<li>RISK_RATNG = 'Very High' &#8594; 17 counties</li>
<li>WFIR_RISKR = 'Very High' OR HRCN_RISKR = 'Very High' &#8594; 51 counties</li>
<li>RISK_SCORE &gt; 75 AND SOVI_SCORE &gt; 75 &#8594; 145 counties</li>
</ul>
<div class="callout">These counts confirm your workflow was executed correctly, they are not a substitute for doing the selections yourself, and your submitted screenshots must show your own Select By Attributes dialogs and attribute tables.</div>
</div>
</div>

<footer>attribute table - selection set</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "SBA2026",
result: "SBA2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"></span>
<span class="lab-nav-next"><a href="../select-by-location/">Select by Location</a></span>
</div>
