import React from "react";

const Dashboard = () => {
  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-3xl font-bold text-blue-600">42</div>
          <p className="text-gray-500">Total Images</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-3xl font-bold text-blue-600">18</div>
          <p className="text-gray-500">Active Links</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-3xl font-bold text-blue-600">5</div>
          <p className="text-gray-500">Pending Updates</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-3xl font-bold text-blue-600">96</div>
          <p className="text-gray-500">Site Visits</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">
          Recent Activity
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li>✅ Updated homepage banner - 2 hours ago</li>
          <li>🔗 Added new product link - 5 hours ago</li>
          <li>📞 Changed contact information - Yesterday</li>
          <li>🖼️ Uploaded 3 new images - April 12</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
