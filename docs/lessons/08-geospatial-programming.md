# Lesson 08 · Introduction to Geospatial Programming

## Learning goals

- Understand why scripting is useful for GIS workflows.
- Identify the role of ArcPy within ArcGIS Pro.
- Run a simple geoprocessing tool from the Python window.
- Recognize opportunities to automate repetitive geoprocessing tasks.
## Key concepts

ArcPy is the Python site package that exposes ArcGIS Pro's geoprocessing tools to scripts. Anything you can do by clicking through a tool dialog can also be expressed as a line of Python, which makes it possible to repeat a task exactly, chain several tools together, or run an analysis across many input files without manual repetition.

The Python window in ArcGIS Pro gives you an interactive prompt inside the application itself, so you can test short pieces of code against your current project before saving them as a reusable script.

## Workflow

1. Open the Python window in ArcGIS Pro (View tab, or the icon at the bottom of the Catalog pane).
2. Import arcpy and confirm your current workspace.
3. Run a simple geoprocessing tool call from the Python window, such as a Buffer you've already performed manually.
4. Compare the scripted result to the version you built earlier through the GUI.
5. Save the script text for reuse.
## Practice task

Write and run a short script in the Python window that performs one geoprocessing operation you already completed manually earlier in the course.

## Deliverable

Submit your script text and a screenshot of its output in the Python window.
