---
title: My Lore
layout: base.njk
permalink: /lore/index.html
---

<div class="bio-section">
    <div class="bio-section__text">
        <h2>My Lore</h2>
        <p>(This is where your engaging bio will go. Write a paragraph or two that introduces yourself, your core passions, and what drives you. You can touch on your journey from STEM to software, your love for teaching, and your podcast if you like, setting the stage for the detailed story below.)</p>
    </div>
    <div class="bio-section__image-container">
        <img src="/assets/img/me-2.png" alt="A picture of me">
    </div>
</div>

{% from "timeline-item.njk" import timelineItem %}

## Education & Key Achievements

{{ timelineItem(
    "2019 - 2023",
    "BSE Computer Science, Magna Cum Laude - University of Pennsylvania",
    "<p>Graduated with a Bachelor of Science in Engineering, majoring in Computer Science. Focused on [mention 1-2 key areas if desired, e.g., software engineering, AI].</p>\n    <h4>Key Achievements & Awards:</h4>\n    <ul>\n        <li>UPenn '23 CIS Faculty Appreciation Award</li>\n        <li>UPenn '23 CIS TA Hall of Famer</li>\n        <li>Onsi Sawiris Scholarship Recipient (2019)</li>\n    </ul>",
    "/assets/img/lore/penn.png",
    "",
    "",
    "timeline-item__image-container--emblem"
) }}

## Experience & Ventures

<div class="timeline">
    {{ timelineItem(
        "July 2023 - May 2025",
        "Software Engineer @ Aydi",
        "<p>Description of your role and achievements at Aydi.</p>",
        "",
        "Work",
        ""
    ) }}

    {{ timelineItem(
        "September 2024 - January 2025",
        "Mentor, US College Applications",
        "<p>Details about your mentorship role for 9 students.</p>",
        "",
        "Mentorship",
        ""
    ) }}

    {{ timelineItem(
        "June 2024 - September 2024",
        "Backend Course Instructor",
        "<p>Description of your role as a backend course instructor.</p>",
        "",
        "Teaching",
        ""
    ) }}

    {{ timelineItem(
        "January 2023 - May 2023",
        "Class Instructor @ University of Pennsylvania",
        "<p>Details about your role as a class instructor.</p>",
        "",
        "Teaching",
        ""
    ) }}

    {{ timelineItem(
        "August 2021 - December 2022",
        "Teaching Assistant @ University of Pennsylvania",
        "<p>Details about your TA responsibilities.</p>",
        "",
        "Teaching",
        ""
    ) }}

    {{ timelineItem(
        "April 2021 - December 2021",
        "Founder & Host, Overflow Podcast",
        "<p>11 Episodes, ~8000 views. More details about the podcast.</p>",
        "",
        "Project",
        ""
    ) }}

</div>
