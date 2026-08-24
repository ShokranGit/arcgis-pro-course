# Vector and Raster Data

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
45 minutes</div>
<div markdown>**Skill level**
Beginner</div>
<div markdown>**Output**
Written format comparison</div>
</div>

## Learning goals

- Explain what each data model can represent and what it necessarily discards.
- Choose the model that makes your analysis cheap rather than laborious.
- Explain why raster resolution and map scale are different things.
- Describe what is lost when converting between the two models.

## Key concepts

**Both models are compromises for storing a continuous world in discrete numbers.** Neither is more accurate in general. They fail differently, and the choice should follow the question.

**Vector stores objects with boundaries.** Three geometry types cover everything:

| Geometry | Stores | Examples |
| --- | --- | --- |
| Point | A single coordinate pair | Trees, schools, sample sites, subway stations |
| Line | An ordered sequence of vertices | Roads, streams, transit routes, pipelines |
| Polygon | A closed sequence enclosing an area | Parcels, neighbourhoods, flood zones, lakes |

Which geometry a thing gets is a decision about scale, not a fact about the thing. A city is a point on a world map and a polygon on a regional one. A river is a line at 1:100,000 and a polygon at 1:1,000. The data model records a choice somebody made about what level of detail the analysis needed.

**Vector's real strength is the attribute table.** Every feature carries a row of data, so a polygon layer is a database that happens to have shapes. That is what makes selection, joins, and summary statistics natural in vector and awkward in raster.

**Raster stores a grid of equal cells, each holding one value.** There is no notion of an object. A lake in a land cover raster is not a lake; it is several thousand adjacent cells that happen to share a value. Anything you want to treat as an object has to be inferred.

What raster gives you in exchange is continuity. Every location in the extent has a value, with no gaps between features, which is what makes surfaces work: elevation, temperature, rainfall, distance, suitability. Cell-by-cell arithmetic across layers is trivial, which is the basis of map algebra and suitability modelling in Lesson 06.

**Resolution is not scale, and the distinction matters.** Resolution is the ground size of one cell, for example 30 metres. Scale is the ratio between map distance and ground distance. A 30 metre raster displayed on a large-scale map does not gain detail; it shows you large blocky cells. Zooming in reveals the limit of the data rather than more information. The smallest thing a raster can represent is one cell, so a 30 metre raster cannot show a footpath, however far you zoom.

**Choosing between them, in practice:**

| The question is about | Use | Because |
| --- | --- | --- |
| Discrete things you can count or name | Vector | Each thing is a feature with attributes |
| A property that varies everywhere | Raster | Every location has a value |
| Exact area, length or boundary position | Vector | Geometry is stored precisely, not sampled |
| Terrain, imagery, climate, distance surfaces | Raster | Continuous by nature |
| Joining external tabular data | Vector | Attribute tables join; grids do not |
| Overlaying many criteria arithmetically | Raster | Cell-by-cell maths is direct |

**Conversion always loses something.** Vector to raster forces boundaries onto a grid, so a smooth parcel edge becomes a staircase and small features may vanish entirely if they are narrower than a cell. Raster to vector produces polygons whose edges follow cell boundaries, which look precise and are not: the blockiness is an artefact of the grid, not a measured boundary. Convert when the analysis demands it, and do not treat the converted output as more authoritative than the source.

## Common mistakes

- **Treating raster edges as real boundaries.** They are the resolution of the grid.
- **Zooming in to get more detail.** The cell size is the ceiling.
- **Converting polygons to raster and then computing area precisely.** The area is now a count of cells, and precision is bounded by cell size.
- **Choosing a model out of habit.** The question decides, not what you used last time.

## Practice task

Take one phenomenon that can plausibly be represented either way, such as land cover, population, or flood extent.

1. Find or create a vector version and a raster version of the same area.
2. Answer one question with each: a count or an area from the vector, and a summary statistic from the raster.
3. Convert one to the other model, and compare the answer you get from the converted version against the original.

## Deliverable

Submit:

- The two answers from the original layers, with the method for each.
- The answer from the converted layer, alongside the original it should match.
- Three to four sentences on the size of the discrepancy, what caused it, and which version you would report.

!!! tip "Where this is applied"
    Lesson 02 puts this to work on [data, layers and coordinate systems](../lessons/02-data-layers-coordinate-systems.md); Lesson 06 relies on it throughout [raster analysis](../lessons/06-raster-analysis.md).
