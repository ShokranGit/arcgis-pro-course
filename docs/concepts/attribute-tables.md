# Attribute Tables

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
45–60 minutes</div>
<div markdown>**Skill level**
Beginner</div>
<div markdown>**Output**
Documented table audit</div>
</div>

## Learning goals

- Describe what a row, a field and an ObjectID each represent.
- Distinguish a standalone table from a feature class, and explain what each can do.
- Handle nulls correctly, and explain why they are not zeros or blanks.
- Read a table critically enough to catch problems before they reach an analysis.

## Key concepts

**An attribute table is a database table with geometry attached.** One row per feature, one column per attribute. Everything true of a spreadsheet is true here, plus one thing: each row also owns a shape. That is the whole idea, and it is why GIS can answer questions neither a map nor a spreadsheet can answer alone.

**Every feature class has an ObjectID, and it is not yours.** ArcGIS Pro maintains it as a unique internal identifier. It is not a meaningful key, it is not stable across exports, and it should never be used to join datasets: export a layer and the ObjectIDs are renumbered. When you need a durable identifier, use one that comes from the data, such as a FIPS code or a parcel number, or create your own and populate it deliberately.

**A standalone table has no geometry.** A CSV or an Excel sheet added to a project is a table, not a layer. It appears in the Contents pane, it can be joined and summarised, and it cannot be symbolized or used in a spatial operation until it acquires geometry, usually by being plotted from coordinates or joined to something that has shapes. Lesson 03c covers making that conversion permanent.

**Field types constrain what a column can hold and what you can do with it.**

| Type | Holds | Watch out for |
| --- | --- | --- |
| Text | Anything, including digits | Sorts alphabetically: "10" before "9" |
| Short / Long integer | Whole numbers | Division truncates; no decimals |
| Float / Double | Decimals | Tiny rounding differences are normal |
| Date | Real dates and times | Not a string that looks like a date |

The recurring trap: identifiers made of digits belong in text fields. Stored as integers, `06075` becomes `6075` permanently, and every join against it fails.

**Null is a value meaning "no value was recorded", and it is not zero.** Zero is a measurement. An empty text string is a recorded emptiness. Null is absence. The distinction has real consequences: a null does not equal anything, including another null, so `POPULATION > 0` and `POPULATION <= 0` both silently exclude null rows. Test for them with `IS NULL`. When a count comes up short and the arithmetic looks right, nulls are usually why.

Mapping nulls as zeros is a substantive error rather than a cosmetic one. A county with no data and a county with a value of zero look identical on the map and mean opposite things.

**Reading a table critically takes five minutes and saves hours.** Before building anything on a dataset:

1. **Count the rows** and check it against what you expect. 93 counties in Nebraska, 62 in New York State.
2. **Sort each important column** ascending and descending. Outliers, nulls and sentinel values such as -9999 or 999999 surface immediately at the ends.
3. **Check for duplicates** in whatever field you intend to use as a key.
4. **Read the field names against the data dictionary.** A column called `POP` could be a count, an estimate for an unstated year, or a percentage.
5. **Look at the field types**, particularly for anything you plan to join or calculate on.

## Common mistakes

- **Joining on ObjectID.** It is not stable and does not mean anything.
- **Reading nulls as zeros**, then mapping them.
- **Trusting a field name.** Check the dictionary.
- **Missing sentinel values.** -9999 is a common code for "no data" and will wreck a mean if treated as a measurement.
- **Editing the only copy.** Add a field rather than overwriting one, so the original survives a mistaken calculation.

## Practice task

Audit one attribute table you did not create, working through the five checks above.

Then find at least one genuine problem in it: a null, a duplicate key, a sentinel value, a mis-typed field, or a field whose name misleads. Document what you found and what it would have done to an analysis that ignored it.

## Deliverable

Submit:

- Your audit: row count and expected count, the sorted extremes of two columns, the result of the duplicate check, and the field types.
- The problem you found, with a screenshot showing it.
- Two to three sentences on the specific analysis that problem would have broken, and how.

!!! tip "Where this is applied"
    Lesson 03 uses tables for [selection](../lessons/03-selection-by-attribute.md), Lesson 03c for [fields and calculation](../lessons/03c-tabular-data-management.md), and Lesson 03d for [joins](../lessons/03d-table-joins.md).
