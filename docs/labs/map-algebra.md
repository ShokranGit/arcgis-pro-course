# Map Algebra Lab

<p class="lab-subtitle">Building a Wildfire Risk Index - Zion National Park, UT</p>

<p class="lab-back"><a href="../../lessons/#map-algebra">&larr; Back to Lessons</a></p>

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
<p>Zion National Park's fire management office wants a wildfire risk index for the park. Rather than starting a new study area from scratch, this lab deliberately reuses your own Slope and Aspect layers from the Surface Analysis lab, and adds one new dataset (land cover) to combine into a single fire risk score.</p>
<p>This lab's real purpose is different from Suitability Modeling's. There, you combined criteria using the Weighted Overlay wizard - a tool that does the math for you behind a graphical interface. Here, you will type the actual raster math yourself: arithmetic operators, relational operators, and conditional Con() logic in the Raster Calculator or Python window. That is the specific, hands-on skill this topic exists to teach, and it's a skill Weighted Overlay never requires you to practice.</p>
<h2>Tasks</h2>
<ol>
<li>Download NLCD land cover for Zion National Park.</li>
<li>Confirm you have your Slope_Reclass and Aspect layers already available from the Surface Analysis lab (or obtain the combined dataset package - see Data Acquisition, Option B).</li>
<li>Write a Con() expression on the raw Aspect layer to score south-facing terrain as higher risk.</li>
<li>Write a nested Con() expression on the land cover layer to score vegetation type as a fuel-load risk.</li>
<li>Combine Slope, South-Facing Risk, and Fuel Load into a single Fire Risk Index using a typed, weighted arithmetic expression.</li>
<li>Write a final Con() expression to flag cells at extreme fire risk.</li>
<li>Symbolize the result, build a layout, and export a JPEG.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>Screenshots or copies of each of your four Raster Calculator / Python window expressions (South-Facing Risk, Fuel Load, Fire Risk Index, Extreme Risk Flag).</li>
<li>The final symbolized Fire Risk Index map, colored from low to high risk.</li>
<li>The final exported JPEG map layout.</li>
<li>A short paragraph (3-5 sentences) identifying where the highest fire-risk areas are, and explaining - in terms of slope, aspect, and fuel load - why.</li>
</ul>
</div>


<h2 id="data-acquisition" class="sr-anchor">Data Acquisition Instructions</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition Instructions <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: getting NLCD land cover, plus your Slope and Aspect layers</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<p>This lab needs three datasets: NLCD land cover, a reclassified Slope layer, and a raw Aspect layer. The last two already exist if you completed the Surface Analysis lab - Option A below explains getting all three the "formal" way; Option B is a single pre-packaged download covering all three at once.</p>
<h2>Option A - Individual sources (formal method)</h2>
<h3>Dataset 1: NLCD Land Cover, via the MRLC Viewer</h3>
<ol>
<li>Go to <code>mrlc.gov/viewer/</code>. No account required.</li>
<li>Under Annual NLCD, double-click Land Cover to open it.</li>
<li>In the Tools &rarr; Data Download panel, set Method to Rectangle and draw a box over Zion National Park (the same area as your DEM from Surface Analysis).</li>
</ol>
<div class="callout"><b>Watch out:</b> Do not click the blue "Download Land Cover Reference Data" button - that downloads a nationwide reference file well over a gigabyte in size, not your clipped area.</div>
<ol start="4">
<li>Confirm GeoTIFF is checked, only Land Cover is checked under categories, and the year slider is set to a single year (not a range).</li>
<li>Enter your email and click Download. A confirmation email with an order number arrives immediately - that is only a receipt. A second email with the actual download link follows, usually within minutes for an area this size.</li>
</ol>
<h3>Datasets 2 and 3: Slope_Reclass and Aspect, reused from Surface Analysis</h3>
<p>If you already completed the Surface Analysis lab, these two layers already exist in that project. Open SurfaceAnalysis_ZionPark.aprx, and in the Contents pane locate your reclassified Slope layer (the 4-class hiking-difficulty scale) and your raw Aspect layer (plain compass degrees, 0-360 - not the 8-bin reclassified version).</p>
<div class="callout"><b>Watch out:</b> Layer names can drift between projects and between attempts - in practice, these two layers may not be named exactly "Slope_Reclass" and "Aspect." Before trusting any layer by name alone, verify it: right-click it &rarr; Properties &rarr; Source &rarr; check its Extent. A layer genuinely clipped to Zion will show a width and height of roughly 0.35-0.40 (in whatever units your project uses) - a layer still covering a full 1-degree DEM tile (width/height near 1.0 or larger) has not actually been clipped and is the wrong one to use.</div>
<p>Export both confirmed layers as standalone GeoTIFFs (right-click &rarr; Data &rarr; Export Raster) so they can be added into this Map Algebra project directly.</p>
<h2>Option B - One combined download (faster)</h2>
<p>All three datasets - NLCD land cover, the reclassified Slope layer, and the raw Aspect layer, all already clipped to Zion National Park and pre-verified - are available as a single package:</p>
<ul>
<li><code>MapAlgebra_StudentData.zip</code> - available on the course website and on BrightSpace, under this lab's materials.</li>
</ul>
<p>Download and extract the zip anywhere convenient. It contains three GeoTIFFs (plus each file's small companion files, which must stay together with it): <code>NLCD_Zion.tif</code>, <code>Slope_Reclass_Zion.tif</code>, and <code>Aspect_Zion.tif</code>.</p>
<div class="callout"><b>Note:</b> Keep every file from the zip together in the same folder when you add data to ArcGIS Pro - the small companion files (.tfw, .vat.dbf, .aux.xml, etc.) are what make each raster display its correct colors and categories immediately, rather than showing up blank or gray.</div>
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
<p><i>Building a Wildfire Risk Index - Zion National Park, UT. Spatial Analysis, Map Algebra.</i></p>
<h3>Part 1 - Project Setup</h3>
<ol>
<li>Create a new ArcGIS Pro project for this lab (or use an existing one for Zion).</li>
<li>Map tab &rarr; Add Data. Add all three datasets, however you obtained them: NLCD_Zion (or your own export), Slope_Reclass_Zion (or your own export), and Aspect_Zion (or your own export).</li>
<li>Confirm all three display correctly - NLCD should show its usual colorful land-cover categories, Slope_Reclass should show a handful of discrete classes, and Aspect should show a smooth grayscale or compass-direction gradient. If any layer looks blank, black, or gray, don't assume the data is broken - first try unchecking and rechecking its box in Contents, or clicking the small refresh icon at the bottom-right of the map view. ArcGIS Pro occasionally fails to redraw a freshly-added raster on the first try; this is a display quirk, not a data problem.</li>
</ol>
<div class="callout"><b>Why this step:</b> Confirming all three layers display correctly before doing any analysis means that if something looks wrong later, you know the problem is in your expressions - not in the source data.</div>
<h3>Part 2 - South-Facing Risk</h3>
<p>This step introduces the first genuinely new skill in this lab: a compound conditional expression, using a relational operator (&gt;=, &lt;=) combined with a logical AND, written directly rather than clicked through a wizard.</p>
<ol>
<li>Open the Raster Calculator (Spatial Analyst Tools &rarr; Map Algebra &rarr; Raster Calculator), or use the Python window if you prefer to type expressions directly.</li>
<li>Build this expression, using your raw Aspect layer:</li>
</ol>
<pre><code>Con(("Aspect_Zion" &gt;= 112.5) &amp; ("Aspect_Zion" &lt;= 247.5), 5, 1)</code></pre>
<div class="callout"><b>Why this step:</b> 112.5&deg; to 247.5&deg; covers southeast through southwest - the range of compass directions that receive the most direct sun exposure in the Northern Hemisphere. Con() evaluates the condition cell by cell: where it's true (south-facing), the cell becomes 5 (higher risk, since south-facing slopes dry out faster); everywhere else, it becomes 1. This is the same underlying logic as Reclassify's break table from Surface Analysis - but here, you are writing the condition directly as an expression, not filling in a GUI table.</div>
<ol start="3">
<li>Name the output <code>SouthFacingRisk</code> and click Run (or, in the Python window, assign it to a variable and call <code>.save("SouthFacingRisk")</code>).</li>
</ol>

<h3>Part 3 - Fuel Load</h3>
<p>Land cover type is a proxy for how much flammable material (fuel) is present. Forest has the most; open water and bare ground have essentially none. This step introduces nested Con() logic - an if/else-if/else structure - to assign three tiers of fuel risk from many possible land cover codes.</p>
<ol>
<li>Build this expression, using your NLCD layer:</li>
</ol>
<pre><code>Con(("NLCD_Zion" == 41) | ("NLCD_Zion" == 42) | ("NLCD_Zion" == 43), 5,
  Con(("NLCD_Zion" == 52) | ("NLCD_Zion" == 71) | ("NLCD_Zion" == 81), 3, 1))</code></pre>
<div class="callout"><b>Why this step:</b> Codes 41/42/43 are NLCD's three forest types (Deciduous, Evergreen, Mixed) - the most fuel, scored 5. Codes 52/71/81 (Shrub/Scrub, Grassland, Pasture/Hay) carry moderate fuel, scored 3. Everything else - barren land, water, developed areas - falls through to the final 1 (low fuel). The nested structure means the innermost Con() only gets evaluated for cells that failed the first test, exactly like a chain of if/elif/else statements in plain Python.</div>
<div class="callout"><b>Watch out:</b> Before running this, check which NLCD codes actually exist in your clipped area (right-click the layer &rarr; Symbology, or open its attribute table). If your data contains a code not covered by any of the three conditions above - for example, wetlands (90, 95) or developed land (21-24) - those cells will fall through to the final else value (1). Decide deliberately whether that's the right call for your data, rather than being surprised by it later.</div>
<ol start="2">
<li>Name the output <code>FuelLoad</code> and run it.</li>
</ol>
<h3>Part 4 - Fire Risk Index</h3>
<p>This is the core new skill this lab teaches: combining multiple criteria with a typed weighted arithmetic expression, instead of the Weighted Overlay tool's graphical interface.</p>
<ol>
<li>Build this expression:</li>
</ol>
<pre><code>("Slope_Reclass_Zion" * 0.35) + ("SouthFacingRisk" * 0.25) + ("FuelLoad" * 0.40)</code></pre>
<div class="callout"><b>Why this step:</b> Each input is multiplied by its weight, then added together - exactly the same underlying math as Weighted Overlay performs, just written out explicitly instead of hidden behind percentage sliders. Fuel Load carries the largest weight (40%) since vegetation type is usually the single strongest driver of real fire behavior; Slope carries the next largest (35%), since steep terrain both spreads fire faster and is harder for crews to access; South-Facing Risk carries the smallest (25%), since it's a real but secondary factor layered on top of the other two.</div>
<div class="callout"><b>Note:</b> Because Slope_Reclass ranges 1-4 (not 1-5, unlike the other two inputs), the maximum possible Fire Risk Index value is 4(0.35) + 5(0.25) + 5(0.40) = 1.40 + 1.25 + 2.00 = 4.65 - which is exactly why the verified answer key below tops out at 4.650, not 5.0. This is a useful reminder that weighted sums only reach their "nice round number" maximum when every input shares the same scale - worth noticing, not something to force-correct.</div>
<ol start="2">
<li>Name the output <code>FireRisk</code> and run it.</li>
</ol>

<h3>Part 5 - Flag Extreme Risk Zones</h3>
<p>A practical closing step: converting the continuous Fire Risk Index into a simple yes/no alert layer a ranger could act on immediately.</p>
<ol>
<li>Build this expression:</li>
</ol>
<pre><code>Con("FireRisk" &gt;= 4, 1, 0)</code></pre>
<div class="callout"><b>Why this step:</b> This is a binary Con() - every cell becomes either 1 (flagged as extreme risk) or 0 (not flagged). Binary flag layers like this are extremely common in real GIS work: they compress a nuanced, continuous measurement into a single actionable yes/no signal.</div>
<ol start="2">
<li>Name the output <code>ExtremeFireRisk</code> and run it.</li>
</ol>
<h3>Part 6 - Symbolize, Build Layout, Export JPEG</h3>
<ol>
<li>Select FireRisk in Contents &rarr; Symbology. Change Primary symbology from the default Stretch to Classify, and choose a color ramp running from green (low risk) through to red (high risk) - not a plain black-to-white stretch, which does not read intuitively as "risk."</li>
<li>Insert tab &rarr; New Layout &rarr; Letter (ANSI) &rarr; Landscape.</li>
<li>Insert tab &rarr; Map Frame. Draw the map frame so it does not extend all the way to the page's right edge - leave a genuine empty margin of a couple of inches on the right side of the page.</li>
</ol>
<div class="callout"><b>Why this step:</b> Reserving a real, empty margin before placing the Legend, North Arrow, and Scale Bar prevents them from landing on top of the map's own content (mountain labels, terrain, etc.). Placing surround elements inside the map frame's own boundary - rather than in genuine white space beside it - is a common first-attempt mistake that produces a cluttered, hard-to-read layout.</div>
<ol start="4">
<li>In that right-hand margin, from top to bottom, add: a North Arrow, a Legend, and a Scale Bar (Insert tab, or right-click the layout).</li>
</ol>
<div class="callout"><b>Watch out:</b> When you add the Legend, check what it actually lists. By default, a Legend auto-includes every visible layer in your map - including intermediate layers like SouthFacingRisk, FuelLoad, ExtremeFireRisk, Slope_Reclass, and NLCD, not just the final FireRisk map you actually want to explain. Right-click the Legend &rarr; Properties, uncheck "Auto-add," and manually remove every entry except FireRisk from its item list.</div>
<ol start="5">
<li>Insert tab &rarr; Text &rarr; Straight Text Box. Click in the empty space above the map frame and type a title, e.g. "Zion Canyon Fire Risk Index - Map Algebra."</li>
</ol>
<div class="callout"><b>Note:</b> Adding a title through the Python window's createTextElement function is not supported on every ArcGIS Pro version. If you're scripting this and hit an AttributeError on that specific call, that's a real version limitation, not a mistake in your code - add the title through this manual step instead, once, and it will remain in the layout for every future export.</div>
<ol start="6">
<li>Share tab &rarr; Export Layout &rarr; JPEG &rarr; choose your destination folder &rarr; Export.</li>
</ol>
<div class="callout"><b>Watch out:</b> If you re-symbolize a layer (for example, switching FireRisk from Stretch to Classify) right before exporting, ArcGIS Pro can sometimes export before it has actually finished redrawing the new colors on screen - producing a JPEG that shows the old symbology even though Contents shows the new one is applied. If your exported JPEG doesn't match what you see live in ArcGIS Pro, uncheck and recheck the layer's visibility box to force a redraw, wait a couple of seconds, and export again.</div>
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
<p><i>Building a Wildfire Risk Index - Zion National Park, UT. Spatial Analysis, Map Algebra.</i></p>
<h3>Reference Answer Key - Verified Classification Ranges</h3>
<p>These are the real, verified classification breaks from a successful run of this lab's Fire Risk Index, generated over Zion National Park. Your own exact numbers may vary slightly depending on your precise Con() thresholds, but should fall in a similar range:</p>
<ul>
<li>Class 1 (lowest risk): 0.001 - 2.145</li>
<li>Class 2: 2.146 - 2.703</li>
<li>Class 3 (middle): 2.704 - 3.305</li>
<li>Class 4: 3.306 - 3.949</li>
<li>Class 5 (highest risk): 3.949 - 4.650</li>
</ul>
<div class="callout"><b>Note:</b> The Fire Risk Index is a weighted sum of three inputs scored 1-5 each, so its theoretical range is 1.0 (all three inputs at minimum) to 5.0 (all three at maximum). A verified real run landing close to that 1-4.65 range, rather than something wildly outside it (e.g., negative numbers, or a max far above 5), is itself a good sanity check that your weights and expressions are correct.</div>
<div class="ref-figure">
<img src="../map-algebra-firerisk.png" alt="Final classified Fire Risk Index for Zion National Park">
<p class="ref-caption">FireRisk, classified into 5 risk classes from green (lowest) to orange (highest).</p>
</div>
<div class="callout"><b>What you're looking at:</b> the two highest classes (orange) dominate most of the park's rugged interior, consistent with steep, south-facing, heavily-forested terrain scoring high on all three inputs at once. The green patches are lower-risk pockets, typically flatter ground, non-south-facing slopes, or lighter fuel load, and are worth spot-checking against your Slope_Reclass and Aspect layers individually if you want to confirm which factor is driving a given pixel's score.</div>
</div>
</div>
<footer>SouthFacingRisk / FuelLoad / FireRisk / ExtremeFireRisk</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "MAL2026",
result: "MAL2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../surface-analysis/">Surface Analysis</a></span>
<span class="lab-nav-next"><a href="../suitability-modeling/">Suitability Modeling</a></span>
</div>
