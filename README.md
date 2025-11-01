# Community Skill Hub

## Overview
Community Skill Hub is a full-stack social learning platform designed to connect people who want to exchange skills and knowledge. The platform enables users to list their skills, specify what they wish to learn, and find matching partners through an intelligent matching algorithm. It promotes community-driven growth, collaboration, and real-world learning impact.

---

## Key Features
1. **User Profiles and Skills**  
   Each user can create a profile, add their skills, and specify new skills they want to learn.

2. **Skill Match System**  
   A backend algorithm that identifies users who can mutually benefit from each other’s skills.

3. **Private Chat / Video Call Placeholder**  
   Interface for one-on-one interaction and mentorship (placeholder for integration).

4. **Posts and Comments System**  
   Users can share insights, projects, or experiences and engage with others through comments.

5. **Badge System**  
   A gamified reward mechanism that grants badges when users help others or share valuable content.

6. **Admin Dashboard**  
   Administrative panel for managing reports, monitoring user activity, and ensuring a safe community environment.

---

## Tech Stack
- **Frontend:** React.js  
- **Backend:** Node.js + Express.js  
- **Database:** MongoDB (Mongoose)  
- **Architecture:** MVC (Model-View-Controller)  
- **Authentication:** JWT (JSON Web Token)  
- **Styling:** Tailwind CSS / CSS Modules

---

## Folder Structure
```
community-skill-hub/
│
├── README.md
├── package.json
├── .gitignore
├── server.js
│
├── config/
│   └── db.js
│
├── models/
│   ├── User.js
│   ├── Post.js
│   └── Report.js
│
├── routes/
│   ├── userRoutes.js
│   ├── postRoutes.js
│   ├── matchRoutes.js
│   └── adminRoutes.js
│
├── controllers/
│   ├── userController.js
│   ├── postController.js
│   ├── matchController.js
│   └── adminController.js
│
└── client/
    ├── package.json
    ├── public/
    │   └── index.html
    │
    └── src/
        ├── index.js
        ├── App.js
        └── components/
            ├── Navbar.jsx
            ├── ProfileCard.jsx
            ├── ChatUI.jsx
            ├── BadgeSystem.jsx
            ├── SkillMatch.jsx
            └── PostFeed.jsx
```

---

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/kareemmostafainc/community-skill-hub.git
   ```
2. Navigate into the project directory:
   ```bash
   cd community-skill-hub
   ```
3. Install dependencies for the backend:
   ```bash
   npm install
   ```
4. Move into the client directory and install frontend dependencies:
   ```bash
   cd client
   npm install
   ```
5. Return to the main directory and start the development servers:
   ```bash
   npm run dev
   ```

---

## Environment Variables
Create a `.env` file in the root directory and include:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## Future Enhancements
- Integration of real-time chat using WebSockets.  
- AI-based skill recommendation using NLP.  
- Integration of a live video call API.  
- Mobile application version with React Native.

---

## License
This project is licensed under the MIT License.

---

## Author
**Kareem Mostafa**  
Email: kareemmostafainc@gmail.com  
GitHub: [https://github.com/kareemmostafainc](https://github.com/kareemmostafainc)
