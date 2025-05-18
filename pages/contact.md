---
title: "Contact Me"
layout: "base.njk"
permalink: "/contact/index.html"
isLookingForJob: true # Easily switchable: true or false
---

<div class="contact-container">
  <h1 class="page-title">Contact Me</h1>
  
  <section class="contact-section">
    <h2>Current Status <span class="status-indicator {{ 'status-indicator--looking' if isLookingForJob else 'status-indicator--not-looking' }}"></span></h2>
    <div class="status-container">
      <p>I am currently open to new opportunities in software development, with a focus on full-stack web development. I'm particularly interested in roles that involve [REPLACE: your specific interests/technologies like React, Node.js, etc.].</p>
      
      <div class="action-buttons-container">
        <a href="/assets/documents/resume.pdf" class="resume-button action-button" target="_blank">
          <span class="button-icon">📄</span>
          Resume
        </a>
        <a href="#REPLACE-WITH-CALENDAR-LINK" class="calendar-button action-button" target="_blank">
          <span class="button-icon">📅</span>
          Quick Chat
        </a>
      </div>
    </div>
  </section>

  <section class="contact-section social-links-section">
    <div class="social-links">
        <a href="#REPLACE-LINKEDIN" target="_blank">LinkedIn</a> | 
        <a href="#REPLACE-GITHUB" target="_blank">GitHub</a> | 
        <a href="#REPLACE-YOUTUBE" target="_blank">YouTube</a> | 
        <a href="#REPLACE-X" target="_blank">X</a>
        <!-- Add other social links as needed -->
    </div>
  </section>

</div>
