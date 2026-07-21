# Clip Lab

<p class="lab-subtitle">Extracting African Provinces from Global Boundary Data</p>

<p class="lab-back"><a href="../../lessons/#clip">&larr; Back to Lessons</a></p>

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
<p>A research team studying cross-border ecological and demographic patterns in Africa needs a clean, continent-specific dataset of administrative provinces. The World Bank Official Boundaries dataset provides boundary data for every country and province on Earth - but for a continental-scale Africa analysis, you need only the African subset. Carrying the full worldwide dataset into every analysis step wastes processing time and clutters your maps.</p>
<p>Your task is to use the Clip geoprocessing tool to extract - or 'clip' - only the African provinces from the global dataset, using Africa's national boundaries as the 'cookie cutter.' The result is a focused Africa-only provinces layer ready for further analysis.</p>
<h2>Tasks</h2>
<ol>
<li>Download the World Bank Official Boundaries dataset (Shapefile format, no account required).</li>
<li>Add the countries (Admin 0) and provinces (Admin 1) layers to a new ArcGIS Pro project.</li>
<li>Verify the field names on the countries layer, then use Select by Attribute to select the African countries.</li>
<li>Export the selection as a new permanent feature class: Africa_Countries.</li>
<li>Use the Clip tool with Africa_Countries as the clip boundary to extract Africa's provinces.</li>
<li>Verify the feature count in the clipped result, then create a map layout and export a JPEG.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>A JPEG map export showing Africa's provincial boundaries after clipping.</li>
<li>Written answers: (1) How many countries does the dataset show in Africa? (2) How many provinces are contained within Africa after clipping?</li>
</ul>
</div>

<h2 id="data-acquisition" class="sr-anchor">Data Acquisition Instructions</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition Instructions <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: downloading the World Bank Official Boundaries dataset</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h2>Dataset: World Bank Official Boundaries</h2>
<p>Source: World Bank Data Catalog - <code>datacatalog.worldbank.org/search/dataset/0038272</code>. No account required. Open Data license.</p>
<ol>
<li>Open a web browser and go to <code>datacatalog.worldbank.org/search/dataset/0038272</code>.</li>
</ol>
<div class="callout"><b>Note:</b> You should land on a page titled "World Bank Official Boundaries." If you see a login screen or a different page, double-check the URL.</div>
<ol start="2">
<li>On the dataset page, click the Download button.</li>
<li>When prompted to select a format, choose Shapefile.</li>
</ol>
<div class="callout"><b>Watch out:</b> The page may also offer GeoJSON and CSV formats - do not select those. Select Shapefile specifically. GeoJSON can be added to ArcGIS Pro but has caused inconsistent behavior in some workflows.</div>
<ol start="4">
<li>Save the ZIP file to your project folder - for example: <code>C:\GIS\Labs\Clip\data</code>.</li>
<li>Right-click the downloaded ZIP &rarr; Extract All. Extract the contents into the same folder.</li>
</ol>
<div class="callout"><b>Note:</b> After extraction you will see several .shp files inside the folder - one for Admin 0 (countries), one for Admin 1 (provinces), and possibly one for Admin 2. Identify the Admin 0 and Admin 1 files by name before opening ArcGIS Pro. The exact filenames may vary by dataset version - look for filenames containing "Admin0" and "Admin1."</div>
<ol start="6">
<li>Confirm you can see at minimum two .shp files (one Admin 0, one Admin 1) before proceeding.</li>
</ol>
<div class="callout"><b>Watch out:</b> No second website is required and no account is needed. If you are being prompted to create an account or directed to a separate portal, stop - you are on the wrong page. This dataset is entirely self-contained in one ZIP file.</div>
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
<p><i>Extracting African Provinces from Global Boundary Data. Spatial Analysis, Clip.</i></p>
<h3>Part 1 - Load the Data</h3>
<ol>
<li>Open ArcGIS Pro. On the start screen click Map (under "New"). Name the project Clip_Africa and save it to your project folder. Click OK.</li>
<li>In the Catalog pane (View tab &rarr; Catalog Pane if not visible), browse to your extracted data folder. Right-click the Admin 0 (countries) shapefile &rarr; Add to Current Map. Repeat for the Admin 1 (provinces) shapefile.</li>
</ol>
<div class="ref-figure">
<img src="../clip-worldwide-loaded.png" alt="Both layers added worldwide countries Admin 0 and provinces Admin 1">
<p class="ref-caption">Both layers added: worldwide countries (Admin 0) and provinces (Admin 1) visible across the full globe.</p>
</div>
<div class="callout"><b>Why this step:</b> Both layers must be present from the start: the countries layer will become your clip boundary, and the provinces layer is what you will clip down to Africa. The Clip tool works between two layers - a source layer and a boundary layer.</div>

<h3>Part 2 - Verify Fields and Select African Countries</h3>
<ol>
<li>Before writing any selection expression, verify that the CONTINENT field exists and check its values. Right-click the countries (Admin 0) layer &rarr; Open Attribute Table. Scroll across the columns to find the CONTINENT field. Click the column header to sort it and look through the values.</li>
</ol>
<div class="callout"><b>Watch out:</b> Never assume a field named CONTINENT exists on a dataset, or that its values are capitalized and spelled exactly as you expect. The World Bank data does have a CONTINENT field, but this verification step protects you from a confusing "0 features selected" result if you are working with different data or a different version.</div>
<div class="callout"><b>Note:</b> The CONTINENT values in this dataset are: Africa, Asia, Europe, North America, Oceania, South America. Note the exact capitalization - the selection expression must match exactly.</div>
<ol start="2">
<li>Go to the Map tab &rarr; Select by Attributes. Set: Input Rows = your countries layer, Selection type = New selection. Build the expression: CONTINENT is Equal to Africa. Click OK.</li>
</ol>
<div class="ref-figure">
<img src="../clip-africa-selected.png" alt="Africa selected by attribute 54 countries highlighted">
<p class="ref-caption">Africa selected by attribute (CONTINENT = 'Africa') - 54 countries highlighted across the worldwide layer.</p>
</div>
<div class="callout"><b>Watch out:</b> If you type the expression manually instead of using the dialog builder, use single quotes around the value: CONTINENT = 'Africa'. For shapefiles, the field name may also need double-quotes: "CONTINENT" = 'Africa'. If the dialog-built expression returns 0 results, try manually adding double-quotes around the field name.</div>
<div class="callout"><b>Why this step:</b> This selection defines exactly which features will form your clip boundary. Only the 54 selected African countries will become Africa_Countries in the next step. A correct selection here is the foundation of the entire clip operation.</div>

<h3>Part 3 - Export Africa_Countries</h3>
<ol>
<li>Right-click the countries (Admin 0) layer in the Contents pane &rarr; Data &rarr; Export Features. Set the Output Feature Class name to Africa_Countries, saving into your project's default geodatabase (the path ends in .gdb). Click OK.</li>
</ol>
<div class="ref-figure">
<img src="../clip-africa-countries-exported.png" alt="Africa_Countries exported only the 54 African countries">
<p class="ref-caption">Africa_Countries exported - only the 54 African countries remain in this new layer.</p>
</div>
<div class="callout"><b>Why this step:</b> The Clip tool needs a permanent, standalone feature class as its clip boundary - a live temporary selection on the original layer is not a reliable input for geoprocessing. Exporting gives you a clean Africa_Countries layer the Clip tool can work with confidently.</div>
<div class="callout"><b>Note:</b> You can now clear the selection on the original countries layer (Map tab &rarr; Clear) and turn off the worldwide layers to reduce clutter. Africa_Countries will remain.</div>
<ol start="2">
<li>Zoom in to Africa and confirm Africa_Countries looks correct: clean country outlines covering the full continent, no features from outside Africa.</li>
</ol>
<div class="ref-figure">
<img src="../clip-africa-countries-boundary.png" alt="Africa_Countries boundary confirmed ready for clip">
<p class="ref-caption">Africa_Countries boundary confirmed - ready to use as the clip boundary in the next step.</p>
</div>

<h3>Part 4 - Run the Clip Tool</h3>
<ol>
<li>Open the Geoprocessing pane: Analysis tab &rarr; Tools. Search for Clip. Open the Clip tool (Analysis Tools &rarr; Extract &rarr; Clip).</li>
<li>Set the parameters: Input Features = your provinces (Admin 1) layer; Clip Features = Africa_Countries; Output Feature Class = Africa_Provinces_Clipped (in your project geodatabase). Click Run.</li>
</ol>
<div class="callout"><b>Watch out:</b> Make absolutely sure the provinces layer is in Input Features and Africa_Countries is in Clip Features - not the other way around. Reversing them would attempt to clip countries using provinces as the boundary, which gives a wrong result with no error message.</div>
<div class="callout"><b>Note:</b> The tool may take 15-45 seconds depending on your hardware. The worldwide provinces layer contains many thousands of features. You will see a progress bar at the bottom of the Geoprocessing pane.</div>
<div class="callout"><b>Why this step:</b> The Clip tool uses Africa_Countries as a precise cookie cutter. Every province that falls within Africa's boundaries is kept; everything outside is discarded. Provinces that cross the border are cut precisely at the boundary line.</div>
<ol start="3">
<li>Once the tool finishes, right-click Africa_Provinces_Clipped &rarr; Open Attribute Table. Check the record count in the table header. You should see 759 features.</li>
</ol>
<div class="ref-figure">
<img src="../clip-provinces-clipped.png" alt="Africa_Provinces_Clipped 759 provincial features">
<p class="ref-caption">Africa_Provinces_Clipped - 759 provincial features clipped to the African boundary.</p>
</div>
<div class="callout"><b>Note:</b> If your count is significantly different from 759, the most likely causes are: (1) the wrong layer was used as Input Features or Clip Features in the previous step, or (2) Africa_Countries was not exported correctly in Part 3. Recheck both steps.</div>

<h3>Part 5 - Build the Map Layout and Export</h3>
<ol>
<li>Turn off all layers except Africa_Countries and Africa_Provinces_Clipped. Apply symbology to Africa_Provinces_Clipped - for example, a light tan fill with dark grey outlines, as shown in the reference screenshot above.</li>
<li>Insert tab &rarr; New Layout &rarr; Letter (Landscape). A blank layout page opens.</li>
<li>Insert tab &rarr; Map Frame. Draw a large rectangle on the layout taking up most of the left 7-7.5 inches. In the map frame, zoom to the extent of Africa. Leave space on the right for the legend and north arrow.</li>
<li>Add a legend (Insert &rarr; Legend), a north arrow (Insert &rarr; North Arrow), a scale bar (Insert &rarr; Scale Bar), and a title text box (Insert &rarr; Text &rarr; Straight Text Box).</li>
</ol>
<div class="callout"><b>Watch out:</b> If your legend automatically shows every visible layer, right-click the legend &rarr; Properties &rarr; Legend Items tab, and remove any layers you do not want displayed.</div>
<ol start="5">
<li>Share tab &rarr; Export Layout &rarr; JPEG &rarr; set resolution to 150 DPI &rarr; Export. This JPEG is your deliverable.</li>
</ol>
<div class="ref-figure">
<img src="../clip-final-layout.png" alt="Final map layout Africa provincial boundaries">
<p class="ref-caption">Final map layout: Africa's provincial boundaries (Africa_Provinces_Clipped).</p>
</div>
</div>
</div>

<h2 id="result-reference" class="sr-anchor">Result Reference</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-result" onclick="toggleGated(this,'panel-result')">
<span class="swatch locked" id="swatch-result">&#128274;</span>
<span class="layer-body">
<span class="layer-title">Result Reference <span class="layer-tag tag-locked" id="tag-result">locked</span></span>
<span class="layer-desc">Verified reference outputs to check your work. Enter your access code to view.</span>
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
<p><i>Extracting African Provinces from Global Boundary Data. Spatial Analysis, Clip.</i></p>
<h3>Reference Answer Key - Verified Result</h3>
<p>The verified expected results using the World Bank Official Boundaries dataset (Shapefile format):</p>
<ul>
<li>Select by Attribute on countries (Admin 0) where CONTINENT = 'Africa' &rarr; 54 features selected</li>
<li>Clip provinces (Admin 1) using Africa_Countries as clip boundary &rarr; 759 features in output</li>
</ul>
<div class="ref-figure">
<img src="../clip-final-layout.png" alt="Africa provincial boundaries reference result">
<p class="ref-caption">Africa_Provinces_Clipped: the final, verified 759-feature result after clipping to Africa's 54 countries.</p>
</div>
<div class="callout"><b>Note:</b> If your own country count or province count differs from these numbers, recheck the CONTINENT selection expression in Part 2 and confirm Input Features / Clip Features were not swapped in Part 4 - those are the two most common sources of a mismatched count.</div>
</div>
</div>
<footer>Africa_Countries / Africa_Provinces_Clipped</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "CLP2026",
result: "CLP2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../suitability-modeling/">Suitability Modeling</a></span>
<span class="lab-nav-next"></span>
</div>
