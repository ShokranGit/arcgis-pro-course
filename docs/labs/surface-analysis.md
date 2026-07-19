# Surface Analysis Lab

<p class="lab-subtitle">Assessing Zion Canyon for a New Trail Route - Zion National Park, UT</p>

<p class="lab-back"><a href="../../lessons/#surface-analysis">&larr; Back to Lessons</a></p>

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
<p>Zion National Park's trail planning office wants to assess Zion Canyon for a possible new trail route. You've been asked to analyze the terrain two ways: Slope (to identify which areas are walkable versus hazardously steep), and Aspect (to identify which canyon walls face south, meaning more sun exposure, drier trail conditions, and higher fire risk to factor into planning).</p>
<h2>Tasks</h2>
<ol>
<li>Download a Digital Elevation Model (DEM) covering Zion National Park, and the official park boundary polygon.</li>
<li>Build an ArcGIS Pro project, merge the DEM tiles, and clip the merged DEM to the park's real boundary shape.</li>
<li>Generate a Hillshade layer from the clipped DEM for visual context.</li>
<li>Generate a Slope layer and reclassify it into a hiking-difficulty scale.</li>
<li>Generate an Aspect layer and reclassify it into cardinal direction bins, to identify south-facing canyon walls.</li>
<li>Symbolize your results with Hillshade as a backdrop and Slope or Aspect as a semi-transparent overlay, build a layout, and export a JPEG.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>Screenshots of the Hillshade, Slope, Reclassify (slope), Aspect, and Reclassify (aspect) dialog boxes showing your parameters.</li>
<li>The final symbolized map combining Hillshade with either your Slope or Aspect layer as an overlay.</li>
<li>The final exported JPEG map layout.</li>
<li>A short paragraph (3-5 sentences) identifying which parts of the canyon are least walkable (steepest) and which canyon walls face south, referencing your Slope and Aspect results.</li>
</ul>
</div>

<h2 id="data-acquisition" class="sr-anchor">Data Acquisition Instructions</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition Instructions <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: downloading the DEM tiles and the park boundary</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h2>Part 1 - Elevation: USGS 1/3 Arc-Second DEM (The National Map Downloader)</h2>
<ol>
<li>Go to <code>apps.nationalmap.gov/downloader/</code>. No account is required.</li>
<li>In the "Area of Interest" section, click "Enter Coords" (not Extent or Polygon).</li>
<li>In the dialog, enter these exact values, which comfortably cover all of southwestern Utah: X min (Longitude) = <code>-113.25</code>, Y min (Latitude) = <code>37.10</code>, X max (Longitude) = <code>-112.80</code>, Y max (Latitude) = <code>37.55</code>.</li>
<li>Click "Add to Map." Confirm the resulting box visually covers all of southwestern Utah before proceeding, don't just trust the numbers.</li>
<li>Scroll down in the left panel, check "Elevation Products (3DEP)", expand its subcategories, and check only "1/3 arc-second DEM".</li>
<li>Click "Search Products."</li>
<li>For each of the two correct tiles (<code>n38w113</code> and <code>n38w114</code>), click "Download Link (TIF)". If a tile has duplicate entries at different published dates, use the most recent one still labeled "1/3 arc-second".</li>
</ol>
<div class="callout"><b>Watch out:</b> do not use the map's location search box to draw the area of interest by hand. Searching a place name does not reliably zoom or center the map the way you'd expect, and a box drawn freehand can miss part of the park entirely, always use "Enter Coords" instead. Also, X values are longitude and Y values are latitude, not plain compass values: since these are negative numbers, <code>-112.80</code> (the less-negative value) belongs in the "max" box, not the "min" box at first glance. Double-check each value lands in the correct field before continuing.</div>
<div class="callout"><b>Watch out:</b> Zion sits almost exactly on the boundary between two adjacent 1-degree tiles, <code>n38w113</code> and <code>n38w114</code>. You need BOTH, downloading only one will leave part of the park uncovered. Also watch for a duplicate entry in the results list: the USGS 1 arc-second (~30m) dataset is a much coarser product that is often listed alongside it. Skip it regardless of its publish date, and only download results explicitly labeled "1/3 arc-second".</div>
<h2>Part 2 - Park Boundary: NPS Boundary (via ArcGIS Hub)</h2>
<ol>
<li>Go to <code>hub.arcgis.com</code> (not the National Park Service's own open-data portal, see the note below).</li>
<li>In the search bar, type "NPS Boundary."</li>
<li>Look for the result titled "NPS Boundary," described as covering Administrative Boundaries of National Park System Units nationwide.</li>
<li>Click into that item's page, click "Download," and choose Shapefile.</li>
</ol>
<div class="callout"><b>Note:</b> the National Park Service's own open-data portal (<code>public-nps.opendata.arcgis.com</code>) also hosts park boundary layers, but searching it directly for "boundary" returns dozens of unrelated, park-specific municipal boundaries. Searching <code>hub.arcgis.com</code> for "NPS Boundary" instead surfaces the one authoritative dataset that already contains every park boundary nationwide in a single layer. Searching "Zion boundary" directly does not reliably surface the right layer, the general "NPS Boundary" phrase works better since that is the dataset's actual title.</div>
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
<p><i>Assessing Zion Canyon for a New Trail Route - Zion National Park, UT. Spatial Analysis, Surface Analysis.</i></p>
<h3>Part 1 - Setup: Boundary, Merge, and Clip</h3>
<ol>
<li>Create a project folder with a Data subfolder. Add both downloaded DEM tiles and the NPS boundary shapefile into it.</li>
<li>Open a new ArcGIS Pro project, and add both DEM tiles and the NPS boundary shapefile to your map.</li>
<li>Open the boundary layer's attribute table and use Select By Attributes to select the one row where the park name field equals "Zion National Park."</li>
<li>Right-click the boundary layer, Data, Export Features. Output name: <code>Zion_Boundary</code>. This produces Zion's real, exact shape, not a rectangle.</li>
<li>Search the Geoprocessing pane for "Mosaic To New Raster". Input Rasters: both downloaded DEM tiles. Output Location: your project's default geodatabase. Raster Dataset Name: <code>DEM_Zion_Merged</code>. Pixel Type: 32_BIT_FLOAT. Number of Bands: 1. Click Run.</li>
<li>Search for "Clip Raster". Input Raster: <code>DEM_Zion_Merged</code>. Check "Use Input Features for Clipping Geometry" so the clip follows the park's actual outline rather than a bounding rectangle, and set the clipping features to <code>Zion_Boundary</code>. Output Raster Dataset Name: <code>DEM_ZionClipped</code>. Click Run.</li>
</ol>
<div class="callout"><b>Note:</b> the merge step exists because Zion spans two separate DEM tiles, clipping directly from two unmerged tiles would leave a visible seam or gap running through the middle of the study area.</div>
<h3>Part 2 - Hillshade</h3>
<ol>
<li>Search for and open "Hillshade" (Spatial Analyst Tools, Surface, Hillshade).</li>
<li>Input Raster: <code>DEM_ZionClipped</code>. Leave Azimuth (315) and Altitude (45) at their defaults to start. Output raster name: <code>hillshade</code>. Click Run.</li>
</ol>
<h3>Part 3 - Slope</h3>
<ol>
<li>Search for and open "Slope" (Spatial Analyst Tools, Surface, Slope).</li>
<li>Input Raster: <code>DEM_ZionClipped</code>. Output Measurement: Percent Rise. Output raster name: <code>slope</code>. Click Run.</li>
<li>Open "Reclassify". Input Raster: <code>slope</code>.</li>
<li>Set the Old Values / New Values breaks to a hiking-difficulty scale: 0-10 = Easy (1), 10-25 = Moderate (2), 25-40 = Difficult (3), above 40 = Hazardous / Not Recommended (4).</li>
<li>Output raster name: <code>slope_reclass</code>. Click Run.</li>
</ol>

<h3>Part 4 - Aspect</h3>
<ol>
<li>Search for and open "Aspect" (Spatial Analyst Tools, Surface, Aspect). Input Raster: <code>DEM_ZionClipped</code>. Output raster name: <code>aspect</code>. Click Run.</li>
<li>Open "Reclassify". Input Raster: <code>aspect</code>.</li>
<li>Set the breaks to 8 cardinal bins: Flat = 0, 0-22.5 and 337.5-360 = North, 22.5-67.5 = Northeast, 67.5-112.5 = East, 112.5-157.5 = Southeast, 157.5-202.5 = South, 202.5-247.5 = Southwest, 247.5-292.5 = West, 292.5-337.5 = Northwest.</li>
<li>Output raster name: <code>aspect_reclass</code>. Click Run.</li>
</ol>
<h3>Part 5 - Symbolize, Build Layout, Export JPEG</h3>
<ol>
<li>Add <code>hillshade</code> to the map first (bottom of the drawing order), symbolized in grayscale, as a backdrop.</li>
<li>Add <code>slope_reclass</code> or <code>aspect_reclass</code> above it. In its Symbology pane, set Layer Transparency to roughly 40-50% so the hillshade texture shows through underneath.</li>
<li>Insert tab, New Layout, Letter (ANSI), Landscape.</li>
<li>Insert tab, Map Frame, choose your map, then draw it on the layout page. Use the Layout tab's Zoom/Pan tools to frame the canyon area.</li>
<li>Insert tab, add Legend, North Arrow, and Scale Bar. Add a title via Insert, Text, Straight Text Box, reading "Zion Canyon Trail Suitability - Slope and Aspect Analysis."</li>
<li>Share tab, Export Layout. Format: JPEG. Choose your Maps folder as the destination. Click Export.</li>
</ol>
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
<p><i>Assessing Zion Canyon for a New Trail Route - Zion National Park, UT. Spatial Analysis, Surface Analysis.</i></p>
<h3>Reference Answer Key - Verified Results</h3>
<p>These are real, verified outputs from a successful run of this lab over Zion National Park's full boundary (not just the canyon corridor). Use them to check your own results for a similar overall pattern, exact colors and proportions should look comparable depending on your own symbology choices.</p>
<div class="ref-figure">
<img src="../surface-analysis-hillshade.png" alt="Hillshade output, default Azimuth 315 / Altitude 45">
<p class="ref-caption">Hillshade output, default Azimuth 315&deg; / Altitude 45&deg;.</p>
</div>
<div class="callout"><b>Note:</b> this result came out darker than a typical hillshade example, large areas render as near-total black rather than the more even step-to-white range you may have seen in tutorials. This happens because Zion's terrain is extremely steep and rugged: at only a 45&deg; sun angle, a large share of slopes are self-shadowed or facing away from the light. If you want a more visually balanced result for your final map, try raising Altitude to 60-70&deg;, or use the Multidirectional checkbox if your ArcGIS Pro version's Hillshade tool offers it, either option softens the shadow without changing the underlying analysis.</div>

<div class="ref-figure">
<img src="../surface-analysis-slope-reclass.png" alt="Slope reclassified into four hiking-difficulty classes">
<p class="ref-caption">Slope, Reclassified. 1 = Easy (magenta), 2 = Moderate (green), 3 = Difficult (orange), 4 = Hazardous (cyan).</p>
</div>
<div class="callout"><b>Note:</b> Cyan (4, Hazardous) visibly dominates most of this map, that is very likely a genuine, correct reflection of Zion's real geology, not a reclassification error. This clipped area is the entire park boundary, and most of Zion is steep sandstone cliff and plateau-edge country, only the narrow valley floor along the Virgin River (the thin magenta band running through the ragged terrain) is genuinely Easy. A quick way to double check without eyeballing colors: right-click <code>slope_reclass</code>, Attribute Table, and compare the Count column across the four class rows to confirm class 4 genuinely has the most cells and class 1 the fewest, consistent with a mostly-rugged park with a narrow flat corridor.</div>
<div class="ref-figure">
<img src="../surface-analysis-aspect-reclass.png" alt="Aspect reclassified into eight cardinal direction bins plus Flat">
<p class="ref-caption">Aspect, Reclassified. Eight cardinal direction bins plus Flat, color-coded by compass direction.</p>
</div>
<div class="callout"><b>Note:</b> this result looks like a fine-grained speckled pattern, that comes from pixel-to-pixel direction changing constantly, which is a genuine feature of aspect data over rugged terrain, not an error. Aspect can flip direction across a single ridge, gully, or cliff face, so complex canyon terrain almost always produces this speckled look, while smoother, rolling terrain would show cleaner color bands. What is still worth checking: zoom into one specific, recognizable canyon wall you can identify in the Hillshade layer, and confirm the dominant aspect color on that wall matches the compass direction the wall actually faces (e.g., a wall you know faces west should be dominated by the West color, even amid the speckle).</div>

</div>
</div>
<footer>hillshade / slope_reclass / aspect_reclass</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "SFA2026",
result: "SFA2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../select-by-location/">Select by Location</a></span>
<span class="lab-nav-next"><a href="../map-algebra/">Map Algebra</a></span>
</div>
