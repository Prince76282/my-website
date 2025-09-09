import React, { useState } from "react";

const LinkManagement = () => {
  const [links, setLinks] = useState([
    {
      id: 1,
      title: "Homepage",
      url: "https://example.com",
      category: "Navigation",
    },
    {
      id: 2,
      title: "Products",
      url: "https://example.com/products",
      category: "Navigation",
    },
    {
      id: 3,
      title: "About Us",
      url: "https://example.com/about",
      category: "Information",
    },
  ]);

  const [newLink, setNewLink] = useState({ title: "", url: "", category: "" });

  const handleAddLink = () => {
    if (newLink.title && newLink.url) {
      setLinks([...links, { ...newLink, id: Date.now() }]);
      setNewLink({ title: "", url: "", category: "" });
    }
  };

  const handleDeleteLink = (id) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">
        Link Management
      </h3>

      {/* Add New Link */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Link Title</label>
        <input
          type="text"
          value={newLink.title}
          onChange={(e) => setNewLink({ ...newLink, title: e.target.value })}
          className="w-full border rounded-lg p-2 mb-3"
          placeholder="Enter link title"
        />
        <label className="block font-medium mb-1">URL</label>
        <input
          type="text"
          value={newLink.url}
          onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
          className="w-full border rounded-lg p-2 mb-3"
          placeholder="Enter URL"
        />
        <label className="block font-medium mb-1">Category</label>
        <input
          type="text"
          value={newLink.category}
          onChange={(e) => setNewLink({ ...newLink, category: e.target.value })}
          className="w-full border rounded-lg p-2 mb-3"
          placeholder="Enter category"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={handleAddLink}
        >
          Add New Link
        </button>
      </div>

      {/* Existing Links */}
      <h4 className="font-semibold mb-3">Existing Links</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li
            key={link.id}
            className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            <div>
              <strong>{link.title}</strong> -{" "}
              <a
                href={link.url}
                className="text-blue-600"
                target="_blank"
                rel="noreferrer"
              >
                {link.url}
              </a>
              <div className="text-sm text-gray-500">
                Category: {link.category}
              </div>
            </div>
            <div className="space-x-2">
              <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => handleDeleteLink(link.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinkManagement;
