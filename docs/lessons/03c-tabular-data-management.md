# Lesson 03c · Tabular Data Management

## Learning goals

- Create and import a CSV table into ArcGIS Pro.
- Convert tabular X/Y data into point features and save them as a permanent feature class.
- Add a new field to an attribute table and choose an appropriate field type.
- Use the Field Calculator to populate a field based on other attributes.
## Key concepts

Tabular data underlies most GIS analysis. A CSV with X/Y coordinates or addresses can become a point layer, and once it's a real feature class (not just a temporary XY event layer) it behaves like any other spatial dataset.

Fields have types (text, short integer, double, date, and so on), and choosing the right type matters for calculations and for how values sort and display. The Field Calculator lets you populate a field using expressions, math, or string operations across every row at once.

## Workflow

1. Prepare a CSV file with valid X/Y coordinate fields (or a full address field).
2. Import the CSV into ArcGIS Pro and use Display XY Data to create a point event layer.
3. Export the event layer to a permanent feature class in your geodatabase.
4. Add a new field to the feature class's attribute table.
5. Use the Field Calculator to populate the new field based on existing attributes.
## Practice task

Build a point layer from a CSV file and calculate a new derived field (for example, a category label or a value computed from two existing columns).

## Deliverable

Submit a screenshot of the attribute table showing the new field and its calculated values.
