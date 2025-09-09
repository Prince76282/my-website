import React, { useState, useEffect } from "react";
import LoginForm from "../components/LoginForm";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import ImageUpload from "../components/ImageUpload";
import LinkManagement from "../components/LinkManagement";
import ContentManagement from "../components/ContentManagement";
import Settings from "../components/Settings";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentView, setCurrentView] = useState("dashboard");

  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");
    if (loggedIn === "true") setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("adminLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("adminLoggedIn");
  };

  if (!isLoggedIn) return <LoginForm onLogin={handleLogin} />;

  return (
    <div className="flex h-screen bg-gradient-to-br from-white via-yellow-50 to-orange-50">
      {/* Sidebar */}
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        className="bg-gradient-to-b from-orange-100 via-yellow-50 to-white border-r border-orange-200 shadow-md"
      />

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          onLogout={handleLogout}
          className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 text-white shadow-lg"
        />

        <main className="flex-1 overflow-y-auto p-6 bg-white/80 backdrop-blur-xl rounded-tl-3xl border-l border-yellow-200">
          {currentView === "dashboard" && <Dashboard />}
          {currentView === "upload" && <ImageUpload />}
          {currentView === "links" && <LinkManagement />}
          {currentView === "content" && <ContentManagement />}
          {currentView === "settings" && <Settings />}
        </main>
      </div>
    </div>
  );
};

export default Admin;
