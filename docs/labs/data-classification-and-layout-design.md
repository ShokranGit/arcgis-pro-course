# Cartographic Principles; Map Classification; Map Elements, Layout, and Design Lab

<p class="lab-subtitle">Mapping Unemployment in New York City Neighborhoods</p>

<p class="lab-back"><a href="../../lessons/#data-classification-and-layout-design">&larr; Back to Lessons</a></p>

<div class="lab-toc"><b>On this page:</b> <a href="#student-handout">Student Handout</a> &middot; <a href="#data-acquisition">Data Acquisition</a> &middot; <a href="#project-instructions">Project Instructions</a> &middot; <a href="#result-reference">Result Reference</a></div>

<div class="lab-widget">
<div class="contents">
<div class="contents-head">Contents - click a layer to open</div>

<h2 id="student-handout" class="sr-anchor">Student Handout</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-handout" onclick="toggleOpen(this,'panel-handout')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Student Handout <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Scenario, objectives, tasks, and deliverables</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-handout">
<h2>Scenario</h2>
<p>The NYC Mayor's Office of Data Analytics wants a choropleth map showing neighborhood-level unemployment patterns across the five boroughs, based on American Community Survey 2008-2012 five-year estimates. A city planner has asked you to prepare the map and evaluate which data classification method best represents the distribution of unemployment rates. Your final deliverable is a polished, print-ready layout that can be shared with community stakeholders.</p>
<h2>Learning Objectives</h2>
<ul>
<li>Apply graduated color symbology to a polygon layer in ArcGIS Pro.</li>
<li>Switch between Natural Breaks (Jenks), Quantile, and Equal Interval classification methods.</li>
<li>Explain how classification choices affect map appearance and interpretation.</li>
<li>Refine symbology using color ramps, white outlines, and custom class labels.</li>
<li>Identify and describe spatial patterns in neighborhood unemployment across New York City.</li>
<li>Create a print layout with a north arrow, scale bar, legend, and title.</li>
<li>Export a layout at print-quality resolution.</li>
</ul>
<h2>Tasks</h2>
<ol>
<li>Open the project in ArcGIS Pro and confirm that the NYC_Nhood_ACS2008_12 layer is loaded.</li>
<li>Open the Attribute Table and locate the UEMPRATE field. Confirm it contains decimal values between 0 and 1.</li>
<li>Apply Graduated Colors symbology to UEMPRATE using Natural Breaks (Jenks), 5 classes. Take a screenshot of the resulting map.</li>
<li>Change the classification method to Quantile and take a screenshot. Then switch to Equal Interval and take a screenshot. Observe how the visual pattern changes.</li>
<li>Return to Natural Breaks. Refine the map: apply the Cyan to Purple color ramp, set white 0.3 pt outlines on all classes, and edit the class labels to show percentage ranges.</li>
<li>Create a print layout (Letter, landscape). Add a north arrow, scale bar, legend, and title.</li>
<li>Export the layout as a JPEG at 300 DPI.</li>
</ol>
<h2>Deliverables</h2>
<ul>
<li>Screenshot of the Symbology pane with UEMPRATE and Natural Breaks configured, before label edits.</li>
<li>Three comparison screenshots - Natural Breaks, Quantile, and Equal Interval - all at the same zoom extent.</li>
<li>Final refined map screenshot showing the cyan-to-purple ramp, white outlines, and percentage labels.</li>
<li>Exported JPEG layout (Letter, landscape, 300 DPI) with north arrow, scale bar, legend, and title.</li>
<li>Written response of 2-3 sentences: which classification method best communicates the spatial pattern of unemployment in NYC, and why?</li>
</ul>
</div>


<h2 id="data-acquisition" class="sr-anchor">Data Acquisition</h2>
<button class="layer" aria-expanded="false" aria-controls="panel-data" onclick="toggleOpen(this,'panel-data')">
<span class="swatch open">&#10003;</span>
<span class="layer-body">
<span class="layer-title">Data Acquisition <span class="layer-tag tag-open">open</span></span>
<span class="layer-desc">Where the NYC neighborhood ACS layer comes from</span>
</span>
<span class="chev">&#9654;</span>
</button>
<div class="panel" id="panel-data">
<h3>Dataset - NYC Neighborhood Tabulation Areas (ACS 2008-2012)</h3>
<p>The layer NYC_Nhood_ACS2008_12 is a polygon shapefile or geodatabase feature class produced by the NYC Department of City Planning. It contains 195 Neighborhood Tabulation Areas (NTAs) - the DCP standard sub-borough geography for publishing American Community Survey data. Each polygon represents one neighborhood and carries ACS 2008-2012 five-year demographic, economic, and housing estimates as attribute fields.</p>
<p>The data is distributed by the instructor. If you need to locate or re-download the original source, it is available from two official portals:</p>
<ol>
<li>NYC Open Data (primary): search "Neighborhood Tabulation Areas" at <code>data.cityofnewyork.us</code> and download the shapefile version.</li>
<li>NYC Department of City Planning (authoritative source): go to <code>nyc.gov/planning</code> &rarr; Data and Maps &rarr; NYC GIS Data &rarr; Neighborhood Tabulation Areas. Download the "NTA with ACS" package for the 2008-2012 vintage.</li>
</ol>
<div class="callout"><b>Note:</b> The instructor-provided file is already projected and attribute-joined. Use the file from the course folder (NYC_Nhood_ACS2008_12) rather than downloading fresh data - field names may differ across dataset versions.</div>
<h3>Key Fields in the Dataset</h3>
<p>The dataset contains many ACS fields. The table below lists the ones most relevant to this lab. UEMPRATE is the field you will symbolize; the others provide useful context for interpreting your map.</p>
<table>
<tr><th>Field Name</th><th>Type</th><th>Description</th></tr>
<tr><td>NTAName</td><td>Text</td><td>Full neighborhood name, for example Flushing or Harlem</td></tr>
<tr><td>NTACode</td><td>Text</td><td>DCP neighborhood code, for example QN17 or MN11</td></tr>
<tr><td>BoroName</td><td>Text</td><td>Borough name: Manhattan, Brooklyn, Queens, Bronx, Staten Island</td></tr>
<tr><td>BoroCode</td><td>Integer</td><td>1 Manhattan, 2 Bronx, 3 Brooklyn, 4 Queens, 5 Staten Island</td></tr>
<tr><td>Pop_Total</td><td>Long</td><td>Total ACS population estimate for the neighborhood</td></tr>
<tr><td>UEMPRATE</td><td>Double</td><td>Unemployment rate as a decimal, so 0.093 is 9.3 percent</td></tr>
<tr><td>medianinco</td><td>String</td><td>Median household income - stored as text, not usable for symbology</td></tr>
<tr><td>MedAge</td><td>Double</td><td>Median age of residents</td></tr>
<tr><td>HU_Total</td><td>Long</td><td>Total number of housing units</td></tr>
</table>
<div class="callout"><b>Watch out:</b> Why UEMPRATE and not medianinco. The medianinco field is stored as a String (text) type, so ArcGIS Pro will not offer it in the Graduated Colors field dropdown. UEMPRATE is a Double (numeric), which makes it suitable for classification and choropleth mapping. A rate field also allows direct comparison across neighborhoods of very different population sizes without further normalization.</div>
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
<p><i>Mapping Unemployment in New York City Neighborhoods. Cartographic principles, map classification, map elements, layout, and design.</i></p>
<p>A choropleth map uses color shading to represent data values across geographic areas. One of the most consequential decisions when making such a map is how to group continuous data into a limited number of classes - a process called data classification. The same dataset can tell very different stories depending on which method you choose.</p>
<p>In this lab you will map the unemployment rate (UEMPRATE) from American Community Survey 2008-2012 five-year estimates for New York City neighborhoods. You will apply three classification methods, compare the results, and then refine the final map with a polished color ramp, white outlines, and percentage labels before building a print layout.</p>

<h3>Part 1 - Open the Project and Verify the Layer</h3>
<p>Before applying symbology, confirm the layer is loaded and examine the data briefly.</p>
<ol>
<li>Open ArcGIS Pro and open your project.</li>
<li>In the Contents pane, confirm that NYC_Nhood_ACS2008_12 is listed under your map.</li>
<li>Right-click NYC_Nhood_ACS2008_12 and choose Attribute Table.</li>
<li>Locate the UEMPRATE column. Values are decimals between 0 and 1 - each is the fraction of the labor force that is unemployed in that neighborhood. Close the attribute table when done.</li>
</ol>

<h3>Part 2 - Apply Graduated Color Symbology</h3>
<p>You will apply your first classification using Natural Breaks (Jenks), one of the most widely used methods in GIS. Natural Breaks finds natural groupings in the data by minimizing variance within each class and maximizing variance between classes.</p>
<ol>
<li>In the Contents pane, click NYC_Nhood_ACS2008_12 to select it.</li>
<li>Click the Feature Layer tab at the top of the screen.</li>
<li>In the Drawing group, click Symbology. The Symbology pane opens on the right side of the screen.</li>
<li>In the Primary symbology dropdown, select Graduated Colors.</li>
<li>Set Field to UEMPRATE.</li>
<li>Set Method to Natural Breaks (Jenks).</li>
<li>Set Classes to 5.</li>
<li>Click the Color scheme dropdown and choose a sequential ramp - light shades for low unemployment, dark for high. Any single-hue ramp works for now; you will change it in Part 4.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-natural-breaks.png" alt="Symbology pane showing Graduated Colors on UEMPRATE with Natural Breaks Jenks and five classes">
<p class="ref-caption">Figure 1. Natural Breaks (Jenks) classification of UEMPRATE - 5 classes, yellow-to-red ramp.</p>
</div>
<div class="callout"><b>Observe:</b> Which neighborhoods have the highest unemployment rates? Do they cluster geographically, or are they scattered across all five boroughs?</div>

<h3>Part 3 - Compare Classification Methods</h3>
<p>The same dataset can look very different depending on the classification method. In this part you will switch between two additional methods and watch the visual pattern change even though the underlying data does not.</p>
<h4>Quantile</h4>
<p>In a Quantile classification, each class contains the same number of features. With 195 neighborhoods and 5 classes, each class gets exactly 39 neighborhoods. This produces visually balanced maps, but it can group neighborhoods with very different unemployment rates into the same class.</p>
<ol>
<li>In the Symbology pane, change Method to Quantile.</li>
<li>Observe how the class boundaries shift. Upper values are now set by rank, not by natural groupings in the data.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-quantile.png" alt="Symbology pane with Quantile classification applied to UEMPRATE">
<p class="ref-caption">Figure 2. Quantile classification - each of the 5 classes contains an equal number of neighborhoods.</p>
</div>
<h4>Equal Interval</h4>
<p>Equal Interval divides the full data range into equal-width classes. If the unemployment rate spans 0 to 57 percent, each class covers 11.4 percentage points. This works well for uniformly distributed data but can produce nearly empty high classes when the data is skewed.</p>
<ol>
<li>Change Method to Equal Interval.</li>
<li>Notice how most neighborhoods now fall into the lowest one or two classes. This happens because unemployment data is right-skewed - a small number of neighborhoods with very high rates stretch the upper end of the range.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-equal-interval.png" alt="Symbology pane with Equal Interval classification applied to UEMPRATE">
<p class="ref-caption">Figure 3. Equal Interval classification - most neighborhoods cluster in the lowest classes because unemployment rates are right-skewed.</p>
</div>
<h4>Which method is most appropriate?</h4>
<p>Each classification method makes a different trade-off:</p>
<table>
<tr><th>Method</th><th>What it does</th><th>Best for</th></tr>
<tr><td>Natural Breaks (Jenks)</td><td>Groups values at natural gaps in the distribution</td><td>Showing true data clusters; the most widely used method for thematic mapping of socioeconomic data</td></tr>
<tr><td>Quantile</td><td>Puts an equal number of features in every class</td><td>Showing relative rank among areas; can mislead when class boundaries fall at arbitrary points</td></tr>
<tr><td>Equal Interval</td><td>Creates equal-width value ranges</td><td>Uniformly distributed data; visually misleading when data is skewed, since most areas end up in one class</td></tr>
</table>
<div class="callout"><b>Question:</b> For mapping neighborhood unemployment rates in NYC, which classification method communicates the spatial pattern most clearly and accurately? Write a 2-3 sentence justification in your lab report.</div>
<ol>
<li>Before continuing, set Method back to Natural Breaks (Jenks). This will be the basis for your refined final map.</li>
</ol>

<h3>Part 4 - Refine the Symbology</h3>
<p>With Natural Breaks applied, you will now polish the map: change the color ramp, set white outlines to reduce visual clutter between neighboring polygons, and edit the class labels so the legend shows readable percentage ranges.</p>
<h4>Change the color ramp</h4>
<ol>
<li>In the Symbology pane, click the Color scheme dropdown.</li>
<li>Choose a sequential ramp that runs from light (low unemployment) to dark (high unemployment). For this lab, select Cyan to Purple. If it is not immediately visible, scroll through the list or type "cyan" in the search box at the top of the dropdown.</li>
</ol>
<h4>Set white outlines for all classes</h4>
<p>White outlines at a thin width separate neighboring polygons without drawing attention away from the fill colors.</p>
<ol>
<li>At the bottom of the Symbology pane, locate the Template color swatch.</li>
<li>Double-click the Template swatch to open the symbol editor.</li>
<li>Click the Properties tab in the symbol editor.</li>
<li>Under Layers, click the stroke (outline) layer to select it.</li>
<li>Set Color to White and Width to 0.3 pt.</li>
<li>Click Apply, then click the back arrow to return to the Symbology pane. All five class symbols update with white outlines.</li>
</ol>
<h4>Edit the class labels</h4>
<p>The default labels show raw decimal values such as 0.000000 - 0.062522. Replace them with percentage ranges so the legend is immediately readable.</p>
<ol>
<li>In the Symbology pane, click the Classes tab.</li>
<li>Click directly on the first entry under the Label column. The text becomes editable.</li>
<li>Type the label for each class as shown below, pressing Enter after each one.</li>
</ol>
<table>
<tr><th>Class</th><th>Label</th></tr>
<tr><td>1</td><td>0.0 - 6.3 pct</td></tr>
<tr><td>2</td><td>6.3 - 9.3 pct</td></tr>
<tr><td>3</td><td>9.3 - 13.3 pct</td></tr>
<tr><td>4</td><td>13.3 - 22.4 pct</td></tr>
<tr><td>5</td><td>22.4 - 57.0 pct</td></tr>
</table>
<ol start="4">
<li>Click outside the label field or press Enter after the last entry to confirm.</li>
<li>Close the Symbology pane by clicking the X in its top-right corner.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-refined-map.png" alt="Refined choropleth map of NYC neighborhoods using a cyan to purple ramp with percentage class labels">
<p class="ref-caption">Figure 4. Final refined map - Natural Breaks, percentage labels, white outlines, cyan-to-purple color ramp.</p>
</div>
<div class="callout"><b>Observe:</b> Compare Figure 4 to Figure 1. The class boundaries are identical, but the white outlines and percentage labels make the legend far more readable. Notice also how the color ramp changes which patterns stand out most.</div>

<h3>Part 5 - Create a Print Layout</h3>
<p>A layout is the ArcGIS Pro cartographic canvas - the space where you arrange map elements for printing or export. In this part you will create a new layout and insert your map into it.</p>
<ol>
<li>In the ribbon, click the Insert tab.</li>
<li>Click New Layout.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-new-layout.png" alt="Insert tab with the New Layout button and its tooltip">
<p class="ref-caption">Figure 5. Insert tab &rarr; New Layout.</p>
</div>
<ol start="3">
<li>Choose a standard paper size. Select Letter (8.5 by 11 in). Landscape works well for the east-west extent of New York City.</li>
<li>A blank layout opens in a new tab. On the Insert tab, click Map Frame.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-map-frame.png" alt="Blank layout page with the Map Frame button highlighted on the Insert tab">
<p class="ref-caption">Figure 6. Blank layout with the Map Frame option highlighted.</p>
</div>
<ol start="5">
<li>A dropdown appears showing the available maps. Click Map 1:230,964 - the thumbnail showing your styled NYC neighborhoods.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-map-frame-dropdown.png" alt="Map Frame dropdown showing the Default Extent and the styled NYC map thumbnail">
<p class="ref-caption">Figure 7. Selecting the styled map from the Map Frame dropdown.</p>
</div>
<ol start="6">
<li>Click and drag on the layout canvas to draw the map frame. Size it to fill most of the page, leaving roughly 2 inches at the bottom for the title and legend.</li>
<li>Your map appears inside the frame. To pan or zoom the map view within the frame, right-click the map frame and choose Activate. Pan and zoom until NYC fills the frame well. When finished, right-click and choose Close Activation, or press Esc.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-activate-frame.png" alt="Right-click context menu on the map frame showing Activate and other navigation options">
<p class="ref-caption">Figure 8. Right-clicking the map frame reveals navigation options including Activate.</p>
</div>
<div class="ref-figure">
<img src="../map-design-layout-map-view.png" alt="Activated map frame showing NYC neighborhoods filling the layout page">
<p class="ref-caption">Figure 9. The map frame with NYC neighborhoods visible in the layout.</p>
</div>

<h3>Part 6 - Add Map Elements</h3>
<p>A complete map includes four essential elements: a north arrow, a scale bar, a legend, and a title. ArcGIS Pro adds all of these from the Insert tab.</p>
<h4>North arrow</h4>
<ol>
<li>On the Insert tab, click North Arrow.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-north-arrow.png" alt="Insert tab with the North Arrow button and its tooltip over the layout">
<p class="ref-caption">Figure 10. Insert tab &rarr; North Arrow.</p>
</div>
<ol start="2">
<li>Click on the layout to place it. Position it inside the map frame in the lower-left corner.</li>
<li>In the Format North Arrow pane, choose a simple arrow style - the default ArcGIS north arrow works well.</li>
</ol>
<h4>Scale bar</h4>
<ol>
<li>On the Insert tab, click Scale Bar.</li>
<li>Click on the layout to place it near the north arrow, below it or to its right.</li>
<li>In the Format Scale Bar pane, confirm that units are set to Miles. ArcGIS Pro calculates the bar divisions automatically from the current map scale.</li>
</ol>
<h4>Legend</h4>
<ol>
<li>On the Insert tab, click Legend.</li>
<li>Draw a small rectangle in the lower-right area of the layout, outside the map frame.</li>
<li>The legend populates automatically with your UEMPRATE classification classes.</li>
<li>In the Format Legend pane, remove any basemap entries you do not want (World Topographic Map, World Hillshade) by selecting them and clicking Remove. Keep only NYC_Nhood_ACS2008_12 and UEMPRATE.</li>
</ol>
<h4>Title</h4>
<ol>
<li>On the Insert tab, click Text in the Graphics and Text group.</li>
<li>Click below the map frame on the left side of the layout.</li>
<li>Type: Unemployment in New York City Neighborhoods</li>
<li>In the Format Text pane, set the font size to 24 pt bold.</li>
</ol>
<h4>Source text</h4>
<p>The source attribution in the lower-right corner of the map frame - Sources: Esri, TomTom, Garmin, FAO, NOAA, USGS, OpenStreetMap contributors, and others - is added automatically by the World Topographic basemap. You do not need to add it manually. It is required whenever you use Esri online basemaps, so do not delete it.</p>
<div class="ref-figure">
<img src="../map-design-complete-layout.png" alt="Completed layout with map frame, north arrow, scale bar, legend, title, and automatic source text">
<p class="ref-caption">Figure 11. Complete layout with map frame, north arrow, scale bar, legend, title, and auto-generated source text.</p>
</div>

<h3>Part 7 - Design and Align Map Elements</h3>
<p>Good map design is about clarity and balance. Use the guidelines below when sizing, positioning, and styling each element.</p>
<table>
<tr><th>Element</th><th>Design guidance</th></tr>
<tr><td>Map frame</td><td>The map frame should dominate the layout - aim for roughly 8 by 6 inches on a landscape Letter page. Leave 0.25 inch margins on the left, right, and top, and reserve 1.5 to 2 inches at the bottom for the title and legend. To set a precise size, right-click the map frame and choose Properties, then Position and Size.</td></tr>
<tr><td>North arrow</td><td>Keep it small, 0.5 to 0.75 inches tall, inside the map frame in the lower-left corner where it does not overlap any neighborhood polygons. A simple single-arrow style such as the ArcGIS default ESRI North 1 is preferred; elaborate compass roses distract from the data. Color: black.</td></tr>
<tr><td>Scale bar</td><td>Place it directly below the north arrow or to its right, still inside the map frame. Keep the total width under 2 inches. The alternating filled bar style reads clearly at small sizes. Set units to Miles for a city-scale map.</td></tr>
<tr><td>Legend</td><td>Place it below the map frame on the right side so it aligns with the right edge of the map. Use 9-10 pt for class labels and 10-11 pt for the header. Rename the header by double-clicking it - shorten NYC_Nhood_ACS2008_12 to NYC Neighborhoods and replace the UEMPRATE subheading with a cleaner label such as Unemployment Rate. Keep the legend compact.</td></tr>
<tr><td>Title</td><td>24 pt bold, sans-serif (Calibri or Arial), black, positioned below the map frame and left-aligned with the left edge of the map. The title should state what is being mapped and where - avoid vague titles such as NYC Map.</td></tr>
<tr><td>Alignment</td><td>Use the Format tab and its Align tools to snap elements into alignment with each other or with the map frame. Right-click any element and choose Properties, then Position and Size, to enter exact coordinates in inches. A common workflow is to set the map frame first, then align the title to its left edge and the legend to its right edge.</td></tr>
</table>
<div class="callout"><b>Note:</b> The source text in the lower-right corner of the map frame is part of the basemap and cannot be moved independently. Leave enough clear space in that corner so it remains readable.</div>

<h3>Part 8 - Export the Layout</h3>
<p>When your layout is complete, export it as a high-resolution image or PDF for submission or printing.</p>
<ol>
<li>Click the Share tab in the ribbon.</li>
<li>Click Export Layout.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-export-layout-menu.png" alt="Share tab with the Export Layout button and its tooltip">
<p class="ref-caption">Figure 12. Share tab &rarr; Export Layout.</p>
</div>
<ol start="3">
<li>The Export Layout pane opens on the right side of the screen.</li>
</ol>
<div class="ref-figure">
<img src="../map-design-export-layout-pane.png" alt="Export Layout pane showing file type JPEG, output path, quality, and 300 DPI resolution">
<p class="ref-caption">Figure 13. Export Layout pane - set file type, resolution, and output path before exporting.</p>
</div>
<ol start="4">
<li>Set File Type to JPEG for digital submission, or PDF if you will be printing.</li>
<li>Set Resolution to 300 DPI. The pane shows the output dimensions - at 300 DPI a Letter page exports at 3300 by 2550 pixels.</li>
<li>Set Quality to Max (JPEG only).</li>
<li>Click the folder icon next to Name to choose a save location and filename.</li>
<li>Click Export. ArcGIS Pro renders and saves the file. When it finishes, open your output folder to confirm the file was saved correctly.</li>
</ol>
<div class="callout"><b>Key concept:</b> Always export at 300 DPI or higher for any map that will be printed or projected. 96 DPI screen resolution looks fine on a monitor but appears blurry on paper.</div>
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
<p><i>Mapping Unemployment in New York City Neighborhoods. Cartographic principles, map classification, map elements, layout, and design.</i></p>
<h3>Reference Answer Key - Verified Results</h3>
<p>This lab has been tested end-to-end. The values below are for reference:</p>
<ul>
<li>Dataset: 195 Neighborhood Tabulation Areas covering all five boroughs.</li>
<li>UEMPRATE range: approximately 0.000 (near 0 percent) to 0.570 (57.0 percent). The distribution is right-skewed - most neighborhoods fall below 15 percent.</li>
<li>Natural Breaks, 5 classes: 0.0-6.3 pct, 6.3-9.3 pct, 9.3-13.3 pct, 13.3-22.4 pct, 22.4-57.0 pct.</li>
<li>Quantile, 5 classes: each class contains 39 neighborhoods. Class boundaries differ from Natural Breaks and do not align with natural gaps in the data.</li>
<li>Equal Interval, 5 classes: each class covers roughly 11.4 percentage points. Most neighborhoods fall into the first class (0-11.4 pct); the upper classes above 34 percent may contain only a handful of neighborhoods.</li>
</ul>
<h3>Best Method for This Data</h3>
<p>Natural Breaks. It groups neighborhoods at meaningful gaps in the unemployment distribution, producing classes that correspond to genuine differences in economic conditions. Quantile forces an equal count into every class and therefore splits neighborhoods with nearly identical rates; Equal Interval pushes most of the city into a single class because the data is right-skewed.</p>
<div class="callout"><b>Note:</b> If the Graduated Colors field dropdown does not list the field you want, check its data type. Text fields such as medianinco cannot be classified - only numeric fields (Double, Long, Integer) appear in the list.</div>
</div>
</div>
<footer>NYC_Nhood_ACS2008_12 / UEMPRATE / Letter landscape, 300 DPI</footer>
</div>
</div>

<script>
var ACCESS_CODES = {
proj: "CLD2026",
result: "CLD2026"
};
</script>

<div class="lab-nav">
<span class="lab-nav-prev"><a href="../attribute-table-and-field/">Attribute Table and Field</a></span>
<span class="lab-nav-next"><a href="../select-by-attributes/">Select by Attributes</a></span>
</div>
