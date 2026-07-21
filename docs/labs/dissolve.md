# Dissolve Lab

<p class="lab-subtitle">Aggregating Census Tract Social Vulnerability Data to the County Level</p>

<p class="lab-back"><a href="../../lessons/#dissolve">&larr; Back to Lessons</a></p>

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
<p>The CDC/ATSDR Social Vulnerability Index (SVI) measures how well communities can withstand external stressors - natural disasters, disease outbreaks, and pollution events. It is published at the census tract level, with scores ranging from 0 (least vulnerable) to 1 (most vulnerable). Census tracts average about 4,000 residents and are designed to be relatively homogeneous in population characteristics. The 2022 release for Texas contains 6,884 individual census tracts.</p>
<p>While tract-level data captures fine-grained local variation, public health officials and emergency planners typically operate at the county level - the administrative unit used for resource allocation, policy decisions, and reporting. In this lab you will use the Dissolve geoprocessing tool to merge the 6,884 census tract polygons into 254 county boundaries, aggregating vulnerability scores into county-level averages. This is one of the most common aggregation workflows in applied GIS.</p>
<div class="callout"><b>Why this step:</b> The Dissolve tool collapses multiple features that share a common attribute value into a single merged feature. All census tracts in Harris County share the same county FIPS code - Dissolve merges them into one county polygon. The county boundaries you produce are not downloaded separately; they emerge directly from the tract geometry. This is one of Dissolve's most powerful uses.</div>
<h2>Working with a Real-World Dataset</h2>
<p>This lab uses live CDC data downloaded directly from the government's public health portal. Real-world datasets are rarely clean. Two specific issues in the 2022 Texas SVI will affect your work, and understanding them is part of the learning:</p>
<div class="callout"><b>Data quality - field name change:</b> The county FIPS field in the 2022 SVI is named STCNTY. In earlier releases (2018 and before) the same field was called STCOFIPS. If you follow an older tutorial or use a different year's data, the field name will differ and the Dissolve will fail with a "field does not exist" error. Always open the attribute table and verify field names before running any geoprocessing tool.</div>
<div class="callout"><b>Data quality - suppressed values coded as -999:</b> Any census tract with fewer than 50 residents has its SVI scores suppressed for privacy - the CDC records RPL_THEMES as -999 rather than leaving it blank (null). Because -999 is a numeric value, the Dissolve MEAN statistic treats it as real data. In the Texas 2022 dataset, 33 out of 254 counties contain at least one suppressed tract, and those counties end up with a negative MEAN_RPL_THEMES after dissolving - a mathematically impossible SVI score. This is a data artifact, not a student error. You will address this in Part 4 of the walkthrough by setting negative values to display as "No Data" in your symbology.</div>
<h2>Tasks</h2>
<ol>
<li>Download the CDC/ATSDR Social Vulnerability Index 2022 for Texas (ESRI Geodatabase format) from the ATSDR website.</li>
<li>Open a new ArcGIS Pro project and load the Texas census tract feature class from the geodatabase.</li>
<li>Examine the attribute table - identify the STCNTY, RPL_THEMES, and E_TOTPOP fields. Confirm the row count is 6,884.</li>
<li>Symbolize the census tract layer using a graduated color ramp on RPL_THEMES to visualize vulnerability at the tract level.</li>
<li>Run the Dissolve tool: dissolve field = STCNTY; statistics = RPL_THEMES (MEAN) and E_TOTPOP (SUM). Confirm the output contains 254 county polygons.</li>
<li>Symbolize the dissolved county layer on MEAN_RPL_THEMES. Set any negative values to display as No Data, and compare the county map to the tract map.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>A screenshot of the county-level map symbolized by MEAN_RPL_THEMES, with the legend visible.</li>
<li>Written answers: (1) How many census tracts are in the input dataset? (2) How many counties appear in the dissolved output? (3) What does MEAN_RPL_THEMES represent, and why might some counties show a negative value?</li>
</ul>
</div>
<h2 id="data-acquisition" class="sr-anchor">Data Acquisition Instructions</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition Instructions <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: downloading the CDC/ATSDR Social Vulnerability Index</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h2>Dataset: CDC/ATSDR Social Vulnerability Index 2022</h2>
<p>Source: CDC/ATSDR Place and Health - GRASP Program. <code>atsdr.cdc.gov/place-health/php/svi/svi-data-documentation-download.html</code>. No account required. Public domain (U.S. government data).</p>
<ol>
<li>Open a browser and go to <code>atsdr.cdc.gov/place-health/php/svi/svi-data-documentation-download.html</code>. The page is titled "SVI Data & Documentation Download." Scroll down until you see a panel labeled Data on the left and Documentation on the right.</li>
<li>The Year dropdown at the top of the Data panel already shows 2022. Leave it as is.</li>
</ol>
<div class="callout"><b>Note:</b> If 2022 is not shown, click the Year dropdown and select 2022. The 2022 dataset uses 2020 decennial census tract boundaries.</div>
<ol start="3">
<li>Click the Geography dropdown (currently labeled "--- Select your option ---"). Scroll down the alphabetical list of states and click Texas.</li>
<li>Click the Geography Type dropdown (it was grayed out before you selected a state). Three options appear: Counties, Census Tracts, and ZIP Code Tabulation Areas. Select Census Tracts.</li>
<li>Under File Type you will see two radio buttons. The default is "CSV File (table data)" - this format contains no geometry and cannot be mapped. Click ESRI Geodatabase (map data) instead.</li>
</ol>
<div class="callout"><b>Watch out:</b> Do not use the CSV option - it contains only the attribute table with no spatial geometry. The ESRI Geodatabase option is the only format on this page that includes the polygon boundaries you need for the Dissolve workflow.</div>
<ol start="6">
<li>Click the teal Go button at the bottom of the Data panel. Your browser will begin downloading a ZIP file named something like SVI2022_TEXAS_tract_gdb.zip. Save it to your project folder.</li>
<li>Right-click the downloaded ZIP file and choose Extract All. After extraction you will see a folder named SVI2022_TEXAS_tract.gdb - this folder is the geodatabase.</li>
</ol>
<div class="callout"><b>Note:</b> A geodatabase (.gdb) looks like a regular folder in Windows Explorer. Do not rename or move it - ArcGIS Pro reads the folder as a single unit.</div>
<h3>Key Fields in the Dataset</h3>
<p>Once loaded in ArcGIS Pro, the feature class SVI2022_TEXAS_tract contains the following key fields used in this lab:</p>
<ul>
<li><b>FIPS</b> - 11-digit census tract ID - unique identifier for each tract</li>
<li><b>STCNTY</b> - 5-digit county FIPS code - the Dissolve field (note: older SVI versions called this STCOFIPS)</li>
<li><b>COUNTY</b> - County name (text)</li>
<li><b>RPL_THEMES</b> - Overall SVI percentile rank: 0 = least vulnerable, 1 = most vulnerable; -999 = suppressed</li>
<li><b>RPL_THEME1</b> - Sub-score: Socioeconomic status</li>
<li><b>RPL_THEME2</b> - Sub-score: Household characteristics</li>
<li><b>RPL_THEME3</b> - Sub-score: Racial and ethnic minority status</li>
<li><b>RPL_THEME4</b> - Sub-score: Housing type and transportation</li>
<li><b>E_TOTPOP</b> - Estimated total population of the tract</li>
</ul>
<div class="callout"><b>Data quality:</b> RPL fields with a value of -999 indicate suppressed data - tracts where the population is fewer than 50 people and individual-level records would not be anonymous. The CDC records -999 as a number rather than a null value. This matters for Dissolve: when computing MEAN_RPL_THEMES, ArcGIS Pro will average the -999 into the county mean, producing a negative result for any county that contains even one suppressed tract. In Texas 2022, this affects 33 counties. These are not genuinely vulnerable or invulnerable counties - the negative value is entirely a data artifact and must be treated as missing data in symbolization and analysis.</div>
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
<p><i>Aggregating Census Tract Social Vulnerability Data to the County Level. Spatial Analysis, Dissolve.</i></p>
<h3>Part 1 - Load the SVI Data</h3>
<ol>
<li>Open ArcGIS Pro. On the start screen click Map under New. Name the project Dissolve_Lab and save it to your project folder. Click OK.</li>
<li>In the Catalog pane (View tab &rarr; Catalog Pane if not visible), click Folders and navigate to your SVI_Texas folder. Expand SVI2022_TEXAS_tract.gdb. Inside you will see one feature class: SVI2022_TEXAS_tract.</li>
<li>Drag SVI2022_TEXAS_tract from the Catalog pane onto the map canvas. ArcGIS Pro adds the layer and zooms to Texas. The map shows 6,884 gray census tract polygons covering the entire state.</li>
</ol>
<div class="ref-figure">
<img src="../dissolve-tracts-loaded.png" alt="Texas census tracts loaded 6884 gray polygon features">
<p class="ref-caption">Texas census tracts loaded - 6,884 gray polygon features. Dense clusters in the east and along the Gulf Coast mark Houston, Dallas-Fort Worth, Austin, and San Antonio. Sparse rectangular tracts dominate West Texas.</p>
</div>
<div class="callout"><b>Why this step:</b> The census tract layer is the input to the Dissolve tool. Each polygon is one tract; the STCNTY attribute links every tract to its parent county. Dissolve will read that field and merge all tracts sharing the same STCNTY into a single county polygon.</div>
<ol start="4">
<li>Right-click the layer name in the Contents pane and click Attribute Table. Scroll right through the columns until you find STCNTY and COUNTY. Notice that all tracts in Anderson County share STCNTY = 48001, all tracts in Andrews County share 48003, and so on.</li>
</ol>
<div class="ref-figure">
<img src="../dissolve-attribute-table.png" alt="Attribute table open STCNTY and COUNTY columns visible">
<p class="ref-caption">Attribute table open - STCNTY and COUNTY columns visible. All rows for Anderson County share STCNTY = 48001. The row count at the bottom reads 6,884.</p>
</div>
<div class="callout"><b>Data quality - field name:</b> You will notice the county FIPS field is named STCNTY, not STCOFIPS. The CDC renamed this field in the 2022 release. If you type STCOFIPS into the Dissolve tool it will fail. When in doubt, open the attribute table first and confirm field names before running any geoprocessing tool.</div>

<h3>Part 2 - Symbolize the Tract Layer</h3>
<ol>
<li>In the Contents pane, double-click the SVI2022_TEXAS_tract layer name. The Symbology pane opens on the right side of the screen.</li>
<li>Click the Primary symbology dropdown and select Graduated Colors.</li>
<li>Set Field to RPL_THEMES. Set Method to Natural Breaks (Jenks). Set Classes to 5. Choose a sequential color scheme - yellow to red works well for vulnerability data (low = yellow/light, high = red/dark). Click Apply.</li>
</ol>
<div class="ref-figure">
<img src="../dissolve-tracts-symbolized.png" alt="Census tracts symbolized by RPL_THEMES yellow to red">
<p class="ref-caption">Census tracts symbolized by RPL_THEMES. Yellow = least vulnerable; red = most vulnerable. Gray tracts scattered across the state are suppressed tracts (RPL_THEMES = -999): they fall outside the 0-1 range and ArcGIS Pro maps them separately at the bottom of the legend.</p>
</div>
<div class="callout"><b>Watch out:</b> You may notice gray tracts and a -999 class at the bottom of your legend. These are suppressed tracts - do not change their color to match the rest of the ramp. They represent missing data, not genuine vulnerability values, and should be visually distinct. In a final map you would label this class "Data suppressed (n &lt; 50)" rather than leaving it as -999.</div>
<div class="callout"><b>Why this step:</b> Visualizing the data at the tract level before dissolving is essential context. The county-level map you produce in Part 4 will smooth out this variation - a county with a moderate average SVI may contain both very high-vulnerability tracts (dense urban core) and very low-vulnerability tracts (affluent suburbs). Seeing both maps side by side is the core learning of this lab.</div>

<h3>Part 3 - Run the Dissolve Tool</h3>
<ol>
<li>Click the Analysis tab &rarr; Tools. In the Geoprocessing search box type Dissolve and press Enter. Open Dissolve (Data Management), not Dissolve (Cartography).</li>
</ol>
<div class="callout"><b>Note:</b> The Data Management version merges polygon features by a shared attribute value and can compute statistics - this is what you need. The Cartography version is for smoothing line features and is unrelated to this workflow.</div>
<ol start="2">
<li>Set parameters in the Dissolve tool dialog: Input Features - select SVI2022_TEXAS_tract. Output Feature Class - save as Texas_Counties_SVI inside your Dissolve_Lab.gdb. Dissolve Field(s) - check the box next to STCNTY. Statistics Fields - add RPL_THEMES with Statistic Type MEAN, then add E_TOTPOP with Statistic Type SUM. Leave Create Multipart Features checked.</li>
</ol>
<div class="ref-figure">
<img src="../dissolve-tool-dialog.png" alt="Dissolve tool dialog configured STCNTY RPL_THEMES mean E_TOTPOP sum">
<p class="ref-caption">Dissolve tool dialog - all parameters configured: STCNTY as dissolve field, RPL_THEMES (Mean) and E_TOTPOP (Sum) in Statistics Fields.</p>
</div>
<div class="callout"><b>Watch out:</b> Make sure you check the box next to STCNTY under Dissolve Field(s). If no dissolve field is selected, the tool merges every feature in the layer into a single polygon covering all of Texas.</div>
<ol start="3">
<li>Click Run. The tool will take 20-60 seconds. When it finishes, the new Texas_Counties_SVI layer is added to the map automatically.</li>
<li>Right-click Texas_Counties_SVI &rarr; Attribute Table. The row count should read 254. Scroll right to confirm MEAN_RPL_THEMES and SUM_E_TOTPOP columns are present.</li>
</ol>
<div class="ref-figure">
<img src="../dissolve-counties-output.png" alt="Texas Counties SVI after dissolve 254 county polygons">
<p class="ref-caption">Texas Counties SVI after dissolve - 254 county polygons replace 6,884 tract polygons. The county boundaries emerged by dissolving shared edges between tracts that shared the same STCNTY value.</p>
</div>
<div class="callout"><b>Why this step:</b> The Dissolve merged 6,884 tract polygons into 254 county polygons - a 96% reduction in feature count. No county boundary file was downloaded; the county shapes emerged directly from the tract geometry. The MEAN_RPL_THEMES field now holds each county's average vulnerability score.</div>

<h3>Part 4 - Symbolize the County Result and Handle Missing Data</h3>
<ol>
<li>In the Contents pane, uncheck SVI2022_TEXAS_tract to hide it.</li>
<li>Double-click Texas_Counties_SVI &rarr; Symbology pane &rarr; Graduated Colors. Set Field to MEAN_RPL_THEMES. Method: Natural Breaks (Jenks). Classes: 5. Use the same color scheme as the tract layer. Click Apply.</li>
<li>Look at the legend. You will likely see a class with values below 0 - these are the 33 counties affected by the -999 artifact. Right-click that class in the Symbology pane and set its color to gray (or choose "Show as No Data") to distinguish it from counties with real SVI scores.</li>
<li>Open the attribute table for Texas_Counties_SVI. Click the MEAN_RPL_THEMES column header twice to sort descending. The most vulnerable counties will appear at the top.</li>
</ol>
<div class="ref-figure">
<img src="../dissolve-counties-symbolized.png" alt="Counties symbolized by MEAN_RPL_THEMES county level social vulnerability">
<p class="ref-caption">Counties symbolized by MEAN_RPL_THEMES - county-level social vulnerability across Texas. Yellow = least vulnerable; red = most vulnerable. Compared to the tract map, the county view smooths local variation into county-wide averages.</p>
</div>
<div class="callout"><b>Note:</b> Compare this map to the tract-level screenshot from Part 2. The county map is smoother and more readable, but it hides local variation. A county with a moderate average MEAN_RPL_THEMES may contain both very high-vulnerability urban tracts and very low-vulnerability suburban tracts. This trade-off between spatial detail and administrative usefulness is called the Modifiable Areal Unit Problem (MAUP) and is a fundamental concept in spatial analysis.</div>
<div class="callout"><b>Data quality - what to do with the 33 negative counties:</b> In a real analysis you would not report MEAN_RPL_THEMES for these 33 counties without a caveat. The correct approach is to: (1) symbolize them as "No Data" in your map so they do not mislead the reader; (2) note in your caption or methodology that counties with MEAN_RPL_THEMES &lt; 0 contain one or more suppressed census tracts and should be excluded from rankings or comparisons. This is standard practice when working with any dataset that uses numeric sentinel codes for missing values.</div>
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
<p><i>Aggregating Census Tract Social Vulnerability Data to the County Level. Spatial Analysis, Dissolve.</i></p>
<h3>Reference Answer Key - Verified Result</h3>
<p>Expected results using CDC/ATSDR SVI 2022 (Texas, Census Tracts, ESRI Geodatabase):</p>
<ul>
<li>Input feature class: SVI2022_TEXAS_tract &rarr; 6,884 census tract features</li>
<li>Dissolve field: STCNTY (5-digit county FIPS code)</li>
<li>Output: Texas_Counties_SVI - counties after dissolve &rarr; 254 county features</li>
<li>Output field MEAN_RPL_THEMES &rarr; mean SVI score per county (valid range 0-1)</li>
<li>Output field SUM_E_TOTPOP &rarr; total estimated population per county</li>
<li>Counties with negative MEAN_RPL_THEMES &rarr; 33 (artifact of -999 suppression codes)</li>
</ul>
<div class="ref-figure">
<img src="../dissolve-counties-symbolized.png" alt="Texas counties symbolized by MEAN_RPL_THEMES reference result">
<p class="ref-caption">Texas_Counties_SVI: the final, verified 254-county result symbolized by MEAN_RPL_THEMES, with negative values shown as No Data.</p>
</div>
<div class="callout"><b>Note:</b> If your own tract count, county count, or negative-county count differs from these numbers, recheck the STCNTY field name in Part 1 and confirm the Statistics Fields (RPL_THEMES Mean, E_TOTPOP Sum) were set correctly in Part 3 - those are the two most common sources of a mismatched result.</div>
</div>
</div>
<footer>Texas_Counties_SVI / MEAN_RPL_THEMES</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "DIS2026",
result: "DIS2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../clip/">Clip</a></span>
<span class="lab-nav-next"></span>
</div>
