# Lesson 05 · Geoprocessing

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
75–90 minutes</div>
<div markdown>**Skill level**
Intermediate</div>
<div markdown>**Output**
Documented multi-step workflow</div>
</div>

## Learning goals

- Choose the right tool for a question, particularly among the overlay tools that look similar.
- Read a tool's dialog well enough to predict its output before running it.
- Set geoprocessing environments, and explain what they silently change.
- Chain tools into a workflow whose result you can defend and reproduce.
- Diagnose a tool that succeeded but produced the wrong answer.

## Key concepts

**Every geoprocessing tool has the same anatomy:** inputs, parameters, an output, and environments. Inputs are the data. Parameters are the decisions. The output is a new dataset, because these tools do not modify inputs. Environments are settings applied across tools, including output coordinate system, processing extent and cell size. Environments are the ones that catch people out, because they change results without appearing anywhere in the dialog you are looking at.

**The core tools, and what actually distinguishes them.**

| Tool | Does | Reach for it when |
| --- | --- | --- |
| Buffer | Zone of a stated distance around features | Proximity, access, setbacks |
| Clip | Cuts one layer to another's boundary, keeping the first layer's attributes | You want a study area subset |
| Dissolve | Merges features sharing an attribute value | Aggregating tracts to counties |
| Intersect | Keeps only overlapping areas, combining attributes of both | You need where both conditions hold |
| Union | Keeps everything from both, splitting at overlaps | You need the full picture including non-overlap |
| Spatial Join | Transfers attributes by location, geometry unchanged | You want to enrich a layer, not reshape it |

**Clip against Intersect is the distinction most worth getting right.** Both cut geometry by another layer. Clip is a cookie cutter: output geometry is trimmed, and only the input layer's attributes come through. Intersect is analytical: output carries attributes from both layers, and every combination of overlapping features becomes its own record. If you want a subset, Clip. If you want to know what overlaps what, Intersect.

**Dissolve is how you change the unit of analysis**, and it is more consequential than it appears. Dissolving tracts into counties changes what a row means, and any statistic you had per tract must be re-derived, not carried over. Summing populations is valid. Averaging percentages is not, unless you weight them, because a percentage from a tract of 400 people cannot be averaged with one from a tract of 12,000 as though they were equivalent.

**Buffer distance is only as good as the coordinate system.** Same warning as Lessons 02 and 03b, and geoprocessing is where it does the most damage, because the output looks entirely convincing. Check units before buffering. Note also the dissolve option inside Buffer: leaving overlapping buffers separate double-counts anything that falls in two of them.

**Workflows should be reproducible.** Real analysis is a chain, and each step needs a name that says what it is. `schools_buffer_800m` survives a week away from the project; `schools_Buffer1` does not. Keep intermediate outputs until the work is finished. When a result surprises you, being able to inspect step three is the difference between finding the error and starting again.

## When a tool runs but the answer is wrong

The tool reporting success means it did what you asked. It says nothing about whether you asked the right thing.

1. **Check the output record count.** Wildly more records than expected usually means Intersect where you wanted Clip, or a one-to-many relationship you did not anticipate.
2. **Check for an active selection.** Tools operate on selected features when a selection exists. This silently narrows every input.
3. **Check the coordinate system and units**, especially after anything involving distance or area.
4. **Check the environments.** A processing extent set earlier in the session may still be clipping your outputs.
5. **Open the attribute table.** Nulls, zeros and duplicated rows are visible there and nowhere else.

## Common mistakes

- **Union when you meant Intersect.** Union keeps everything, so the output includes areas where only one layer is present.
- **Averaging rates after a Dissolve.** Weight them, or recompute from the underlying counts.
- **Overlapping buffers left undissolved**, then counting features inside them and double-counting.
- **Unnamed intermediate outputs.** `Buffer3` tells you nothing tomorrow.
- **Not checking the count before moving on.** Most geoprocessing errors are visible in a record count and invisible on the map.

## Practice task

Answer a question that needs at least three chained tools. For example: which schools lie within 800 metres of a park larger than two acres, and how many students does that represent.

Document each step: tool, inputs, parameters, output name, and output record count. Name every output meaningfully.

Then introduce one deliberate error, run the chain again, and record what changed and where you would have caught it.

## Deliverable

Submit:

- A workflow table with one row per step: tool, inputs, key parameters, output name, record count.
- A screenshot of the final map.
- Three to four sentences on the deliberate error: what you changed, what it did to the result, and which check would have caught it.

!!! tip "Practise these"
    Individual labs cover the tools one at a time: [Buffer](../labs/buffer.md), [Clip](../labs/clip.md), [Dissolve](../labs/dissolve.md) and [Overlay](../labs/overlay.md).
