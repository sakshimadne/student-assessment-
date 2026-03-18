# 🚀 CareerAI – Psychometric Career Assessment App

> A full-stack MERN application that helps students discover their **strengths, personality traits, and ideal career paths** using a structured psychometric assessment.

🌐 **Live Demo (Frontend):** https://student-assessmentt-app.netlify.app/  
⚙️ **Backend API:** https://student-assessment-5xux.onrender.com/  
📂 **GitHub Repo:** https://github.com/sakshimadne/student-assessment-

---

## ✨ Features

### 🧠 Psychometric Assessment
- Category-based questions (Analytical, Creative, Social, Leadership, Technical)
- Likert scale answers (1–5)
- Reverse scoring support
- Weighted scoring system

### 📊 Smart Results Dashboard
- Strength analysis by category
- Career recommendations based on scores
- Interactive charts using **Recharts**
- Insight-driven feedback

### 🔐 Authentication & Security
- JWT-based authentication
- Protected routes
- Role-based access (Admin/User)

### ⚙️ Admin Panel
- Add new assessment questions
- Manage categories and scoring logic

### 🎨 Modern UI/UX
- Responsive design
- Gradient + glassmorphism UI
- Smooth animations using **Framer Motion**

---

# 🏗️ Tech Stack

## Frontend
- React.js (Hooks + Functional Components)
- Tailwind CSS
- Framer Motion
- Recharts (Charts)
- Axios

## Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

## Deployment
- Frontend: Netlify
- Backend: Render

---

# 📁 Project Structure

## Frontend (`/frontend/src`)


src/
├── api/
│ ├── authApi.js
│ ├── axiosInstance.js
│ └── questionApi.js
│
├── components/
│ ├── assessment/
│ │ ├── OptionCard.jsx
│ │ ├── ProgressBar.jsx
│ │ └── QuestionCard.jsx
│ │
│ ├── common/
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ └── Input.jsx
│ │
│ └── layout/
│ ├── Navbar.jsx
│ └── ProtectedRoute.jsx
│
├── pages/
│ ├── admin/
│ │ └── AddQuestionPage.jsx
│ │
│ ├── assessment/
│ │ ├── AssessmentPage.jsx
│ │ └── CategoryPage.jsx
│ │
│ ├── auth/
│ │ ├── LoginPage.jsx
│ │ └── RegisterPage.jsx
│ │
│ ├── dashboard/
│ │ └── DashboardPage.jsx
│ │
│ └── result/
│ └── ResultPage.jsx
│
├── context/
│ ├── AuthContext.js
│ └── AuthProvider.jsx
│
├── hooks/
│ └── useAuth.js
│
├── utils/
│ └── constants.js
│
├── App.jsx
├── App.css
└── index.css


---

## Backend (`/backend`)


backend/
├── config/
│ └── db.js
│
├── controllers/
│ ├── authController.js
│ ├── assessmentController.js
│ └── resultController.js
│
├── middleware/
│ ├── authMiddleware.js
│ ├── adminMiddleware.js
│ └── errorMiddleware.js
│
├── models/
│ ├── User.js
│ ├── Question.js
│ ├── Result.js
│ └── TestSession.js
│
├── routes/
│ ├── authRoutes.js
│ ├── assessmentRoutes.js
│ └── resultRoutes.js
│
├── utils/
│ └── careerAlgorithm.js
│
└── server.js

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository
```bash
git clone https://github.com/sakshimadne/student-assessment-
cd student-assessment-
2️⃣ Backend Setup
cd backend
npm install

Create .env file:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000

Run backend:

npm run dev
3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🔑 API Endpoints
Auth

POST /api/auth/register

POST /api/auth/login

Questions

GET /api/questions

POST /api/questions/add (Admin)

Assessment

POST /api/questions/submit

Results

GET /api/results/my-result

GET /api/results/all (Admin)

🧠 Core Logic (Important)
Scoring System

Each question belongs to a category

Answers mapped to numeric values (1–5)

Reverse scoring supported

Scores aggregated per category

Career Recommendation

Based on highest scoring categories

Custom algorithm (careerAlgorithm.js)

Maps traits → careers

📊 Example Result
{
  "scores": {
    "analytical": 85,
    "creative": 70,
    "social": 60,
    "leadership": 75,
    "technical": 90
  },
  "recommendedCareers": [
    "Software Engineer",
    "Data Analyst",
    "Product Manager"
  ]
}
🚀 Deployment
Frontend (Netlify)

Connected GitHub repo

Auto deploy on push

Backend (Render)

Environment variables configured

Connected MongoDB Atlas

🎯 Key Highlights

✔ Full MERN architecture
✔ Real-world psychometric logic
✔ Clean scalable structure
✔ Data visualization (charts)
✔ Production deployment

🔮 Future Improvements

AI-based career explanation 🤖

PDF report download 📄

Multiple test modules

Advanced analytics dashboard

👩‍💻 Author

Sakshi Madne

GitHub: https://github.com/sakshimadne

LinkedIn: (Add your LinkedIn)
