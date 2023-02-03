import "./App.css";
// import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// components
import Layout from "./components/Layout/Layout";
// pages
import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

// MdAdminPanelSettings

// FaUserCircle
// FaRegUser

// AiFillEdit

// HiTrash

// icon for nav

// HiUsers

// TiUserAdd
function App() {
  return (
    // <Suspense fallback={<div>App...</div>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Welcome />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>

    // </Suspense>
  );
}

export default App;
