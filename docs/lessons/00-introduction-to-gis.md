# Lesson 00 · Introduction to GIS and ArcGIS Pro

<div class="lesson-meta" markdown>
<div markdown>**Estimated time**
60–90 minutes</div>
<div markdown>**Skill level**
No prior experience needed</div>
<div markdown>**Output**
Written reflection and a working install</div>
</div>

## Learning goals

- Describe what GIS and GIScience are, and explain how the two differ.
- Place ArcGIS Pro in the wider ecosystem of GIS tools, and say what it is and is not good at.
- Identify spatial questions in your own field, and recognise questions that are not really spatial.
- Explain how a map's construction shapes what a reader concludes from it.
- Install ArcGIS Pro and confirm it launches and licenses correctly.

## Key concepts

**GIS and GIScience are not the same thing.** A Geographic Information System is software and technical practice: the thing you open, the tools you run, the files you manage. Geographic Information Science is the discipline underneath, concerned with how space can be represented at all, what is lost when you do, and what conclusions the representation will and will not support. You can be fluent in the software and still reach a wrong answer, because the interesting failures in this field are conceptual rather than technical. That is why this course keeps returning to why a tool works the way it does rather than only where its button is.

**Almost every dataset has a spatial dimension, but not every question is a spatial question.** "Which counties have the fewest physicians per capita" is answerable with a spreadsheet and a sort. It becomes a spatial question when you ask whether those counties are clustered, whether they sit far from the nearest hospital, or whether the pattern follows a highway corridor. The test is whether location, distance or adjacency does real work in the answer. Reach for GIS when it does, and be honest when it does not, because a map of something that did not need mapping is a decorative chart.

**ArcGIS Pro is one tool among several.** It is a desktop application with deep analytical toolboxes, strong cartographic output and an institutional licence most employers already hold. QGIS does much of the same work as free and open source software. PostGIS handles spatial data at a scale desktop software cannot. Python libraries such as GeoPandas suit repeatable, scriptable analysis. This course teaches ArcGIS Pro because it is what you are most likely to meet professionally, but the concepts transfer, and the concepts are the part worth carrying.

**Every map is an argument.** A map is not a photograph of the world. Somebody chose which features to include, how to classify the values, which colours to assign, which projection to use, and where to cut the frame. Each of those choices moves what a reader notices. The same county-level data, classified two different ways, can make a pattern look severe or negligible. This is not a warning about dishonest mapmakers; it is a description of what mapmaking is. The obligation is to make choices deliberately and to say what they were.

## Common mistakes

- **Treating the map as the analysis.** Producing a map is not the same as answering a question. State the question first, and be able to say what result would have changed your conclusion.
- **Accepting default classification.** The software has to pick something when it draws your data. Its default is a starting point, not a finding.
- **Skipping the licence check.** Every semester, people install successfully and discover in week three that their licence never activated. Confirm it now.

## Practice task

Two parts.

1. Find a published map in your own field of interest, from a news outlet, an agency or a journal. Identify one choice its makers made in data, classification, symbology or framing, and describe how a different choice would have changed the impression it gives.
2. Write down one question from your field that is genuinely spatial, and one that sounds spatial but is not. Say what distinguishes them.

## Deliverable

Submit:

- A screenshot showing ArcGIS Pro open, with your licence status visible.
- Five to eight sentences covering both parts of the practice task. Name the map you examined and link to it.

!!! tip "Do the install now"
    Licensing problems are slow to resolve because they usually involve someone else's IT department. Getting ArcGIS Pro launching cleanly this week protects the rest of the course.
