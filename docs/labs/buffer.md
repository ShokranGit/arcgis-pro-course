# Buffer Lab

<p class="lab-subtitle">Walkable School Access - Denver, Colorado</p>

<p class="lab-back"><a href="../../lessons/#buffer">&larr; Back to Lessons</a></p>

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
<p>Denver's transportation department wants to identify areas within convenient walking distance of public schools, to prioritize sidewalk and crosswalk improvements. You will create multiple buffer rings around every public school in Denver, then identify which parts of the city fall outside all of them - the areas most in need of new pedestrian infrastructure.</p>
<h2>Tasks</h2>
<ol>
<li>Download Denver public school point locations (NCES) and the Denver city-county boundary (Census TIGER).</li>
<li>Buffer every school at three distances at once: 0.1, 0.25, and 0.5 miles.</li>
<li>Dissolve the buffer rings into one combined coverage area.</li>
<li>Erase that coverage area from the city boundary to reveal the walking-distance gaps.</li>
<li>Symbolize, build a layout, and export a JPEG.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>Screenshot of the Buffer dialog showing all three distances entered.</li>
<li>The merged coverage layer and the final gap-area layer.</li>
<li>The final exported JPEG layout.</li>
<li>A short paragraph identifying the largest coverage gap and a plausible reason for it (e.g., an industrial area, a park, low-density edge of the city).</li>
</ul>
</div>

<h2 id="data-acquisition" class="sr-anchor">Data Acquisition Instructions</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition Instructions <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Click-by-click: downloading school points and the city boundary</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h2>Dataset 1: Public School Point Locations, via NCES EDGE</h2>
<ol>
<li>Go to <code>nces.ed.gov/programs/edge/Geographic/SchoolLocations</code>. No account or sign-in is required anywhere on this site.</li>
<li>The page is organized by year, with the most recent year's data shown first, followed by a "less / more" toggle to reveal older years further down the page. Confirm you are looking at the most recent year (currently 2024-25) - you do not need to click anything to switch years unless you specifically want an older release.</li>
<li>Scroll past the descriptive text and the three category headings (Public Schools &amp; School Districts, Private Schools, Postsecondary Schools) down to the heading simply labeled "Data."</li>
<li>Under that Data heading, you'll see three separate download links: "Public School File," "Public School District File," and "Postsecondary School File," each with its file size shown in parentheses (the Public School File is around 29 MB for the current year).</li>
<li>Click "Public School File" specifically - not the District or Postsecondary file. This downloads directly with no further confirmation screen or account prompt, straight to a file named something like <code>EDGE_GEOCODE_PUBLICSCH_2425.zip</code>.</li>
</ol>
<div class="callout"><b>Watch out:</b> This outer zip file does not contain a shapefile directly at its top level - when you extract it, you'll see four items: an .xlsx file, a .TXT file, a .sas7bdat file, and a second zip file named something like <code>Shapefile_SCH.zip</code>. The shapefile you actually need for ArcGIS Pro is inside that inner zip, one level deeper than you might expect on the first extraction.</div>
<ol start="6">
<li>Extract the outer zip first. Then locate and extract the inner <code>Shapefile_SCH.zip</code> separately - this second extraction produces the actual .shp, .shx, .dbf, .prj, and a few index/metadata files (.sbn, .sbx, .atx, .shp.xml) that together make up the usable shapefile.</li>
<li>Confirm you now have a file ending in .shp among the extracted contents before moving on - that is the file you will add to ArcGIS Pro.</li>
</ol>
<div class="callout"><b>Note:</b> This file is genuinely nationwide - all US public schools in one shapefile, roughly 102,000 point records. You are not meant to find a Denver-specific or Colorado-specific download anywhere on this site; isolating Colorado/Denver happens after the file is loaded into your GIS project, not during acquisition. That step belongs in Project Instructions, not here.</div>

<h2>Dataset 2: City Boundary, via Census TIGER</h2>
<ol>
<li>Go to <code>census.gov/cgi-bin/geo/shapefiles/index.php</code>. No account required.</li>
<li>Select the current year from the "Select year" dropdown.</li>
<li>From the "Select a layer type" dropdown, choose "Counties (and equivalent)," then click Submit.</li>
<li>On the next page, you'll be prompted to select a state. Choose Colorado, then click Submit again if a further selection step appears.</li>
<li>Download the resulting shapefile zip.</li>
</ol>
<div class="callout"><b>Note:</b> This file covers every county (and county-equivalent) in Colorado, not just Denver. Denver is a consolidated city-county, so a single feature in this file already represents both the city and county boundary together - you do not need a separate "city limits" download. Isolating just the Denver feature from this statewide file, again, happens in Project Instructions, not during acquisition.</div>
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
<p><i>Walkable School Access - Denver, Colorado. Spatial Analysis, Buffer.</i></p>
<h3>Part 1 - Setup</h3>
<ol>
<li>Add both national files to a new project.</li>
<li>Isolate Denver from the counties layer (Select By Attributes where NAME = 'Denver' and STATEFP = '08', then Export Features) &rarr; <code>DenverBoundary</code>.</li>
<li>Clip the schools point layer to <code>DenverBoundary</code> (Analysis &rarr; Clip, vector tool) &rarr; <code>Denver_Schools</code>.</li>
</ol>
<div class="ref-figure">
<img src="../buffer-setup.png" alt="Denver_Schools points clipped to DenverBoundary">
<p class="ref-caption"><code>Denver_Schools</code> (points) clipped to <code>DenverBoundary</code> - confirm your setup looks like this before buffering.</p>
</div>

<h3>Part 2 - Buffer</h3>
<ol>
<li>Analysis tab &rarr; Tools &rarr; search "Buffer" (the plain Buffer tool - not "Multiple Ring Buffer," which is a separate tool with a different output structure and is not what this lab uses). Input Features: <code>Denver_Schools</code>.</li>
<li>In the Distance field, instead of typing one number, enter all three distances separated by spaces: <code>0.1 0.25 0.5</code>, and set the linear unit dropdown next to it to Miles. Entering multiple values in this one field is what produces a separate ring for each distance in a single run - you do not need to run Buffer three separate times.</li>
<li>Dissolve Type: leave as None for now (you want to see each individual ring, not one merged shape yet - merging happens in Part 3).</li>
<li>Output name: <code>School_Buffers</code>. Run.</li>
</ol>
<div class="ref-figure">
<img src="../buffer-school-buffers.png" alt="School_Buffers with three ring sizes around every school">
<p class="ref-caption"><code>School_Buffers</code>: three visible ring sizes (0.1, 0.25, 0.5 mi) around every school.</p>
</div>
<div class="callout"><b>Why this step:</b> A single fixed buffer radius treats every scenario as equally urgent. Real planning questions usually have several meaningful thresholds (a 2-minute walk vs. a 10-minute walk), so seeing all three rings at once - rather than re-running Buffer three separate times - lets you compare them directly. These specific distances (0.1/0.25/0.5 mi) were chosen deliberately: they're small enough that real, visible gaps remain between schools, which is what makes the final Erase step meaningful. Wider distances like 1 mile tend to blanket nearly the whole city, leaving little to actually find.</div>

<h3>Part 3 - Find the Coverage Gaps</h3>
<ol>
<li>Analysis Tools &rarr; search "Dissolve." Input Features: <code>School_Buffers</code>. Leave Dissolve Field(s) empty - do not select a field here (in particular, do not select the "distance" field, which would keep the three ring sizes as separate output polygons instead of merging everything into one shape). Output name: <code>School_Buffers_Dissolve</code>. Run.</li>
</ol>
<div class="ref-figure">
<img src="../buffer-dissolve.png" alt="School_Buffers_Dissolve merged into one combined coverage shape">
<p class="ref-caption"><code>School_Buffers_Dissolve</code>: all rings merged into one combined coverage shape.</p>
</div>
<ol start="2">
<li>Analysis Tools &rarr; search "Erase." Input Features: <code>DenverBoundary</code>. Erase Features: <code>School_Buffers_Dissolve</code>. Output: <code>WalkabilityGaps</code>.</li>
</ol>
<div class="ref-figure">
<img src="../buffer-walkability-gaps.png" alt="WalkabilityGaps final result">
<p class="ref-caption"><code>WalkabilityGaps</code>: the final result - areas of Denver not within half a mile of any public school.</p>
</div>
<div class="callout"><b>Why this step:</b> Erase is the natural partner tool to Buffer for this kind of question: Buffer answers "what's covered," and Erase answers the flip side, "what's left over." Both are needed to actually answer the transportation department's real question.</div>
<ol start="3">
<li>Symbolize <code>WalkabilityGaps</code> in a clear warning color (e.g., the dark red shown above), build a layout with legend/north arrow/scale bar, and export a JPEG.</li>
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
<p><i>Walkable School Access - Denver, Colorado. Spatial Analysis, Buffer.</i></p>
<h3>Reference Answer Key - Verified Result</h3>
<p>This is a real, verified result from a successful run of this lab over Denver, using 0.1/0.25/0.5-mile buffer distances:</p>
<div class="ref-figure">
<img src="../buffer-walkability-gaps.png" alt="WalkabilityGaps reference result">
<p class="ref-caption"><code>WalkabilityGaps</code> (dark red): areas of Denver more than half a mile from any public school.</p>
</div>
<div class="callout"><b>Note:</b> At these three distances, the gaps are large and clearly visible - substantial portions of the city, including much of its outer edges and the northeastern annexed area near the airport, fall outside every buffer ring. This is a meaningfully different (and more useful for teaching) result than wider distances like 0.25/0.5/1 mile produce: at 1 mile, coverage becomes nearly total and gaps are too thin to see clearly at a city scale. If your own result looks similarly substantial - clear reddish areas rather than a few thin slivers - that's the expected pattern for these distances.</div>
</div>
</div>
<footer>DenverBoundary / Denver_Schools / School_Buffers / School_Buffers_Dissolve / WalkabilityGaps</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "BUF2026",
result: "BUF2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../select-by-location/">Select by Location</a></span>
<span class="lab-nav-next"><a href="../surface-analysis/">Surface Analysis</a></span>
</div>
