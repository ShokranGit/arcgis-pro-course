# Lesson 04 · Symbology and Map Design

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
75–90 minutes</div>
<div markdown>**Skill level**
Intermediate</div>
<div markdown>**Output**
Two classified maps and a written comparison</div>
</div>

## Learning goals

- Choose a classification method deliberately, and justify the choice against the data's distribution.
- Explain how the same values classified differently produce different conclusions.
- Select a colour scheme whose structure matches the structure of the data.
- Normalise a count before mapping it, and explain why raw counts mislead.
- Assemble a layout with the elements a reader needs to interpret it.

## Key concepts

**Classification is where the argument gets made.** Turning continuous values into a handful of classes requires deciding where the breaks fall, and those breaks determine what a reader sees. The same county health data can show a sharp divide or a gentle gradient depending on nothing but the method. This is not a flaw to be avoided; it is a choice to be made responsibly and disclosed.

| Method | How it breaks | Suits | Watch out for |
| --- | --- | --- | --- |
| Equal interval | Equal value ranges | Evenly spread data, familiar units like percentages | Skewed data piles into one class |
| Quantile | Equal count per class | Ranking, ensuring every class is visible | Puts breaks in arbitrary places; can split near-identical values |
| Natural breaks (Jenks) | Minimises within-class variance | Data with genuine clusters | Breaks differ between datasets, so maps are not comparable |
| Standard deviation | Distance from the mean | Showing deviation from typical | Requires roughly normal data; readers find it hard |
| Manual | Wherever you decide | Meaningful thresholds like a poverty line or a regulatory limit | Must be justified |

**Look at the histogram before choosing.** ArcGIS Pro shows the distribution in the Symbology pane. Skewed data with a long tail defeats equal interval. Data with visible clumps rewards natural breaks. Data with an externally meaningful threshold calls for manual breaks. Choosing without looking is guessing.

**Comparability is the argument for manual breaks.** If two maps are meant to be compared, side by side or across years, they must share a classification. Natural breaks recalculates per dataset, so the same colour means different values on each map, and the comparison is void.

**Never map a raw count on a polygon.** A choropleth of total population reproduces a map of how big the polygons are. Larger areas hold more of almost everything, so the pattern is geography, not the phenomenon. Normalise: divide by area for density, by population for a rate, or by a relevant total for a share. ArcGIS Pro has a Normalization field in the Symbology pane for exactly this. Counts belong in graduated symbols, where the mark size carries the value and area does not distort it.

**The colour scheme should mirror the data's structure.**

- **Sequential**, light to dark in one hue, for values running low to high.
- **Diverging**, two hues meeting at a neutral middle, for data with a meaningful midpoint such as change from zero or difference from an average.
- **Qualitative**, distinct hues of similar lightness, for categories with no order.

Using a diverging scheme on data with no midpoint invents a division that is not there. Using a rainbow on ordered data destroys the sense of progression, because the hues carry no inherent ranking. Around one in twelve men has some form of colour vision deficiency, so red-green pairs should be avoided; ArcGIS Pro's colourblind-safe ramps are a reliable default.

**A layout is a document, not a screenshot.** A reader who was not present needs: a title stating what is shown, where and when; a legend with intelligible class labels and units; a scale bar if distance matters; a north arrow if the orientation is not obvious; and a source credit naming the data and its date. Anything that does not help a reader interpret the map should be removed.

## Common mistakes

- **Accepting the default classification.** The software chose something so it could draw. That is not a finding.
- **Mapping counts on polygons.** Normalise, or use graduated symbols.
- **Too many classes.** Beyond about seven, readers cannot distinguish steps reliably. Five is often plenty.
- **Legend labels straight from the software.** `1023.4457 - 2891.2213` should read `1,000 to 2,900`, with units.
- **No source or date on the layout.** An undated map cannot be checked.

## Practice task

Take one numeric variable and produce two maps of it that support different impressions, using two different classification methods and nothing else changed. Record the class breaks each method produced.

Then normalise a raw count and map it both ways, once as the count and once as the rate, and compare the geographic patterns.

Build a finished layout for whichever map you consider the most honest, with title, legend, scale bar, north arrow and source.

## Deliverable

Submit:

- The two classification maps, with the class breaks listed for each.
- The count map and the normalised map.
- The exported layout.
- Four to six sentences: which classification you would publish and why, and what changed when you normalised.

!!! tip "Practise this"
    The [Cartographic Principles and Layout Design lab](../labs/data-classification-and-layout-design.md) covers classification, map elements and export step by step.
