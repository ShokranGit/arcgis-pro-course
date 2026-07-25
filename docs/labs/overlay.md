# Overlay Lab

<p class="lab-subtitle">Intersect and Union - Countries and Time Zones</p>

<p class="lab-back"><a href="../../lessons/#overlay">&larr; Back to Lessons</a></p>

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
<p>A global geography research group needs to answer two related but distinct questions about countries and time zones. First: how many countries fall at least partly within each UTC time zone, and which countries span the most zones? Second: for maritime navigation and aviation planning, what does each time zone look like in its full geographic extent, including the open ocean? Neither question can be answered by looking at either dataset alone. The first calls for Intersect, the second calls for Union. Both are overlay operations, but they work in fundamentally different ways, and choosing the right one depends entirely on what your research question requires.</p>
<h2>Learning Objectives</h2>
<ul>
<li>Explain, in your own words, the geometric difference between Intersect and Union.</li>
<li>Run both tools in ArcGIS Pro, configure their parameters correctly, and interpret the output feature count.</li>
<li>Read an overlay attribute table and identify which fields came from which input layer.</li>
<li>Use Select by Attribute with FID fields to isolate unmatched areas in a Union output.</li>
<li>Decide which overlay operation is appropriate for a given spatial research question.</li>
</ul>
<h2>Tasks</h2>
<ol>
<li>Download both Natural Earth datasets and add them to a new ArcGIS Pro project.</li>
<li>Run Intersect to create Countries_TZ_Overlay. Open the attribute table and confirm both ADMIN and time_zone fields are present.</li>
<li>Run Summary Statistics to count distinct countries per UTC zone.</li>
<li>Run Union to create Countries_TZ_Union. Compare the feature count with the Intersect output.</li>
<li>Use Select by Attribute to isolate ocean-only polygons (FID_ne_10m_admin_0_countries = -1). Identify which time zones are predominantly ocean.</li>
<li>Build a map layout of the Union result, symbolized by zone, and export as JPEG.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>Screenshot of the Intersect tool dialog with both input layers configured.</li>
<li>Screenshot of the Countries_TZ_Overlay attribute table with ADMIN and time_zone visible.</li>
<li>Screenshot of the Summary Statistics output table.</li>
<li>Screenshot of the Union tool dialog.</li>
<li>Screenshot of Countries_TZ_Union symbolized by zone, showing ocean coverage.</li>
<li>Screenshot of ocean-only polygons selected (FID_countries = -1).</li>
<li>A written paragraph (4-6 sentences) comparing Intersect and Union: what each one kept, what each discarded, and which you would use for maritime vs land-based analysis.</li>
</ul>
</div>

<h2 id="data-acquisition" class="sr-anchor">Data Acquisition</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Downloading world countries and time zone boundaries from Natural Earth</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h2>Dataset 1: World Countries (Natural Earth 1:10m)</h2>
<ol>
<li>Go to <code>naturalearthdata.com/downloads/</code>. No account required.</li>
<li>Under 1:10m Cultural Vectors, click "Admin 0 - Countries".</li>
<li>Click "Download countries" to get the ZIP. Extract it. The shapefile is <code>ne_10m_admin_0_countries.shp</code>.</li>
</ol>
<div class="callout"><b>Note:</b> The 10m scale provides detailed country boundaries suited for global analysis. The key fields you will use from this layer are <code>ADMIN</code> (full country name, e.g., "United States of America") and <code>ISO_A3</code> (3-letter ISO code).</div>
<h2>Dataset 2: World Time Zones (Natural Earth 1:10m)</h2>
<ol>
<li>From the same site, go to <code>naturalearthdata.com/downloads/10m-cultural-vectors/</code>.</li>
<li>Scroll to Timezones and click "Download time zones".</li>
<li>Extract the ZIP. The shapefile is <code>ne_10m_time_zones.shp</code>.</li>
</ol>
<div class="callout"><b>Note:</b> Time zones are only available at 1:10m on Natural Earth. Both layers are in WGS84 so no reprojection is needed. Key fields: <code>time_zone</code> (IANA identifier, e.g., "America/New_York") and <code>zone</code> (numeric UTC offset, e.g., -5).</div>
<h3>Key Fields Reference</h3>
<ul>
<li><code>ADMIN</code> (ne_10m_admin_0_countries): Full country name</li>
<li><code>ISO_A3</code> (ne_10m_admin_0_countries): 3-letter ISO code</li>
<li><code>CONTINENT</code> (ne_10m_admin_0_countries): Continent name</li>
<li><code>time_zone</code> (ne_10m_time_zones): IANA timezone string</li>
<li><code>zone</code> (ne_10m_time_zones): Numeric UTC offset (e.g., 1.0)</li>
</ul>
</div>

<h2 id="project-instructions" class="sr-anchor">Project Instructions</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-proj" onclick="toggleGated(this,'panel-proj')">
<span class="swatch locked" id="swatch-proj">&#128274;</span>
<span class="layer-body">
<span class="layer-title">Project Instructions <span class="layer-tag tag-locked" id="tag-proj">locked</span></span>
<span class="layer-desc">Full ArcGIS Pro walkthrough: Intersect, Union, and FID-based ocean detection. Enter your access code to view.</span>
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
<h3>Part 1 - Project Setup</h3>
<ol>
<li>Create a new ArcGIS Pro project called Overlay_Lab.</li>
<li>Add Data: add <code>ne_10m_admin_0_countries.shp</code> and <code>ne_10m_time_zones.shp</code>. Both will load in WGS84, no projection change needed.</li>
<li>Before running any tools, take a moment to symbolize <code>ne_10m_time_zones</code> by the <code>zone</code> field (Unique Values). Observe how time zone boundaries follow political decisions more than geography, China, for instance, uses a single UTC+8 zone despite spanning nearly five geographic time zones.</li>
</ol>
<div class="callout"><b>Why this matters:</b> Looking at both layers before running any analysis is good scientific practice. It helps you form a hypothesis, "which time zone do I expect covers the most countries?", and lets you spot obvious data problems (missing regions, incorrect extents) before investing time in geoprocessing.</div>
<h3>Part 2 - Intersect: Countries Within Each Time Zone</h3>
<div class="callout"><b>Key concept:</b> What Intersect does: Intersect finds every location where Polygon Layer A and Polygon Layer B physically overlap. It then creates a new polygon for each overlap area, cutting country shapes along time zone boundaries and vice versa. The output polygon is always smaller than or equal to either input. Crucially, any part of a layer that does NOT overlap with the other layer is discarded. For countries and time zones, that means all the ocean areas of the time zones are thrown away, only land areas survive. Think of it as a spatial AND operation: a polygon appears in the output only if it is in Layer A AND in Layer B.</div>
<p><b>Running the Intersect Tool</b></p>
<ol>
<li>Go to Analysis tab &rarr; Tools. Type "Intersect" in the search bar and open the tool.</li>
<li>Input Features: click the + button and add <code>ne_10m_admin_0_countries</code>. Click + again and add <code>ne_10m_time_zones</code>. Both layers must be listed as inputs.</li>
</ol>
<div class="callout"><b>Why this matters:</b> You must add both layers as inputs because Intersect needs to know which two geometries to compare. The order does not affect the output geometry, but it does affect the order of fields in the attribute table, fields from the first layer listed appear before fields from the second.</div>
<ol start="3">
<li>Output Feature Class: name it <code>Countries_TZ_Overlay</code>. ArcGIS Pro will save it into your project's default geodatabase automatically.</li>
</ol>
<div class="callout"><b>Note:</b> Saving to a geodatabase (rather than a shapefile) is best practice for analysis outputs. Geodatabases support longer field names, larger file sizes, and are easier to manage than a folder full of .shp, .dbf, and .prj files.</div>
<ol start="4">
<li>Join Attributes: leave it as ALL. This tells ArcGIS to carry every field from both input layers into the output table.</li>
</ol>
<div class="callout"><b>Why this matters:</b> Choosing ALL attributes is the reason overlay is so powerful. Each output polygon will have both the ADMIN field from the countries layer AND the zone and time_zone fields from the time zones layer, all in the same row. If you chose "Only Feature Class Fields" you would only get geometry with no useful attributes. If you chose "No Feature Class Fields" you would lose all attributes entirely.</div>
<ol start="5">
<li>Output Type: leave as INPUT (same as input = polygons). Click Run.</li>
</ol>
<div class="callout"><b>Key concept:</b> What happens geometrically: when the tool runs, ArcGIS overlays the two polygon layers and computes every intersection. A country like Indonesia that spans four time zones produces four separate output polygons, one for each zone slice. A country like France (metropolitan) that sits entirely within UTC+1 produces a single output polygon. The total feature count in the output is therefore not the number of countries, it is the number of unique country-zone combinations across the globe.</div>
<p><b>Reading the Output Attribute Table</b></p>
<ol start="6">
<li>Once the tool finishes, right-click <code>Countries_TZ_Overlay</code> in the Contents panel and choose Attribute Table. Scroll right to find the ADMIN field and the time_zone field.</li>
</ol>
<div class="callout"><b>Why this matters:</b> The attribute table is where the analytical power of overlay becomes concrete. Look for Indonesia in the ADMIN column, it appears four times, once for each time zone it occupies (UTC+07:00, UTC+08:00, UTC+09:00, UTC+10:00). Each row represents a distinct geographic slice of Indonesian territory in a different time zone. Without the overlay, there was no single dataset that told you this.</div>
<ol start="7">
<li>Note the total feature count shown at the bottom of the attribute table window (e.g., "0 of 500 selected"). Remember: this is country-zone combinations, not countries.</li>
</ol>
<div class="callout"><b>Watch out:</b> A common mistake is to read the feature count (e.g., 500) as the number of countries. It is not. Countries that span multiple zones (Russia, USA, Canada, Australia, Brazil) each contribute multiple rows. When you run Summary Statistics in Part 3, you need to count distinct country names per zone, not just total row counts, to get a meaningful answer.</div>
<ol start="8">
<li>Symbolize <code>Countries_TZ_Overlay</code> by the zone field (Unique Values). You will see each country or country-slice colored by its UTC offset, with only land areas showing, the ocean areas are gone.</li>
</ol>
<div class="ref-figure">
<img src="../overlay-intersect-attribute.png" alt="Intersect result symbolized by zone with attribute table open showing ADMIN and time_zone fields">
<p class="ref-caption">Intersect result symbolized by zone, with attribute table open showing ADMIN and time_zone fields. Note Indonesia appearing in multiple rows for different zones.</p>
</div>
<div class="callout"><b>Why this matters:</b> The absence of ocean in the Intersect result is not a bug, it is exactly what Intersect is designed to do. Because the countries layer has no ocean polygons, there is nothing for the time zone polygons to intersect with over open water. The ocean areas existed only in the time zones layer, and Intersect threw them away. This is precisely the gap that Union addresses in Part 4.</div>
<h3>Part 3 - Summary Statistics: Countries per Time Zone</h3>
<p>Now that you have the overlay table, use Summary Statistics to count how many country records fall in each time zone.</p>
<ol>
<li>Analysis tab &rarr; Tools &rarr; search "Summary Statistics". Open the tool.</li>
<li>Input Table: <code>Countries_TZ_Overlay</code>.</li>
<li>Statistics Fields: choose ADMIN, statistic type COUNT.</li>
<li>Case Field: zone.</li>
<li>Click Run. The output table shows COUNT_ADMIN per UTC zone value.</li>
</ol>
<div class="callout"><b>Note:</b> The COUNT here counts rows per zone, not distinct countries. A country spanning 3 zones will contribute 1 count to each of those 3 zones. For most teaching purposes this is acceptable, it answers "how many country-slices are in each zone." For strictly distinct country counts, a Python-based verification would be needed.</div>
<ol start="6">
<li>Sort the output table by COUNT_ADMIN descending to see which time zones have the most country coverage.</li>
</ol>
<h3>Part 4 - Union: The Complete Time Zone Picture</h3>
<div class="callout"><b>Key concept:</b> Intersect vs Union, the core difference: Intersect keeps only where both layers overlap. Union keeps everything from both layers, overlapping areas AND non-overlapping areas. Think of it this way: Intersect = spatial AND (must be in Layer A AND Layer B). Union = spatial OR (can be in Layer A OR Layer B or both). For countries and time zones, Union adds back the ocean portions of each time zone that Intersect discarded. The Pacific Ocean does not belong to any country, but it still falls within UTC-10, UTC-11, and UTC-12 time zones. Union preserves those ocean polygons with null country attributes, giving you the full geographic footprint of every time zone, land and sea.</div>
<div class="callout"><b>Why this matters:</b> Knowing the full geographic extent of a time zone, not just the land portions, matters for maritime navigation, commercial aviation, satellite operations, and international maritime law. A ship crossing the Pacific transitions through UTC-12, UTC-11, and UTC-10 mostly over open ocean. The Intersect result would show only Hawaii and a few island nations in those zones. The Union result shows the full ocean bands, making it far more useful for routing and scheduling in those contexts.</div>
<p><b>Running the Union Tool</b></p>
<ol>
<li>Go to Analysis tab &rarr; Tools. Search for "Union" and open it. Note that it looks very similar to the Intersect dialog, same inputs, same attribute join options. The key difference is the operation being performed, not the interface.</li>
<li>Input Features: add <code>ne_10m_admin_0_countries</code> first, then <code>ne_10m_time_zones</code>. Same two layers as the Intersect.</li>
<li>Output Feature Class: name it <code>Countries_TZ_Union</code>.</li>
<li>Attributes to Join: All attributes.</li>
<li>Leave "Gaps Allowed" checked (the default). Click Run.</li>
</ol>
<div class="ref-figure">
<img src="../overlay-union-dialog.png" alt="Union tool dialog configured with both layers as inputs">
<p class="ref-caption">Union tool dialog configured with both layers as inputs. The settings look identical to Intersect, only the tool itself differs.</p>
</div>
<div class="callout"><b>Note:</b> "Gaps Allowed" controls whether ArcGIS creates polygons to fill any tiny sliver gaps between input features that result from rounding or digitizing inconsistencies. Leaving it checked is usually the right choice for real data.</div>
<p><b>Understanding the Output</b></p>
<ol start="6">
<li>When Union finishes, open the attribute table. Notice the feature count, it is considerably higher than the Intersect output. That difference represents the ocean-only time zone polygons that Intersect discarded but Union retained.</li>
</ol>
<div class="callout"><b>Key concept:</b> Understanding FID fields: When Union runs, it creates special fields called FID_[layername] for each input. These fields record which original feature each output polygon came from. FID value greater than 0: this polygon matched a feature in that layer. FID value = -1: this polygon has no matching feature from that layer, it came from the other layer only. So FID_ne_10m_admin_0_countries = -1 means: "this polygon is in a time zone, but there is no country beneath it." In other words, it is ocean. This is the GIS equivalent of a null foreign key in a database, it tells you the record has no match on that side of the join.</div>
<ol start="7">
<li>Symbolize <code>Countries_TZ_Union</code> by the zone field (Unique Values). You will now see color bands extending across the oceans, something that was invisible in the Intersect output. The time zone stripes in the Pacific and Atlantic are now fully visible.</li>
</ol>
<div class="ref-figure">
<img src="../overlay-union-zones.png" alt="Union result symbolized by zone showing full ocean coverage">
<p class="ref-caption">Union result symbolized by zone. The full geographic extent of each time zone is now visible, including vast ocean areas that the Intersect operation discarded.</p>
</div>
<p><b>Identifying Ocean-Only Polygons</b></p>
<ol start="8">
<li>On the Map tab, click "Select by Attributes" (or right-click the layer &rarr; Attribute Table &rarr; Select by Attributes button).</li>
<li>Build this expression: <code>FID_ne_10m_admin_0_countries is Equal to -1</code>. Click OK.</li>
</ol>
<div class="callout"><b>Why this matters:</b> This query does something elegant: it uses the FID field, which ArcGIS creates automatically during Union, to filter the output into "polygons that came from a country feature" vs "polygons that did NOT come from a country feature." The second group (FID = -1) is exactly the ocean time zone areas. You did not need to calculate any new field, do any join, or write any Python, the information was encoded in the FID field the moment the Union ran.</div>
<ol start="10">
<li>Look at the highlighted (selected) polygons on the map. These are the time zone areas with no country beneath them, all ocean. Count how many are selected (shown at the bottom of the attribute table). Note which parts of the globe they occupy.</li>
</ol>
<div class="ref-figure">
<img src="../overlay-ocean-selection.png" alt="Ocean-only polygons selected using FID equal to -1">
<p class="ref-caption">Ocean-only polygons selected using FID_ne_10m_admin_0_countries = -1. The highlighted outlines mark time zone areas with no country beneath them, predominantly in the Pacific, Atlantic, and Indian Oceans.</p>
</div>
<div class="callout"><b>Watch out:</b> You may notice some selected polygons in unexpected locations, near coastlines or around small islands. These are not errors. They represent very small coastal ocean areas where the time zone polygon extends slightly beyond the country boundary, a natural result of the two datasets being drawn at slightly different levels of coastal detail.</div>
<ol start="11">
<li>Clear the selection (Map tab &rarr; Clear). Then open the attribute table and scan the zone column for selected and unselected rows. Which zones appear to have the most ocean records? Which zones appear to be almost entirely land?</li>
</ol>
<div class="callout"><b>Why this matters:</b> The distribution of ocean vs land across time zones reflects Earth's physical geography. UTC-10, UTC-11, and UTC+12 cover vast areas of the central Pacific Ocean, a region with almost no land. By contrast, UTC+1 and UTC+2 cover densely populated, almost entirely land regions of Europe and Africa. This geographic asymmetry is invisible in the Intersect output because Intersect only shows where land exists. Union reveals what the Intersect had to leave behind.</div>
<h3>Part 5 - Final Layout</h3>
<ol>
<li>Turn off <code>Countries_TZ_Overlay</code> and turn on <code>Countries_TZ_Union</code>. Symbolize it by zone if not already done.</li>
<li>Insert &rarr; New Layout. Choose Letter Landscape.</li>
<li>Insert &rarr; Map Frame, draw a frame covering most of the page.</li>
<li>Insert &rarr; Dynamic Text &rarr; Map Name to place an auto-updating title.</li>
<li>Insert &rarr; Legend, Scale Bar, and North Arrow.</li>
<li>Share tab &rarr; Export Layout &rarr; JPEG, 150 dpi.</li>
</ol>
<div class="ref-figure">
<img src="../overlay-final-layout.png" alt="Final map layout showing Countries and Time Zones Overlay with title, legend, scale bar, and north arrow">
<p class="ref-caption">Final map layout showing the Countries and Time Zones Union result, with title, legend, scale bar, and north arrow.</p>
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
<p><i>Countries and Time Zones - Global Overlay Analysis. Spatial Analysis, Overlay (Union/Intersect).</i></p>
<h3>Reference Answer Key - Verified Results</h3>
<p>These are approximate reference results using Natural Earth 1:10m data. Exact counts vary slightly by Natural Earth data version, use them to confirm your overall pattern, not an exact match.</p>
<p><b>Intersect Results</b></p>
<ul>
<li>Output polygons: approximately 500-600 (one per country-zone slice).</li>
<li>Russia spans the most zones: UTC+2 through UTC+12 (11 zones).</li>
<li>USA spans 6 zones; Canada spans 6.</li>
<li>UTC+1 and UTC+2 contain the most countries (~30 each), covering most of Europe and Africa.</li>
<li>UTC-11 and UTC+13 contain only 1-2 countries each.</li>
</ul>
<p><b>Union Results</b></p>
<ul>
<li>Output polygons: significantly more than Intersect, roughly 700-900+, because ocean time zone areas are now included.</li>
<li>Ocean-only polygons (FID_countries = -1): several hundred, the difference between Union and Intersect feature counts is largely these ocean areas.</li>
<li>Most oceanic zones: UTC-10, UTC-11, UTC+12, UTC+13, these cover vast stretches of the Pacific Ocean with minimal land territory.</li>
<li>Least oceanic zones: UTC+1, UTC+2, UTC+3, these cover densely populated, mostly-land regions of Europe, Africa, and the Middle East.</li>
</ul>
<div class="callout">These counts confirm your workflow was executed correctly, they are not a substitute for doing the analysis yourself, and your submitted screenshots must show your own Intersect and Union dialogs and attribute tables.</div>
</div>
</div>
<footer>ne_10m_admin_0_countries / ne_10m_time_zones / Countries_TZ_Overlay / Countries_TZ_Union</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "OVL2026",
result: "OVL2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../dissolve/">Dissolve</a></span>
<span class="lab-nav-next"><a href="../intro-to-geospatial-programming/">Intro to Geospatial Programming</a></span>
</div>