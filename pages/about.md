---
title: My Lore
layout: base.njk
permalink: /lore/index.html
---

# About Me

Hello! This is my personal portfolio website, built with Eleventy.

I'm excited to share my projects and experiences here.

## My Lore - A Journey

<div class="timeline">
  {% from "timeline-item.njk" import timelineItem %}
  
  {{ timelineItem(
    "2010",
    "Early Beginnings",
    "<p>Started exploring the world of computers and code.</p>"
  ) }}

{{ timelineItem(
    "2015 - 2019",
    "University Studies",
    "<p>Graduated with a degree in Computer Science. This period included [mention a specific award or achievement if you like].</p>"
  ) }}

{{ timelineItem(
    "2020",
    "First Major Project",
    "<p>Launched my first significant software project, which taught me a lot about X, Y, and Z.</p>"
  ) }}

</div>

## My Skills

- Web Development
- Eleventy
- JavaScript
- (And more to come!)

You can find me on [GitHub](https://github.com) (replace with your actual GitHub link).
