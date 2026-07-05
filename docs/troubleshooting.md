# Troubleshooting

ArcGIS Pro errors often come from a small set of recurring issues. Start here before panicking. Panic is allowed, but only after checking file paths.

## Common issues

### My layer has a red exclamation mark

The data path is broken. ArcGIS Pro cannot find the source file.

**Fix:** Right-click the layer, repair the data source, and reconnect it to the correct file.

### My layers do not line up

This is often a coordinate system or projection issue.

**Fix:** Check the spatial reference of each layer and the map.

### My geoprocessing tool failed

Common causes include invalid geometry, wrong input type, locked files, missing output folder, or duplicate output names.

**Fix:** Read the error message, check inputs, and save outputs to a simple folder path.

### My exported map looks blurry

The export settings may be too low.

**Fix:** Export as PDF or PNG and increase resolution if needed.

### My selection query does not work

SQL syntax may be incorrect.

**Fix:** Check field names, operators, and quotes around text values.

```sql
BOROUGH = 'Brooklyn'
```

```sql
POPULATION > 100000
```
