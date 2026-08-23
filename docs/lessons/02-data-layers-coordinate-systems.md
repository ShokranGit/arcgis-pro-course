# Lesson 02 · Data, Layers, and Coordinate Systems

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
60–75 minutes</div>
<div markdown>**Skill level**
Beginner</div>
<div markdown>**Output**
Layer audit table</div>
</div>

## Learning goals

- Explain when vector suits a problem and when raster does.
- Read a spatial reference and say what kind of coordinate system it is.
- Explain why layers can appear to line up correctly and still produce wrong measurements.
- Choose a projection appropriate to the analysis you intend to run.
- Diagnose the two distinct reasons layers fail to overlay.

## Key concepts

**Vector and raster are two answers to the same question: how do you store continuous reality in discrete numbers?**

Vector stores objects with boundaries: points, lines and polygons, each carrying attributes. It suits things that genuinely have edges, such as parcels, roads, administrative boundaries and sample sites. Raster stores a grid of cells, each holding one value. It suits things that vary continuously across space and have no natural edges, such as elevation, temperature, rainfall and land cover.

The practical consequence is that each format makes different questions cheap. "What is the total area of parcels zoned residential" is trivial in vector and awkward in raster. "What is the average slope across this watershed" is trivial in raster and awkward in vector. Choosing the wrong representation does not make an analysis impossible, only laborious and lossy.

**A coordinate system is a claim about how a curved earth was flattened.** Geographic coordinate systems such as WGS 84 give positions in degrees of latitude and longitude on a model of the earth's shape. They are positions on a globe, not on a plane. Projected coordinate systems such as UTM or a State Plane zone give positions in linear units, metres or feet, on a flat surface produced by a specific mathematical transformation.

**This is the point most students miss: degrees are not a unit of distance.** One degree of longitude is about 111 kilometres at the equator and about 78 kilometres at the latitude of New York. If you run a buffer, calculate an area or measure a distance while your data sits in a geographic coordinate system, the result will be distorted, and in some cases meaningless, even though the map looks perfectly normal.

**Every projection distorts something.** Flattening a sphere is impossible without cost, so each projection preserves some properties and sacrifices others. Conformal projections preserve local shape and angles. Equal-area projections preserve area. Equidistant projections preserve distance from specific points. No projection preserves everything, and the choice should follow the analysis:

| If your analysis depends on | Choose |
| --- | --- |
| Area, such as land cover totals or density | An equal-area projection |
| Distance and buffering | A projection appropriate to your region, such as the local UTM zone |
| Shape and direction, such as navigation | A conformal projection |
| Nothing measured, display only | Whatever reads clearly at your scale |

**Layers failing to overlay has two different causes, and they need different fixes.** If a layer has a spatial reference that is defined correctly but different from the map's, ArcGIS Pro will reproject it on the fly and it will line up. If a layer's spatial reference is missing or wrongly defined, no amount of reprojection helps, because the software has been told the wrong thing about what the coordinates mean. The first case is a display setting. The second requires the Define Projection tool and knowledge of what the data actually is. Guessing at the second is how quiet, permanent errors enter a project.

## Common mistakes

- **Buffering or measuring in degrees.** Check the layer's units before any distance operation. If they are degrees, project first.
- **Confusing Project with Define Projection.** Project transforms coordinates into a new system. Define Projection changes the label without touching the coordinates. Using the second when you needed the first corrupts the data silently.
- **Assuming on-the-fly reprojection fixed everything.** It fixes display. It does not change what the underlying data is stored in, and geoprocessing tools may still use the source.
- **Taking a downloaded layer's projection on trust.** Check it against the metadata, especially for data assembled by a third party.

## Practice task

Add two vector layers and one raster layer covering the same area, drawn from different sources so their spatial references are likely to differ. For each, record the data type, the file or service type, the coordinate system name and its linear or angular unit.

Then measure one distance twice: once with the map in a geographic coordinate system, and once in the appropriate projected system for that area. Record both numbers.

## Deliverable

Submit:

- A table listing each layer with its data type, source type, coordinate system and units.
- The two distance measurements, with the coordinate system used for each.
- Two to three sentences explaining which measurement you would report and why.

!!! note "The lining-up test is not enough"
    Layers drawing on top of each other correctly tells you the display is working. It tells you nothing about whether your measurements are valid.
