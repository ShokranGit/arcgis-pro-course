# Lesson 08 · Introduction to Geospatial Programming

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
90 minutes</div>
<div markdown>**Skill level**
Intermediate</div>
<div markdown>**Output**
Working script and a reproducibility comparison</div>
</div>

## Learning goals

- Explain what scripting gives you that clicking does not, and where it is not worth the effort.
- Run geoprocessing tools through ArcPy and read the errors it returns.
- Set a workspace and use it to control where outputs land.
- Loop a tool over many inputs.
- Recognise when a workflow should be a script rather than a sequence of clicks.

## Key concepts

**Scripting is not about speed, it is about repeatability.** A script is a written record of exactly what was done, in order, with every parameter visible. It can be rerun on new data, corrected and rerun, handed to a colleague, or attached to a paper so a reviewer can check the method. A sequence of clicks leaves no such record, and six months later nobody can reconstruct which buffer distance was actually used.

The reasonable threshold: if you will do it more than about three times, if you must be able to prove what you did, or if the input will change and the analysis must be rerun, write it down as code.

**ArcPy exposes ArcGIS Pro's tools to Python.** Every tool in the Geoprocessing pane is available as a function, and the parameters are the same ones in the dialog, in the same order.

```python
import arcpy

arcpy.env.workspace = r"C:\gis\project\project.gdb"
arcpy.env.overwriteOutput = True

arcpy.analysis.Buffer("schools", "schools_800m", "800 Meters",
                      dissolve_option="ALL")
```

Two details in that snippet matter more than the tool call. The `r` before the path makes it a raw string, so Windows backslashes are not read as escape characters, which is the first error most people hit. And `env.workspace` sets the default location for inputs and outputs, so names can be used instead of full paths.

**The Python window is for trying things; a script file is for keeping them.** The window inside ArcGIS Pro runs against your open project, which makes it ideal for testing a single call. Once it works, move it into a `.py` file, because the window's history is not a deliverable.

**Loops are where the payoff arrives.** The same three lines that buffer one layer will buffer thirty:

```python
import arcpy

arcpy.env.workspace = r"C:\gis\project\project.gdb"

for fc in arcpy.ListFeatureClasses("schools_*"):
    arcpy.analysis.Buffer(fc, f"{fc}_800m", "800 Meters")
    print(f"buffered {fc}")
```

`ListFeatureClasses` returns what is in the workspace, so the script adapts to whatever is there rather than needing a hand-written list. The `print` is not decoration: when a loop runs for several minutes, output is the only evidence of progress, and it tells you which item failed when one does.

**Read the errors properly.** ArcPy raises `arcpy.ExecuteError` when a tool fails, and `arcpy.GetMessages(2)` returns why. Wrapping a loop in a try block means one bad input does not abandon the other twenty-nine:

```python
for fc in arcpy.ListFeatureClasses():
    try:
        arcpy.analysis.Buffer(fc, f"{fc}_buf", "500 Meters")
    except arcpy.ExecuteError:
        print(f"failed on {fc}: {arcpy.GetMessages(2)}")
```

**Automation does not fix a wrong method.** A script that runs a flawed analysis simply runs it flawlessly, thirty times, faster than before. Everything in Lesson 05 about checking record counts, coordinate systems and selections applies with more force here, because there is no map redrawing in front of you to make the mistake visible.

## Common mistakes

- **Unescaped Windows paths.** Use a raw string or forward slashes.
- **Forgetting `overwriteOutput`**, then getting a failure on the second run because the output already exists.
- **Assuming a tool succeeded because no error appeared.** Check the output exists and holds the expected number of records.
- **Silent loops.** Without printing, a failure part way through is invisible.
- **Scripting something you will do once.** The dialog is faster for genuinely one-off work.

## Practice task

Take a geoprocessing operation you already performed manually earlier in the course.

1. Reproduce it in the Python window as a single ArcPy call. Confirm the output matches what you produced by hand, by comparing record counts.
2. Move the code into a `.py` file, set the workspace explicitly, and run it again.
3. Extend it into a loop that runs over at least three input datasets, printing progress.
4. Break it deliberately, for example by pointing at a dataset that does not exist, and capture the error message ArcPy returns.

## Deliverable

Submit:

- Your final script, commented well enough that a classmate could run it.
- A screenshot of the console output from the loop.
- The error message from the deliberate failure, with one to two sentences on what it told you.
- Two to three sentences on where in this course scripting would have saved you time, and where it would not have been worth it.

!!! tip "Practise this"
    The [Intro to Geospatial Programming lab](../labs/intro-to-geospatial-programming.md) builds a working script step by step.
