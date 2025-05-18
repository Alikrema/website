---
title: My Lore
layout: base.njk
permalink: /lore/index.html
---

## Who I Am

(This is where your engaging bio will go. Write a paragraph or two that introduces yourself, your core passions, and what drives you. You can touch on your journey from STEM to software, your love for teaching, and your podcast if you like, setting the stage for the detailed story below.)

## My Journey: Weaving Through Chapters

(Here, you can have an optional introductory paragraph to your timeline/story, setting the tone.)

<div class="timeline">
  {% from "timeline-item.njk" import timelineItem %}

{{ timelineItem(
    "September 2016",
    "Transformation",
    "<p>Location: 6th of October City, Egypt</p><p>This is where everything started. This is where my life changed forever.</p>",
    "/assets/img/clean.jpeg",
    "Personal",
    "/assets/img/personal-icon.svg"
  ) }}

{{ timelineItem(
    "September 2016",
    "Transformation",
    "<p>Location: 6th of October City, Egypt</p><p>This is where everything started. This is where my life changed forever.</p>",
    "/assets/img/clean.jpeg",
    "Personal",
    "/assets/img/personal-icon.svg"
  ) }}

{{ timelineItem(
    "September 2016",
    "Transformation",
    "<p>Location: 6th of October City, Egypt</p><p>This is where everything started. This is where my life changed forever.</p>",
    "/assets/img/clean.jpeg",
    "Personal",
    "/assets/img/personal-icon.svg"
  ) }}

  <!-- More timeline items will be added here -->

</div>

<!-- More content can follow after the timeline -->
