# Lesson 03d · Table Joins

## Learning goals

- Explain what a table join does and when a dataset needs one.
- Choose a key field that will actually match, and recognise the field types that quietly break joins.
- Distinguish a one-to-one join from a one-to-many relationship, and know which tool each needs.
- Verify a join matched every record before building anything on top of it.
- Make a join permanent, and explain why that step is not optional.

## Key concepts

Most of the interesting data in the world is not spatial. Health statistics, census counts, election results, inspection records and school enrolments arrive as spreadsheets with no geometry at all. Meanwhile the boundaries you would want to map them on, counties, tracts, districts, arrive as shapefiles with almost no attributes beyond a name and an identifier. A table join is what marries the two: it attaches the columns of a non-spatial table to the attribute table of a spatial layer, using a value both of them already hold in common. Nothing moves and nothing is copied at first. The join simply tells ArcGIS Pro that row 47 of the spreadsheet belongs with polygon 47 on the map.

That common value is the **key field**. It is the whole basis of the operation, and choosing it well is most of the skill. A key field has to satisfy three conditions at once: it must exist in both tables, it must be unique in the table being joined, and it must be stored as the same data type on both sides. The first two are obvious once stated. The third is where joins usually fail, and it fails silently.

A join is also **temporary**. Until you export, what you are looking at is a live view, not a dataset. Close the project, or remove the source table, and the columns vanish. The map still looks right while you are working, which is exactly what makes this trap effective.

## Choosing a key field

Given a choice between a name and a code, most people reach for the code, because codes look more rigorous. In practice the code is often the riskier choice.

A FIPS code such as `31055` is a string of digits, but it is not a number. It is an identifier that happens to be spelled with digits, and the leading zeros matter: Alabama's state code is `01`, not `1`. When a CSV is read into ArcGIS Pro, an all digit column is interpreted as an integer, which drops the leading zero and changes the type. The shapefile, meanwhile, stores the same identifier as text. The join then compares `"31055"` against `31055`, finds no matches at all, and reports zero joined records with no error message. Opening the CSV in Excel and saving it again does the same damage, which is why the lab tells you not to.

County and place names are unambiguously text on both sides, which is why this course joins on names where it can. Names have their own hazard, of course: punctuation, abbreviations and spelling all have to agree exactly, and "St. Louis" will not match "Saint Louis". The general rule is to look at the actual values in both tables before you join, not to trust that a field with a promising name will behave.

## One-to-one and one-to-many

**Add Join** assumes one match per feature. Give it a join table where the key repeats, and it will attach the first matching row it encounters and quietly ignore the rest. If your spreadsheet holds three inspection records for the same restaurant, a join keeps one of them and discards two, without telling you which.

When the relationship is genuinely one-to-many, a join is the wrong tool. Use **Add Relate** instead, which preserves the full set of related records and lets you step through them from a selected feature, or summarise the many side first, one row per feature, and join that.

## Verifying the join

Do this every time, before you symbolize anything.

1. Open the attribute table and confirm the joined columns are present.
2. Check the record count. If the layer had 93 counties, 93 rows should now carry health data.
3. Sort a joined column ascending. Nulls collect at one end, and any unmatched features show up immediately as a block of empty cells.
4. If matches are missing, compare the two key fields directly: their data types first, then their actual values.

A join that matched 60 of 93 records is not a partial success. It is a map that will show 33 counties as having no data when the data exists, which is a more damaging error than a map that fails outright.

## Making it permanent

Once the join is verified, use **Export Features** to write a new feature class. The exported layer holds the joined columns as real fields of its own, independent of the source table. Symbolize, analyse and share from the exported layer, never from the live join.

## Common mistakes

- **Joining on a code rather than a name**, then not checking the match count when the types differ.
- **Symbolizing before verifying.** A partial join produces a map that looks finished and reports missing data as absence.
- **Leaving the join temporary.** Close the project and the columns are gone.
- **Using Add Join on a one-to-many table.** Records are discarded silently. Use Add Relate, or summarise first.
- **Re-saving the source CSV in Excel** after the join works, which changes the field types and breaks it again.

## Practice task

Join a non-spatial table to a boundary layer and verify the result. Then deliberately break it: change the key field on one side to a different data type, or introduce a mismatch in a handful of values, and observe what ArcGIS Pro reports. Note whether it warns you.

## Deliverable

Submit:

- A screenshot of the Add Join dialog showing your input field and join field.
- A screenshot of the joined attribute table, with the record count visible.
- Three to four sentences describing how you verified that every feature matched, and what happened when you broke the join on purpose.

!!! tip "Practise this"
    The [Table Join lab](../labs/table-join.md) applies all of this to Nebraska county health data, click by click, including the FIPS code trap described above.
