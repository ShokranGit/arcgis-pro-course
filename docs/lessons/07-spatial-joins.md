# Lesson 07 · Spatial Joins

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
60–75 minutes</div>
<div markdown>**Skill level**
Intermediate</div>
<div markdown>**Output**
Two joined outputs and a written comparison</div>
</div>

## Learning goals

- Explain how a spatial join differs from a table join, and when each is the right tool.
- Choose a match option that matches the question being asked.
- Set a merge rule when several features match one, and justify the choice.
- Read an output table for unmatched records and implausible match distances.

## Key concepts

**A spatial join transfers attributes using location instead of a shared key.** Lesson 03d joined a health spreadsheet to counties because both held a county name. A spatial join needs no such field: it matches features because of where they are. This is what makes it powerful, and also what makes it quietly risky, because there is no key to check. Every feature will be assigned something, whether or not that assignment is meaningful.

**Target and join layer are not interchangeable.** The target layer keeps its own geometry and gains columns. The join layer contributes attributes and is otherwise discarded. Joining schools to districts gives you schools carrying district information, one row per school. Joining districts to schools gives you districts carrying school information, one row per district. Decide which features you want to end up with before you open the tool.

**The match option is the analytical decision.**

| Match option | Matches when | Use for |
| --- | --- | --- |
| Intersect | Features share any space | The general case for point-in-polygon |
| Within a distance | Features fall inside a stated radius | Access and proximity |
| Closest | Nearest feature, at any distance | When every target must get a value |
| Contains / Within | One feature wholly encloses the other | Strict containment |

**Intersect and Closest fail in opposite directions.** Intersect leaves unmatched records wherever nothing overlaps, which is honest but produces nulls you must handle. Closest always finds something, which feels tidier and is more dangerous: it will cheerfully match a rural clinic to a hospital 200 kilometres away and record it as the nearest, with no indication that the match is useless. Always output the distance field when using Closest, then examine its distribution. A join is only as meaningful as its largest plausible distance.

**When several features match one, a merge rule decides what happens.** Joining crime points to neighbourhoods means many points per polygon, and the tool must reduce them to one value per row. Count answers how many. Sum answers how much. Mean answers what is typical, and is the one that deserves scrutiny: the mean of a rate across features of very different sizes is not a rate, and the mean of a category code is nonsense. Choose the rule by asking what the resulting number is supposed to mean.

**One-to-one against one-to-many.** A one-to-one join produces a single row per target feature with the merge rule applied. A one-to-many join produces one row per matching pair, so the output has more rows than the target had features. The second is right when you need every pairing, and confusing for anyone who expected a count.

## Common mistakes

- **Reversing target and join layer.** The commonest error, and the output looks reasonable, so it survives review.
- **Using Closest without outputting distance.** You cannot tell a good match from an absurd one.
- **Leaving the merge rule at its default.** The default is rarely the right answer to your specific question.
- **Reading nulls as zeros.** An unmatched polygon has no data; it does not have zero. Mapping the two identically is a real error, not a cosmetic one.
- **Not checking the record count.** A one-to-many join that produced 4,000 rows from 300 features tells you something important about the data.

## Practice task

Using one target layer and one join layer:

1. Run a spatial join with the Intersect match option. Record the output row count and the number of unmatched features.
2. Run the same join with Closest, outputting the distance field. Record the row count, and the minimum, maximum and median match distance.
3. Where several features match one, run the join twice with two different merge rules, for example Count and Mean, and compare.

## Deliverable

Submit:

- Both output attribute tables, with record counts visible.
- The distance statistics from the Closest join, and one to two sentences identifying any match you consider implausible and why.
- Three to four sentences explaining which match option you would use for your question, and what the two merge rules told you differently.

!!! tip "Practise this"
    The [Spatial Join lab](../labs/spatial-join.md) works through this with schools and districts.

!!! note "Spatial join or table join?"
    If both datasets share an identifier, a table join is more precise and easier to verify. Reach for a spatial join when they share only location.
