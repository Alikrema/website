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
        <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>{% if post.data.readingTime %}<span class="post-reading-time"> • {{ post.data.readingTime }}</span>{% endif %}{% if post.data.tags.length > 1 %}<span class="post-tags">{% for tag_item in post.data.tags %}{% if tag_item != "post" %}<span class="tag">{{ tag_item }}</span>{% endif %}{% endfor %}</span>{% endif %}
      </div>
    </article>
  {%- else -%}
    <p>Coming Soon...  I promise</p>
  {%- endfor -%}
</div>
