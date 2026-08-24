# Coordinate Systems

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
60 minutes</div>
<div markdown>**Skill level**
Beginner to intermediate</div>
<div markdown>**Output**
Documented projection comparison</div>
</div>

## Learning goals

- Separate the three things a spatial reference actually specifies.
- Explain what a datum is and why two datasets in "latitude and longitude" can still disagree.
- Distinguish projecting data from transforming between datums.
- Read an EPSG code and know what it commits you to.

## Key concepts

**A spatial reference is three decisions, not one.** Most confusion here comes from collapsing them.

1. **A datum** is a model of the earth's shape and size, and how that model is anchored to the actual planet. WGS 84 and NAD 83 are datums.
2. **A geographic coordinate system** expresses position on that model as latitude and longitude, in degrees.
3. **A projected coordinate system** applies a mathematical transformation to flatten those positions onto a plane, giving coordinates in metres or feet.

A projected system always contains a geographic one, which always contains a datum. So "the data is in UTM Zone 18N" is only most of the answer; UTM Zone 18N on NAD 83 and on WGS 84 are different systems.

**The datum is why two "latitude and longitude" layers can be metres apart.** Latitude and longitude are not absolute. They are positions on a specific model of the earth, and different datums place that model slightly differently. The offset between NAD 27 and NAD 83 reaches over 100 metres in parts of North America. Between NAD 83 and WGS 84 it is usually a metre or two, which is invisible at city scale and significant for survey work.

This is the difference between two operations that sound alike:

- **Project** converts coordinates from one system to another on the same datum. Purely mathematical, and reversible.
- **Transform** moves between datums. It uses an approximation of how the two models differ, and choosing the wrong transformation introduces error you cannot see.

ArcGIS Pro will usually pick a transformation for you and note it quietly. For precise work, check which one it chose.

**Every projection sacrifices something, because flattening a sphere is impossible without loss.** What varies is which property survives.

| Preserves | Called | Reasonable for | Distorts |
| --- | --- | --- | --- |
| Local shape and angles | Conformal | Navigation, weather, large-scale mapping | Area, badly at high latitudes |
| Area | Equal-area | Density, land cover totals, thematic mapping | Shape, increasingly away from centre |
| Distance from a point or line | Equidistant | Range rings, travel distance from a hub | Everything else |
| Direction from a centre | Azimuthal | Flight paths, signal coverage | Shape and area away from centre |

Web Mercator, the projection behind most online basemaps, is conformal. It preserves shape and grossly exaggerates area at high latitudes, which is why Greenland looks the size of Africa on a web map when it is about a fourteenth of it. Convenient for tiles, unsuitable for measuring anything.

**An EPSG code is a compact way to name the whole stack.** EPSG:4326 is WGS 84 in degrees. EPSG:3857 is Web Mercator. EPSG:26918 is NAD 83 UTM Zone 18N. Quoting a code removes the ambiguity of quoting a projection family alone, and it is what you should record in metadata.

**Choosing one, in practice:** work in a projected system appropriate to your study area, use the local UTM zone or State Plane zone for most regional work, and pick equal-area when your conclusions rest on area or density. Keep data in a geographic coordinate system only for storage and exchange, never for measurement.

## Common mistakes

- **Measuring in degrees.** Covered at length in Lesson 02, and still the most common error in the course.
- **Using Define Projection to fix a layer that will not line up.** Define Projection changes the label, not the coordinates. If the label was already right, this corrupts the data silently. Use Project.
- **Assuming on-the-fly reprojection changed the data.** It changes the display only.
- **Measuring area on Web Mercator.** It is conformal, so areas are wrong, increasingly so away from the equator.
- **Ignoring the datum.** Two UTM Zone 18N layers on different datums will not agree.

## Practice task

Take one polygon layer covering an area you know.

1. Record its full spatial reference: datum, geographic system, projected system if any, and EPSG code.
2. Calculate the total area three times: in the layer's native system, in an equal-area projection appropriate to the region, and in Web Mercator.
3. Record all three figures and the percentage difference from the equal-area result.

## Deliverable

Submit:

- The layer's full spatial reference, including the EPSG code.
- The three area figures with their projections named.
- Three to four sentences on the size of the Web Mercator error, and what you would say to someone who reported that figure.

!!! note "One habit covers most of this"
    Check the units before any operation involving distance or area. If they are degrees, project first.
