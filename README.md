# 📝 Notepad PWA (Progressive Web App)

This is a **Notepad PWA** built with **HTML, CSS, JavaScript**, and **Webpack**, created back in high school as a scholarship project.  
It allows you to create, store, and delete notes locally using the browser's `localStorage` and works offline, thanks to service workers for caching assets.

---

## 🚀 Features

- **Create and manage notes**.
- **Persistent storage**: Your notes are saved in `localStorage` so they persist even after refreshing the page.
- **Offline support**: The app works even when you're offline, thanks to Service Workers caching essential assets.
- **Responsive UI**: Designed for both mobile and desktop experiences.

---

## 🛠️ Technologies Used

- **HTML5**: Structure of the app.
- **CSS3**: Styling the app interface.
- **Vanilla JavaScript**:
  - Managing note creation, deletion, and display.
  - Storing notes in the browser's `localStorage`.
  - Handling Service Workers for offline functionality.
- **Webpack**: Bundling and optimizing the code for production.
- **PWA (Progressive Web App)**: Making the app installable and functional offline.

---

## 📂 Project Structure

```
.
├── /dist/
│   ├── /img
│   ├── /js/
│   │   └── main.js
│   ├── /styles/
│   │   └── styles.css
│   ├── index.html
│   ├── manifest.json
│   └── sw.js
├── /src/
│   ├── app.js
│   └── index.js
├── webpack.config.js
└── package.json
```

---

## 📋 How to Use

### 1. Clone the repository:

```bash
git clone https://github.com/lilskywalkr/Notepad.git
cd Notepad
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Run the app in development mode:

```bash
npm run serve
```

### 4. Build for production:

```bash
npm run build
```

---

## 🔧 Key Features

### Notes Management

- **Create a New Note**: 
  - Enter text into the input field and click the "Add Note" button to create a new note.
  - The note is saved in **localStorage** so it persists even after a page reload.
  
- **Delete a Note**:
  - Click the "Delete" button (trash icon) next to any note to remove it from the UI and `localStorage`.

- **Mark a Note as Done**:
  - Click the "Done" button (check icon) to change the background color of the note to green and indicate that it is complete.

### Local Storage Integration

- Notes are stored persistently using the **localStorage** API.
  - Even after refreshing the page or reopening the app, your notes will remain saved.
  - The app manages notes with unique IDs and ensures that deleted notes are properly removed from both the UI and storage.

### Service Worker and PWA

- **Service Worker** (`sw.js`):
  - Caches essential files like HTML, CSS, JS, and images for offline use.
  - Ensures the app works even when there is no internet connection.
  
- **PWA (Progressive Web App)**:
  - Allows the app to be installed on your device and used offline.
  - The app has a `manifest.json` file, providing the metadata required to make the app installable.
  - You can access the app from your home screen after installing it, just like a native mobile app.

---


## 🖥️ A Bit of Backstory

This Notepad app was developed during high school as part of a scholarship project. The idea was to create a simple yet functional Progressive Web App (PWA) that mimicked the experience of using a basic notepad application, but with modern web technologies.

The project was built using **HTML**, **CSS**, **JavaScript**, and **Webpack**, and was a stepping stone into the world of Progressive Web Apps (PWA). The primary goal was to build something that could work offline, store notes persistently, and provide a smooth, app-like experience directly from the browser and mobiles devices.

At the time, the concept of service workers and offline-first web apps was still emerging, and this project helped me gain a solid understanding of the tools needed to bring web apps closer to native applications.

It’s been great looking back at this project and seeing how much the web development landscape has evolved since then. The PWA features, service workers, and local storage integration were innovative for me back then and continue to serve as foundational techniques for modern web development.

---

## 📝 Future Improvements

- Add categories or tags for organizing notes.
- Add a dark mode toggle for better readability.
- Support for attaching images or files to notes.

---

## 📱 Demo

You can try out the app live https://lilskywalkr.github.io/Notepad/

---

## Overview

