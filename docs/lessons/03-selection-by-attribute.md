# Lesson 03 · Selection by Attribute

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**  
60 minutes</div>
<div markdown>**Skill level**  
Beginner to intermediate</div>
<div markdown>**Output**  
Selected and exported features</div>
</div>

## Learning goals

- Open and read an attribute table.
- Use Select By Attributes.
- Build a simple SQL query.
- Export selected features into a new layer.

## Key concepts

Attribute tables store non-spatial information about spatial features. Selection by attribute allows you to ask questions using fields and values.

Example query logic:

```sql
POPULATION > 100000
```

```sql
BOROUGH = 'Queens'
```

## Workflow

1. Add a feature layer to the map.
2. Open the attribute table.
3. Identify useful fields.
4. Open **Select By Attributes**.
5. Build a query.
6. Apply the selection.
7. Export selected features.

## Practice task

Select a subset of features using at least two different attribute queries.

## Deliverable

Submit screenshots showing the query and selected features, plus a short explanation of what your query selected.

!!! note "SQL is picky"
    Text values usually need quotes. Numbers usually do not. SQL is not mean; it is just aggressively literal.
