import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreviewUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    alert(`Image "${selectedFile.name}" uploaded successfully!`);
    setSelectedFile(null);
    setPreviewUrl("");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">
        Image Upload
      </h3>

      <div className="mb-4">
        <label className="block font-medium mb-2">Select Image</label>
        <input
          type="file"
          accept="image/*"
          className="w-full border rounded-lg p-2"
          onChange={handleFileChange}
        />
      </div>

      {previewUrl && (
        <div className="mb-4">
          <img
            src={previewUrl}
            alt="Preview"
            className="rounded-lg shadow max-w-xs"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block font-medium mb-2">Image Title</label>
        <input
          type="text"
          className="w-full border rounded-lg p-2"
          placeholder="Enter image title"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">Image Description</label>
        <textarea
          className="w-full border rounded-lg p-2"
          placeholder="Enter image description"
          rows={3}
        />
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        onClick={handleUpload}
        disabled={!selectedFile}
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageUpload;
