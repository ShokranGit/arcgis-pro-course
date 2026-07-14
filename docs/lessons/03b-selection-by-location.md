# Lesson 03b · Selection by Location

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
45 minutes</div>
<div markdown>**Skill level**
Beginner to intermediate</div>
<div markdown>**Output**
Selected and exported features</div>
</div>

## Learning goals

- Understand spatial relationships used in selection (intersect, within, contains, near).
- Use Select By Location to select features based on their spatial relationship to another layer.
- Combine spatial selection with a search distance where appropriate.
- Export selected features into a new layer.

## Key concepts

Select By Location selects features in one layer based on their spatial relationship to features in another layer, rather than by attribute values. Common relationships include intersects, contains, within, and within a distance.

Example scenario:

Select all parcels that intersect a floodplain layer, or select all schools within 1 mile of a park.

## Workflow

1. Add the target layer and the source (reference) layer to the map.
2. Open **Select By Location**.
3. Choose the target layer(s) to select features from.
4. Choose the spatial relationship (e.g., Intersect, Within a Distance, Contains).
5. Choose the source layer and, if needed, a search distance.
6. Apply the selection.
7. Export selected features.

## Practice task

Select a subset of features using at least two different spatial relationships (for example, Intersect and Within a Distance).

## Deliverable

Submit screenshots showing the spatial relationship used and the selected features, plus a short explanation of what your selection captured.

!!! note "Attributes vs. location"
    Select By Attributes asks questions about values in a table. Select By Location asks questions about where things are relative to each other. The two tools are often used together.
    
