# Lesson 02b · Data Acquisition and Management

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
60 minutes</div>
<div markdown>**Skill level**
Beginner</div>
<div markdown>**Output**
Documented dataset and organized project</div>
</div>

## Learning goals

- Find authoritative data at the right geographic scale for a question.
- Evaluate a dataset's fitness before building analysis on it.
- Explain why some GIS formats break when files are moved individually.
- Record enough about a source that your work can be reproduced or defended.

## Key concepts

**Start as local as your question allows.** A city open data portal will usually hold more detail, and more recent updates, than a national dataset covering the same ground. Move up a scale only when the question forces you to, because breadth of coverage is generally paid for in resolution and currency. The [Data Resources table](../resources.md#data-resources) on the Resources page is organised on exactly this principle, from NYC through to global sources.

**Four questions decide whether a dataset is usable**, and they take about two minutes to answer:

1. **Who published it?** A government agency or university carries different weight from an anonymous re-upload of unclear provenance. Prefer the original publisher over a mirror.
2. **When was it last updated?** A five-year-old parcel layer is not a current parcel layer. Currency requirements vary: coastlines change slowly, business licences change weekly.
3. **What is it, exactly?** Read the metadata or data dictionary before the analysis, not after a result surprises you. Attribute names are frequently opaque and occasionally misleading.
4. **What are you allowed to do with it?** Public domain, a Creative Commons licence and "contact us for permission" are three different situations. Check before you build on it.

**Some GIS formats are several files pretending to be one.** A shapefile is a minimum of three files sharing a name and differing only in extension, `.shp`, `.shx` and `.dbf`, usually alongside `.prj` for the spatial reference and others. Move the `.shp` alone and you have moved a fragment. The `.prj` in particular is easy to leave behind, and its absence is exactly the missing-spatial-reference problem from Lesson 02. A file geodatabase is a folder that behaves as a database; copy the whole `.gdb` folder or none of it.

This is a strong argument for working in a geodatabase rather than in loose shapefiles. It travels as one object, enforces field types properly, does not truncate field names to ten characters, and does not carry the shapefile's other historical limitations.

**Separate what you downloaded from what you made.** Raw data is evidence and should never be edited in place. Processed data is your work and should be reproducible from the raw. Keeping them apart means you can always start again, and that you can always answer the question "where did this number come from".

## Common mistakes

- **Opening a CSV in Excel and saving it again.** Excel silently changes field types, drops leading zeros from identifiers and can reformat dates. This breaks joins later in ways that are hard to trace. Lesson 03d explains exactly how.
- **Downloading data without recording where it came from.** By the time someone asks, the portal has been redesigned and the link is dead. Record the URL and the date at the moment of download.
- **Trusting an attribute because its name sounds right.** A field called `POP` might be population, or a population estimate for a different year, or a percentage. Check the data dictionary.
- **Moving shapefile components individually.** Move all the files with the same base name, together, or use Catalog to copy the dataset rather than the operating system.

## Practice task

Acquire one dataset relevant to a project area you care about, from a source you can defend. Set up the folder structure from Lesson 01 and place the download in `data/raw/`.

Then write a short source note recording: the publisher, the URL, the download date, the coordinate system, the number of features, the last update date given by the publisher, and the licence.

Finally, examine the attribute table and identify at least one field whose meaning is not obvious from its name. Find out what it means and record that too.

## Deliverable

Submit:

- A screenshot of the map with your data added and drawing correctly.
- A screenshot of your folder structure.
- Your source note, covering all seven items above.
- One to two sentences on the ambiguous field: what you thought it meant, and what it actually means.
