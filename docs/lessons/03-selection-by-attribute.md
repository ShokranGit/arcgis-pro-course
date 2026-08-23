# Lesson 03 · Selection by Attribute

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
60 minutes</div>
<div markdown>**Skill level**
Beginner to intermediate</div>
<div markdown>**Output**
Exported subset and documented queries</div>
</div>

## Learning goals

- Write SQL queries against an attribute table, including compound conditions.
- Predict what `AND` and `OR` will return before running them.
- Handle null values, which do not behave like other values.
- Explain why a selection must be exported before it becomes a dataset.
- Debug a query that returns nothing, or returns everything.

## Key concepts

**Selection by attribute is asking a question of the table, not the map.** The geometry is irrelevant to the operation. You are filtering rows, and the map redraws to show which features those rows belong to. Everything that is true of querying a spreadsheet or a database is true here.

**The query language is SQL, and it is aggressively literal.** Three rules cover most of what goes wrong:

- Text values need quotes, numbers do not. `BOROUGH = 'Queens'` and `POPULATION > 100000`.
- Text comparison is exact, including case, spacing and punctuation. `'Queens'` does not match `'queens'` or `'Queens '`.
- Field names come from the table, not from what the column header displays. An alias can differ from the real field name.

**`AND` narrows, `OR` widens, and confusing them is the most common error in this lesson.** `AND` requires every condition to be true of the same row, so each additional condition can only reduce the result. `OR` requires any one condition, so each addition can only increase it. If a query returns nothing, suspect an `AND` that cannot be satisfied. If it returns everything, suspect an `OR` that is trivially true.

Compound conditions need parentheses to be unambiguous:

```sql
BOROUGH = 'Queens' AND (LANDUSE = 'Residential' OR LANDUSE = 'Mixed')
```

Without the parentheses the logic changes meaning entirely.

**Null is not zero and not an empty string.** Null means no value was recorded. It is not equal to anything, and it is not unequal to anything either, so `POPULATION > 0` silently excludes every null row and `POPULATION <= 0` excludes them too. Test for them explicitly with `IS NULL` or `IS NOT NULL`. When a count comes up short and the arithmetic seems right, nulls are the usual explanation.

**A selection is not a dataset.** Selected features are highlighted state in the current session. Clear the selection and it is gone. To turn a question into something you can analyse, symbolize or share, use **Export Features** to write the selected rows to a new feature class. This is the same principle as the temporary join in Lesson 03d: the working state and the persisted result are different things.

## Debugging a query that returns nothing

Work down the list in order.

1. Remove all conditions but one. If that returns rows, add the others back one at a time until it breaks.
2. Check for `AND` where you meant `OR`.
3. Check the field's actual values. Sort the column and look. Trailing spaces and inconsistent capitalisation are common in data entered by hand.
4. Check the field type. A number stored as text will not answer a numeric comparison.
5. Check for nulls.

## Common mistakes

- **Comparing against a value that does not exist in the data.** Look at the column before writing the query.
- **Forgetting the selection is still active.** Later tools operate on the selection, not the whole layer, which is either exactly what you wanted or a source of baffling results. Clear it deliberately.
- **Exporting without checking the count.** Confirm the number of exported features matches the number selected.

## Practice task

Build three queries against one layer:

1. A single-condition query.
2. A compound query using `AND`, and the same conditions using `OR`. Record both counts and explain the difference.
3. A query that isolates rows with null values in a field of your choice.

Export the result of the compound `AND` query to a new feature class.

## Deliverable

Submit:

- Each of the three queries as text, with the feature count each returned.
- Two to three sentences explaining why the `AND` and `OR` counts differ, referring to the specific data.
- A screenshot of the exported layer's attribute table, with the record count visible.

!!! tip "Practise this"
    The [Select by Attributes lab](../labs/select-by-attributes.md) applies this to a real dataset, click by click.

!!! note "SQL is picky"
    Text values usually need quotes. Numbers usually do not. SQL is not mean; it is just aggressively literal.
