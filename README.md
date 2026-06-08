# ⚽ Football League Manager

Interactive web application built with vanilla JavaScript that simulates a football league system. It allows users to register matches, manage teams and players, and automatically generate standings and statistics in real time.

---

## 🚀 Features

- Add football matches between teams
- Automatic creation of teams when registering matches
- Dynamic standings table (wins, draws, losses, points)
- Goals tracking (for and against)
- View match history by stadium
- Player management per team
- Interactive modal system for teams and stadium details

---

## 🧠 How it works

The application manages all data in memory using JavaScript arrays and objects.

- Teams are created dynamically when a match is added
- Match results automatically update team statistics
- Standings are recalculated based on accumulated points
- Matches can be grouped and analyzed by stadium
- Players are stored inside each team object

---

## 🛠️ Technologies used

- HTML
- CSS
- JavaScript

---

## 📸 Preview

### 1. Initial view (empty state)
![Initial view](https://github.com/user-attachments/assets/086461a3-e713-42bf-b064-1d6549f58369)


### 2. League with data loaded
![Initial view](https://github.com/user-attachments/assets/5af5a848-f21e-4219-9f3c-72f66a2f713a)


### 3. Team dashboard (players & stats)
![Initial view](https://github.com/user-attachments/assets/6f1e2029-df82-4964-91b5-e425c8646085)


### 4. Stadium dashboard (matches grouped)
![Initial view](https://github.com/user-attachments/assets/41ae91f0-545b-47c2-a4f5-5193141c1545)



Example view:
- Standings table with data
- Match list
- Team or stadium modal open

---

## 📁 Project structure

- index.html
- style.css
- /script
-  -teams.js
-  -matches.js
-  -players.js
-  -ui.js

---

## 🎯 Purpose

This project was built as a practice exercise to improve:

- JavaScript data structures
- State management in frontend applications
- DOM manipulation
- Event-driven programming
- Logical modeling of real-world systems

---

## 📌 Future improvements

- Add localStorage persistence
- Add ability to edit/delete matches and players
- Improve responsive design
- Add filters and search functionality
- Improve UI/UX styling

---
