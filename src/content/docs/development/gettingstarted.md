---
title: Getting Started
description: Follow these steps to get started with the development
---

To get started with the development of the project you can follow the steps mentioned below but before that you need to have following installed.

### Prerequisite

- Visual Studio with .NET core development kit
- SQL server management studio

### Steps

Get the source code from the “IT department” or get the code from Github (Though the code from Github might be bit behind)

Create an “.env” file inside the TimeManager.Backend folder (you can use .env.example for reference)

Update the data with your credentials.

Create the database in your SQL server with the correct name.

Migrate the tables to the database using the command `Update-Database` (if inside Visual studio’s Project Manager Console) or `dotnet ef database update` (inside any terminal where dotnet command is available)

(Optional but recommended) Configure the startup cycle of the project to start both the blazor frontend and asp.net server.
