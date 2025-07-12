import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../pages/Profile";
import Browse from "../pages/Browse";
import Swaps from "../pages/Swaps";
import AdminDashboard from "../pages/AdminDashboard";
import Explore from "../pages/Explore";
import Feedback from "../pages/Feedback";
import Home from "../pages/Home";
import UserProfile from "../pages/UserProfile";
import SwapRequestForm from "../pages/SwapRequestForm";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/browse" element={<Browse />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/feedback" element={<Feedback />} />
    <Route
      path="/user/:id"
      element={
        // <ProtectedRoute>
        <UserProfile />
        // </ProtectedRoute>
      }
    />

    <Route
      path="/swap-request/:userId"
      element={
        <ProtectedRoute>
          <SwapRequestForm />
        </ProtectedRoute>
      }
    />

    <Route
      path="/dashboard"
      element={
        // <ProtectedRoute>
        <Dashboard />
        // </ProtectedRoute>
      }
    />
    <Route
      path="/profile"
      element={
        // <ProtectedRoute>
        <Profile />
        // </ProtectedRoute>
      }
    />
    <Route
      path="/swaps"
      element={
        // <ProtectedRoute>
        <Swaps />
        // </ProtectedRoute>
      }
    />
    <Route path="*" element={<Login />} />
  </Routes>
);

export default AppRoutes;
