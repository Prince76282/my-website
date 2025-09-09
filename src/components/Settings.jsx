import React, { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
  });

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-lg font-bold text-blue-600 mb-4 border-b pb-2">
        Settings
      </h3>

      <div className="mb-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) =>
              setSettings({ ...settings, notifications: e.target.checked })
            }
          />
          <span>Enable Notifications</span>
        </label>
      </div>

      <div className="mb-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={(e) =>
              setSettings({ ...settings, darkMode: e.target.checked })
            }
          />
          <span>Dark Mode</span>
        </label>
      </div>

      <div className="mb-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={settings.autoSave}
            onChange={(e) =>
              setSettings({ ...settings, autoSave: e.target.checked })
            }
          />
          <span>Auto Save Changes</span>
        </label>
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={handleSave}
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;
