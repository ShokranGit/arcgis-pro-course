# Lesson 03b · Selection by Location

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
45–60 minutes</div>
<div markdown>**Skill level**
Beginner to intermediate</div>
<div markdown>**Output**
Exported subset and a relationship comparison</div>
</div>

## Learning goals

- Choose the spatial relationship that matches the question you are asking.
- Explain the difference between Intersect, Within, Contains and Within a Distance, and predict how their results differ.
- Recognise when a distance-based selection is being distorted by the coordinate system.
- Combine attribute and spatial selection in a single workflow.

## Key concepts

**Selection by location asks where, not what.** Instead of filtering on values in a table, you filter on the geometric relationship between two layers. The question always has the same shape: select features from **this** layer that have **this relationship** to features in **that** layer.

Getting the direction right matters as much as getting the relationship right. "Parcels that intersect the floodplain" and "floodplain polygons that intersect parcels" are different questions with different answers and different row counts. Decide which layer you want features **from** before you open the tool.

**The relationships are not interchangeable.**

| Relationship | Selects features that | Typical use |
| --- | --- | --- |
| Intersect | Share any space at all, including a touching edge | The general-purpose default |
| Within | Fall entirely inside another feature | Schools inside a district |
| Contains | Entirely enclose another feature | Districts holding at least one school |
| Within a distance | Fall within a stated distance | Anything about proximity or access |

Intersect is the loosest and will include features that merely graze the boundary. When a parcel touches a floodplain at one corner, Intersect counts it and Within does not. Which is correct depends entirely on what you are going to claim, so decide what "affected" means before you choose.

**Within a Distance is where the coordinate system reappears.** A search distance is a real-world measurement, so it depends on the data being in a projected coordinate system with linear units. Run a one-mile selection on data stored in degrees and the result will be wrong in a way that looks plausible. This is the same failure described in Lesson 02, and it surfaces here more often than anywhere else in the course, because proximity questions are so common.

**Spatial and attribute selection compose.** Real questions usually need both: not "schools near a park" but "public elementary schools within half a mile of a park larger than two acres". Selecting by attribute first, exporting, then selecting by location against that subset, is usually clearer than trying to express everything at once, and it leaves an auditable trail of intermediate layers.

## Common mistakes

- **Selecting from the wrong layer.** Check the top of the dialog. This is the single most frequent error with this tool.
- **Using Intersect when the claim requires Within.** A feature touching a boundary is included by Intersect. If your sentence says "inside", use Within.
- **Running a distance selection on unprojected data.** Check units first.
- **Forgetting an existing selection.** Select By Location applied while another selection is active may operate only on that subset. Sometimes intended, often not.
- **Reporting a count without checking it.** If a proximity selection returns nearly every feature, the distance is probably too large for the question to mean anything.

## Practice task

Using a target layer and a reference layer:

1. Run the same selection twice, once with Intersect and once with Within. Record both counts.
2. Run a Within a Distance selection at two different distances. Record both counts.
3. Combine an attribute selection with a spatial one to answer a question you write yourself, in one sentence, before you start.

Export the result of the combined query.

## Deliverable

Submit:

- The counts from the Intersect and Within comparison, and two to three sentences explaining which features account for the difference.
- The counts at both search distances.
- Your written question, and a screenshot of the exported result.

!!! tip "Practise this"
    The [Select by Location lab](../labs/select-by-location.md) works through this with Chicago robbery points, park boundaries and police stations.

!!! note "Attributes vs. location"
    Select By Attributes asks questions about values in a table. Select By Location asks questions about where things are relative to each other. The two tools are often used together.
