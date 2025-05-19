---
title: "My Blog"
layout: "base.njk"
permalink: "/blog/index.html" # or just /blog/
---

<h1 class="page-title">My Blog</h1>

<div class="blog-list">
  {%- for post in collections.post | reverse -%}
    <article class="blog-list-item">
      <h2><a href="{{ post.url | url }}">{{ post.data.title }}</a></h2>
      <div class="post-meta">
        <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
        <span class="post-reading-time"> • {{ post.templateContent | readingTime }} read</span>
        {% if post.data.tags.length > 1 %}
          <span class="post-tags">
            {% for tag in post.data.tags %}
              {% if tag != "post" %}
                <span class="tag">{{ tag }}</span>
              {% endif %}
            {% endfor %}
          </span>
        {% endif %}
      </div>
    </article>
  {%- else -%}
    <p>Coming Soon...  I promise</p>
  {%- endfor -%}
</div>
