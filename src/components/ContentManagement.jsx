import React, { useState } from "react";

const ContentManagement = () => {
  const [content, setContent] = useState({
    title: "Welcome to Our Website",
    description:
      "This is a sample description that can be edited in the admin panel.",
    footerText: "© 2023 My Website. All rights reserved.",
  });

  const handleSave = () => {
    alert("Content saved successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">
        Content Management
      </h3>

      <div className="mb-4">
        <label className="block font-medium mb-2">Site Title</label>
        <input
          type="text"
          className="w-full border rounded-lg p-2"
          value={content.title}
          onChange={(e) => setContent({ ...content, title: e.target.value })}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">Site Description</label>
        <textarea
          className="w-full border rounded-lg p-2"
          rows={3}
          value={content.description}
          onChange={(e) =>
            setContent({ ...content, description: e.target.value })
          }
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">Footer Text</label>
        <input
          type="text"
          className="w-full border rounded-lg p-2"
          value={content.footerText}
          onChange={(e) =>
            setContent({ ...content, footerText: e.target.value })
          }
        />
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={handleSave}
      >
        Save Changes
      </button>
    </div>
  );
};

export default ContentManagement;
