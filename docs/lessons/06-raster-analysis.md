# Lesson 06 · Raster Analysis

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
90 minutes</div>
<div markdown>**Skill level**
Intermediate</div>
<div markdown>**Output**
Suitability surface and documented criteria</div>
</div>

## Learning goals

- Explain what a raster cell represents, and why cell size governs what can be concluded.
- Distinguish continuous from discrete rasters and handle each appropriately.
- Derive slope, aspect and hillshade from an elevation model, and read what they mean.
- Reclassify continuous values onto a common scale so unlike criteria can be combined.
- Build a weighted suitability model and state its assumptions honestly.

## Key concepts

**A raster is a grid where each cell holds one value for the whole area it covers.** That is the essential compromise. A 30 metre cell reports one elevation for 900 square metres of ground that is not actually uniform. The value is usually a sample or an average, and everything smaller than the cell has been discarded before you ever opened the file.

**Cell size sets the ceiling on your conclusions.** With 30 metre cells you cannot say anything about a 10 metre feature; the data does not contain it. Resampling to 5 metre cells produces a smoother picture and no new information, which makes it a way to manufacture false precision. Match cell size to the question, and when combining rasters of different resolutions, remember that the coarsest input governs the meaningful resolution of the output no matter what the output cell size says.

**Continuous and discrete rasters behave differently.** Continuous rasters, such as elevation, temperature and slope, hold measured values where the arithmetic distance between them is meaningful, so averaging and interpolation make sense. Discrete rasters, such as land cover classes, hold codes standing for categories. Land cover class 41 is not larger than class 22, and averaging them produces a number that means nothing. Symbolize continuous rasters with a stretched or classified ramp, and discrete rasters with unique values.

**NoData is not zero.** Cells outside the data extent, or where the value is unknown, carry NoData, and it propagates: most operations return NoData wherever any input has it. This is correct behaviour, but it means a suitability surface can develop holes wherever a single criterion lacks coverage. Check the extent of every input before combining.

**Slope, aspect and hillshade are all derived from elevation**, each answering a different question. Slope gives steepness, in degrees or percent, and the two are not interchangeable: 45 degrees is 100 percent. Aspect gives the compass direction a slope faces, which matters for sun exposure, snowmelt and vegetation. Hillshade is a shaded relief image for display; it is not an analytical surface and should not be an input to a model.

**Suitability modelling is the payoff, and it is where assumptions hide.** The workflow is always the same shape:

1. **Choose criteria** that genuinely bear on the question.
2. **Reclassify each onto a common scale**, typically 1 to 5 or 1 to 9. This is the step that lets slope in degrees be combined with land cover categories, because both are converted to the same "how suitable is this" scale.
3. **Weight the criteria** if some matter more.
4. **Combine** with Weighted Overlay or raster algebra.
5. **Interpret**, remembering the output is a model of your assumptions, not a measurement of the world.

The reclassification thresholds are the model. Deciding that slope under 5 degrees scores 5 and slope over 20 scores 1 is a substantive claim about what counts as suitable, and it should be stated and defended, not buried in a tool dialog. Two analysts with the same data and different thresholds will reach different conclusions, and both can be right, provided they say what they assumed.

## Common mistakes

- **Averaging a discrete raster.** Land cover codes are labels, not quantities.
- **Combining criteria without reclassifying.** Adding slope in degrees to a land cover code produces a number with no meaning.
- **Ignoring NoData.** Holes in the output usually mean one input did not cover the study area.
- **Treating hillshade as data.** It is a picture of terrain, not a measurement of it.
- **Resampling to a finer cell size and believing the result.** Smoother is not more accurate.
- **Presenting a suitability surface as a finding.** It is the consequence of your weights and thresholds. Report them alongside it.

## Practice task

Using an elevation model and at least one other raster criterion:

1. Derive slope from the elevation model, and note whether you are working in degrees or percent.
2. Reclassify each criterion onto a 1 to 5 suitability scale. Write down the threshold you chose for every class and the reasoning behind it.
3. Combine the criteria into a suitability surface, weighting them if you judge that some matter more.
4. Re-run the model once with a materially different set of thresholds.

## Deliverable

Submit:

- Your reclassification table: every criterion, every class break, and a short justification for each.
- Both suitability surfaces, from the original and the altered thresholds.
- Four to six sentences on how much the result moved when the thresholds changed, and what that tells a reader about how much confidence the model deserves.

!!! tip "Practise these"
    [Surface Analysis](../labs/surface-analysis.md) covers slope, aspect and hillshade; [Map Algebra](../labs/map-algebra.md) and [Suitability Modeling](../labs/suitability-modeling.md) build the model itself.
