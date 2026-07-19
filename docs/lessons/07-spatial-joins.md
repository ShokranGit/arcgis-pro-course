# Lesson 07 · Spatial Joins

## Learning goals

- Explain how a spatial join differs from an attribute join.
- Perform a spatial join based on intersecting features.
- Perform a spatial join based on proximity, or distance, rather than overlap.
- Interpret the resulting joined attribute table and identify unmatched or duplicated rows.
## Key concepts

A spatial join transfers attributes from one layer to another based on location rather than a shared key field. An intersect-based match joins features that physically overlap, while a distance-based match joins each feature to its nearest neighbor in the other layer, whether or not they touch.

The match option you choose changes the results: intersect can leave some features unmatched if nothing overlaps them, while a distance join always finds a match but may pair features that are quite far apart. Always check the output attribute table for unmatched rows or unexpectedly large distances.

## Workflow

1. Open the Spatial Join tool and choose your target and join layers.
2. Run a join using the intersect match option and review the output attribute table.
3. Repeat the join on the same layers using the closest distance match option.
4. Compare the two output tables, noting differences in row counts and matched distances.
## Practice task

Run two spatial joins on the same target layer: once using the intersect match option, and once using the closest distance match option. Compare the outputs.

## Deliverable

Submit both output attribute tables and a short paragraph explaining the difference in results between the two match options.
