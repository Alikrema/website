---
title: My Lore
layout: base.njk
permalink: /lore/index.html
---

## My Lore

(This is where your engaging bio will go. Write a paragraph or two that introduces yourself, your core passions, and what drives you. You can touch on your journey from STEM to software, your love for teaching, and your podcast if you like, setting the stage for the detailed story below.)

## Life Milestones

<div class="timeline">
  {% from "timeline-item.njk" import timelineItem %}

{{ timelineItem(
    "2016",
    "Transformation (Event 1)",
    "<p>This is where everything started. This is where my life changed forever.</p>",
    "/assets/img/clean.jpeg",
    "Personal",
    "/assets/img/personal-icon.svg"
  ) }}

{{ timelineItem(
    "2016",
    "Transformation (Event 2)",
    "<p>Another key moment from this period that reshaped my perspective.</p>",
    "/assets/img/clean.jpeg",
    "Personal",
    "/assets/img/personal-icon.svg"
  ) }}

{{ timelineItem(
    "2016",
    "Transformation (Event 3)",
    "<p>A culminating experience from this transformative year.</p>",
    "/assets/img/stem-logo.png",
    "Personal",
    "/assets/img/stem-logo.png"
  ) }}

</div>
