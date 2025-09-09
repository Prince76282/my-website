import React from "react";

const Sidebar = ({ currentView, setCurrentView }) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "upload", label: "Image Upload", icon: "🖼️" },
    { id: "links", label: "Link Management", icon: "🔗" },
    { id: "content", label: "Content Management", icon: "📝" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="w-64 bg-gradient-to-br from-blue-600 to-cyan-400 text-white p-5 shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">Admin Panel</h1>
      <nav>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer transition ${
              currentView === item.id
                ? "bg-white/20 border-l-4 border-white"
                : "hover:bg-white/10"
            }`}
            onClick={() => setCurrentView(item.id)}
          >
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
