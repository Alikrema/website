---
title: My Lore
layout: base.njk
permalink: /lore/index.html
---

<div class="bio-section">
    <div class="bio-section__text">
        <h2>My Lore</h2>
        <p class="caption-text"><em>Scroll if you just wanna judge by career and tech work</em></p>
        <p>My life has followed a typical "gifted child" trajectory. I come from a working class family in Cairo, Egypt, was top of my class for years, and then joined a <strong> top-notch, cut-throat, hyphenated-adjective high school (STEM Schools) that led to an even-more-hyphenated-cutter-throat college (UPenn)</strong>, which lead to many challenges and self-exploration along the way. Soon enough, I learned the hard way that not all my childhood wiring — perfectionism, seeking external validation, etc. — was my real identity. And I've been trying to figure it out ever since.

Activities that bring me joy in life in no certain order:

- Teaching/Mentorship
- Coding
- Cooking
- Making Content (written/YT)
- Anything football-related
- Not writing CSS</p>
</div>
<div class="bio-section__image-container">
<img src="/assets/img/me-2.png" alt="A picture of me">
</div>
</div>

{% from "timeline-item.njk" import timelineItem %}

## Education

<div class="education-item">
    <div class="timeline-item__content">
        <div class="timeline-item__text-content">
            <div class="timeline-item__header">
                <h3 class="timeline-item__title">BSE Computer Science, Magna Cum Laude - University of Pennsylvania</h3>
            </div>
            <p class="timeline-item__date">2019 - 2023</p>
            <div class="timeline-item__description">
                <p>Graduated with a Bachelor of Science in Engineering, majoring in Computer Science. Focused on teaching and building software.</p>
                <h4>Key Achievements & Awards:</h4>
                <ul>
                    <li>UPenn '23 CIS Faculty Appreciation Award</li>
                    <li><a href="https://www.cis.upenn.edu/ta-information/ta-hall-of-fame/">Max Mintz TA Hall of Fame Inductee</a></li>
                    <li><a href="https://onsisawirisscholarship.com/">Onsi Sawiris Scholarship Recipient (2019)</a></li>
                </ul>
            </div>
        </div>
        <div class="timeline-item__image-container timeline-item__image-container--emblem">
            <img src="/assets/img/lore/penn.png" alt="BSE Computer Science, Magna Cum Laude - University of Pennsylvania - image" class="timeline-item__image">
        </div>
    </div>
</div>

## Experience & Ventures

<div class="timeline">
    {{ timelineItem(
        "July 2023 – May 2025",
        "Software Engineer @ <a href=\"https://www.aydi.com\">Aydi</a>",
        "<p>At <a href=\"https://www.aydi.com\">Aydi</a>, I designed and implemented scalable farm management solutions. Key projects include:</p>\n<ul>\n    <li>Developed an Inventory Management System, adopted by over 50% of clients for farm operations.</li>\n    <li>Built AydiAI, a full-stack text-to-SQL RAG solution for real-time farm data chat</li>\n    <li>Created an AI Onboarding tool using multimodal data entry to accelerate client setup.</li>\n    <li>Led the development of a conversational AI sales agent for WhatsApp.</li>\n    <li>Developed an LLM-powered agronomist agent with tool calling capabilities, connected to farm and field data to provide accurate agronomical plans and advice.</li>\n</ul>\n<p><em>Core Technologies: TypeScript, Nest.js, Node.js, AWS, SQL, Redis, React, Next.js, LLMs, RAG, VectorDBs.</em></p>",
        "",
        "",
        ""
    ) }}

    {{ timelineItem(
        "September 2024 – January 2025",
        "Founder & Mentor, US College Admissions Program",
        "<p>Developed an independent non-profit mentorship program to guide Egyptian high school students through the US college application process. In one admission cycle, I mentored a cohort of 9 students who collectively applied to over 100 universities. My approach was to offer the detailed, personalized support I wished I'd had. This involved conducting regular one-on-one sessions focused on: reviewing essays, deeply exploring the \"why\" behind their stories to shape compelling application narratives, tracking exam progress, and offering guidance for standardized testing, all contributing to a highly personalized application experience.</p>",
        "",
        "",
        ""
    ) }}

    {{ timelineItem(
        "July 2024 – September 2024",
        "Backend Development Course Instructor @ <a href=\"https://amit-learning.com/\">AMIT Learning</a>",
        "<p>Designed and delivered a comprehensive backend development course focused on Node.js and MongoDB to a diverse group of 14 students. Over three months, I conducted 17 interactive sessions, developed all course materials including a dedicated website and coding exercises, and provided detailed feedback to foster student growth. The course culminated in a hands-on workshop reinforcing practical application of concepts.</p>",
        "",
        "",
        ""
    ) }}

    {{ timelineItem(
        "January 2023 – May 2023",
        "Class Instructor, <a href=\"https://cis1950android.github.io//\">CIS1950: Intro to Android Development</a> @ University of Pennsylvania",
        "<p>Led a project-based Android Development course in Kotlin for 15 undergraduate students at the University of Pennsylvania. I developed the curriculum, covering UI Design, View Binding, MVVM Architecture, APIs, and RecyclerViews. My role involved conducting engaging weekly 90-minute interactive lectures and providing personalized support during office hours to help students with debugging and concept reinforcement.</p>",
        "",
        "",
        ""
    ) }}

    {{ timelineItem(
        "August 2021 – December 2022",
        "Teaching Assistant, <a href=\"https://www.cis.upenn.edu/~cis2400/22fa/\">CIS2400: Intro to Computer Systems</a> @ University of Pennsylvania",
        "<p>Supported over 500 students in understanding core concepts of C programming, CPU architecture, Assembly language, and Circuit Design. I led engaging 4-hour weekly review sessions and coding workshops, dedicated over 100 hours to personalized office hour support, and contributed to the creation and grading of course materials.</p>",
        "",
        "",
        ""
    ) }}

    {{ timelineItem(
        "April 2021 – December 2021",
        "Founder & Host, <a href=\"https://www.youtube.com/@overflowapodcast4070\">Overflow Podcast</a>",
        "<p>I launched the <a href=\"https://www.youtube.com/@overflowapodcast4070\">Overflow Podcast</a> to offer authentic, heartfelt guidance by sharing my personal experiences through high school and studying abroad. The goal was to challenge misconceptions, inspire listeners, and encourage self-reflection. Across 11 episodes, the podcast garnered over 7,000 views and cultivated a supportive online community. This journey taught me the profound impact of raw, genuine storytelling.</p>",
        "",
        "",
        ""
    ) }}

</div>
