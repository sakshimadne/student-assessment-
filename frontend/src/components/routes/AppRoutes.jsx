import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";
import DashboardPage from "../../pages/dashboard/DashboardPage";
import AssessmentPage from "../../pages/assessment/AssessmentPage";
import ResultPage from "../../pages/result/ResultPage";
import AddQuestionPage from "../../pages/admin/AddQuestionPage";
import ProtectedRoute from "../layout/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/assessment"
          element={
            <ProtectedRoute>
              <AssessmentPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <ResultPage />
            </ProtectedRoute>
          }
        />

        {/* Default */}
        <Route path="*" element={<LoginPage/>} />
<Route
  path="/admin/add-question"
  element={
    <ProtectedRoute role="admin">
      <AddQuestionPage />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;