---
title: "Contact Me"
layout: "base.njk"
permalink: "/contact/index.html"
isLookingForJob: true
---

<div class="contact-container">
  <h1 class="page-title">Contact Me</h1>
  
  <section class="contact-section">
    <h2>Status <span class="status-indicator {{ 'status-indicator--looking' if isLookingForJob else 'status-indicator--not-looking' }}"></span></h2>
    <div class="status-container">
      <p>Open for new SWE opportunities. My main interest is building scalable software with AI/LLM components. I believe this is where the most value is at the moment, and most importantly it’s what I have fun the most building.</p>
      
      <div class="action-buttons-container">
        <a href="/assets/documents/resume.pdf" class="resume-button action-button" target="_blank">
          <span class="button-icon">📄</span>
          Resume
        </a>
        <a href="https://calendly.com/alikrema2-0/quick-chat" class="calendar-button action-button" target="_blank">
          <span class="button-icon">📅</span>
          Quick Chat
        </a>
      </div>
    </div>
  </section>

  <section class="contact-section social-links-section">
    <div class="social-links">
        <a href="https://www.linkedin.com/in/ali-krema/" target="_blank">LinkedIn</a> | 
        <a href="https://github.com/Alikrema" target="_blank">GitHub</a> | 
        <a href="https://www.youtube.com/@alikrema5321" target="_blank">YouTube</a> | 
        <a href="https://x.com/alikrrema" target="_blank">X</a>
    </div>
  </section>

</div>
