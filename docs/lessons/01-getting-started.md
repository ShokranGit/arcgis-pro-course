# Lesson 01 · Getting Started with ArcGIS Pro

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
45–60 minutes</div>
<div markdown>**Skill level**
Beginner</div>
<div markdown>**Output**
Saved ArcGIS Pro project</div>
</div>

## Learning goals

- Explain what an ArcGIS Pro project contains and why it is not simply a map file.
- Identify the ribbon, map view, Contents pane, Catalog pane and Geoprocessing pane, and say what each is for.
- Distinguish a layer from the data it draws, and explain why that distinction causes most beginner confusion.
- Set up a project folder that will still make sense in three months.

## Key concepts

**A project is a workspace, not a document.** An `.aprx` file holds maps, layouts, toolboxes, database connections, folder connections and layer symbology. What it does not hold is your data. This surprises people, and it is the source of the most common beginner failure: moving or renaming a folder after the project points at it, then reopening to find every layer broken with a red exclamation mark. The project stored a path, and the path no longer leads anywhere.

**A layer is a set of instructions for drawing data, not the data itself.** When you add a shapefile to a map you create a layer that says: read from this location, draw it in this colour, label it with this field, show it between these scales. Delete the layer and the shapefile is untouched. Delete the shapefile and the layer becomes a broken reference. Change the symbology and you have changed the instructions, not the values. Once this distinction is solid, a large amount of otherwise mysterious behaviour becomes obvious.

**Four panes do most of the work.**

| Pane | What it is for |
| --- | --- |
| Contents | What is in this map, in draw order, and how it is symbolized |
| Catalog | What exists on disk and in your databases, whether or not it is in a map |
| Geoprocessing | Finding and running tools |
| Map view | The map itself |

The distinction that matters is Contents against Catalog. Contents answers "what am I looking at". Catalog answers "what do I have". Beginners often hunt through Contents for a dataset they have not added yet.

**Folder structure is analysis infrastructure.** A predictable layout separates what you downloaded from what you made, which means you can always rebuild an output and never overwrite a source. A structure that works:

```
project-name/
  data/raw/        downloaded, never edited
  data/processed/  outputs you generated
  project.gdb      geodatabase for working feature classes
  exports/         maps and figures for submission
  project.aprx
```

## Common mistakes

- **Saving the project inside your Downloads folder.** It will be tidied away, and the project will break.
- **Working directly on files in `data/raw/`.** Once a source is edited you cannot tell what the original was.
- **Renaming or moving folders after the project points at them.** Repair broken links through the layer's source properties, and avoid the situation by settling the structure first.
- **Assuming a saved project saved your data.** Saving the project saves the instructions. Exported feature classes are what persist.

## Practice task

Create your course project using the folder structure above. Add one spatial layer from `data/raw/`. Then deliberately break it: close ArcGIS Pro, rename the folder holding your data, and reopen the project. Observe what happens in the Contents pane, then repair the link through the layer's properties.

## Deliverable

Submit:

- A screenshot showing the map, the Contents pane and the Catalog pane together.
- A screenshot of your folder structure.
- Two to three sentences describing what the Contents pane showed after you renamed the folder, and how you repaired it.

!!! tip "Why break it on purpose"
    Every GIS user meets the broken-link exclamation mark eventually. Meeting it now, deliberately, on a layer you do not care about, is much cheaper than meeting it the night before a deadline.
