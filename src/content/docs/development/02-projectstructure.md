---
title: Project Structure
description: Get to know how the project is structured
---

The project is a monorepo setup with 2 different projects under the main solution, the TimeManager.Backend (asp.net server) and PunchSystem (Blazor frontend).

### Punch System

The punch system frontend is a very simple Blazor based web application with a single page to host the form that takes the unique Id from the employee and sends it to the server via API call alongside the department Id.

### Server

95% of the project is inside this folder (project). It holds the server code as well as the content management panel for admins and employees.
