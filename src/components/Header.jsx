import React from "react";

const Header = ({ onLogout }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg">
      <h2 className="text-xl font-bold text-blue-600">Admin Dashboard</h2>
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold">
          A
        </div>
        <span>Admin</span>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
