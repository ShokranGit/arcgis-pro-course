# Lesson 03c · Tabular Data Management

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
60–75 minutes</div>
<div markdown>**Skill level**
Beginner to intermediate</div>
<div markdown>**Output**
Point feature class with a calculated field</div>
</div>

## Learning goals

- Turn a table of coordinates into a permanent point feature class.
- Choose an appropriate field type, and explain what goes wrong when you choose badly.
- Populate a field with the Field Calculator, including conditional logic.
- Recognise the ways a CSV can be damaged before it ever reaches ArcGIS Pro.

## Key concepts

**A table with coordinates is a map waiting to happen.** If a spreadsheet holds X and Y columns, ArcGIS Pro can plot it directly. The critical detail is that plotting produces a temporary **event layer**, not a dataset. It draws, it can be symbolized, and it disappears when the source table moves or the project closes. Export it to a feature class in your geodatabase and it becomes real: independently stored, editable, and usable by every geoprocessing tool.

You must also tell the software what the coordinates mean. Latitude and longitude values are not self-describing, and choosing the wrong spatial reference at import puts your points confidently in the wrong hemisphere.

**Field types are a decision, not a formality.** The type controls what can be stored, how values sort, what calculations are possible, and how much space is used.

| Type | Use for | Trap |
| --- | --- | --- |
| Text | Names, codes, identifiers | Sorts alphabetically, so "10" comes before "9" |
| Short / Long integer | Whole numbers, counts | Cannot hold decimals; division truncates |
| Float / Double | Measurements, rates, percentages | Small rounding differences are normal |
| Date | Dates and times | Requires a real date, not a string that looks like one |

**Identifiers belong in text fields, always.** A FIPS code, a ZIP code or a parcel number is a label made of digits, not a quantity. Stored as an integer, `06075` becomes `6075` and the leading zero is gone permanently. You will never add two ZIP codes together, so nothing is lost by storing them as text, and a great deal is preserved.

**The Field Calculator operates on every row at once.** It can copy values, do arithmetic across fields, manipulate strings, and apply conditional logic through Python expressions. Two habits make it safe: add the new field rather than overwriting an existing one, so the original survives if the expression is wrong; and if a selection is active, the calculation applies only to selected rows, which is a useful feature and an easy accident.

Deriving a rate is the standard case, and it carries the standard trap:

```python
!POPULATION! / !AREA_SQKM!
```

If both fields are integers, integer division may discard the remainder and every result will be a whole number. Store the target field as Double.

**Most CSV problems are inflicted before import.** Excel is the usual culprit: it strips leading zeros from identifiers, reformats anything resembling a date, and converts long numbers to scientific notation. Once saved, the damage is in the file. If you must inspect a CSV, open it in a text editor, or open it in Excel and close it without saving.

## Common mistakes

- **Stopping at the event layer.** If you have not exported, you do not have data.
- **Storing identifiers as numbers.** Leading zeros do not come back.
- **Calculating a rate into an integer field.** Every value becomes a whole number and the pattern disappears.
- **Forgetting an active selection.** Check the record count before calculating.
- **Assuming X is latitude.** X is longitude, Y is latitude. Swapping them puts North American data in the Indian Ocean, which at least is easy to spot.

## Practice task

Starting from a CSV containing coordinates and at least two numeric columns:

1. Import it, assign the correct spatial reference, and plot the points.
2. Export to a permanent feature class in your geodatabase.
3. Add a Double field and calculate a rate from two existing columns.
4. Add a Text field and populate it with a category label using conditional logic, for example high, medium or low against thresholds you choose and state.

## Deliverable

Submit:

- A screenshot of the attribute table showing both new fields populated, with the record count visible.
- The two Field Calculator expressions you used.
- Two to three sentences justifying the field type you chose for each new field, and the thresholds you set for the category.

!!! tip "Practise this"
    The [Attribute Table and Field lab](../labs/attribute-table-and-field.md) walks through this end to end.

!!! note "Do not re-save a CSV in Excel"
    It changes field types silently. The consequences usually appear later, during a join, when the cause is hardest to find.
