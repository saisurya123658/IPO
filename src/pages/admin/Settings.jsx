import { useState } from "react";

function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [showSaveNotification, setShowSaveNotification] = useState(false);

  const handleSave = () => {
    setShowSaveNotification(true);
    setTimeout(() => setShowSaveNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Save Notification */}
      {showSaveNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          ✅ Settings saved successfully!
        </div>
      )}

      {/* Admin Header */}
      <header className="bg-white shadow border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="/admin" className="text-2xl font-bold text-blue-600">
                IPO Hub Admin
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-600">Settings</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                🔔
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">AD</span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Admin User
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-8">
            <div className="px-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Main Menu
              </h3>
              <div className="mt-4 space-y-1">
                <a
                  href="/admin"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  📊 Dashboard
                </a>
                <a
                  href="/admin/ipos"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  🏢 IPO Management
                </a>
                <a
                  href="/admin/users"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  👥 User Management
                </a>
                <a
                  href="/admin/analytics"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  📈 Analytics
                </a>
                <a
                  href="/admin/content"
                  className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  📝 Content Management
                </a>
                <a
                  href="/admin/settings"
                  className="bg-blue-50 border-r-2 border-blue-600 text-blue-600 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                >
                  ⚙️ Settings
                </a>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Page Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Settings</h2>
            <p className="text-gray-600">
              Manage platform configuration and preferences
            </p>
          </div>

          {/* Settings Tabs */}
          <div className="bg-white rounded-lg shadow">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {[
                  { id: "general", label: "General", icon: "⚙️" },
                  { id: "security", label: "Security", icon: "🔒" },
                  { id: "notifications", label: "Notifications", icon: "🔔" },
                  { id: "integrations", label: "Integrations", icon: "🔗" },
                  { id: "appearance", label: "Appearance", icon: "🎨" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-6">
              {activeTab === "general" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      General Settings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Site Name
                        </label>
                        <input
                          type="text"
                          defaultValue="IPO Hub"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Site URL
                        </label>
                        <input
                          type="url"
                          defaultValue="https://ipohub.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Admin Email
                        </label>
                        <input
                          type="email"
                          defaultValue="admin@ipohub.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Timezone
                        </label>
                        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                          <option>UTC</option>
                          <option>EST</option>
                          <option>PST</option>
                          <option>GMT</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Site Description
                    </label>
                    <textarea
                      rows={3}
                      defaultValue="Your trusted partner for IPO investments and market insights."
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>

                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-3">
                      Platform Features
                    </h4>
                    <div className="space-y-3">
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Allow user registration
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Enable watchlist feature
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          defaultChecked
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Allow comments on articles
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">
                          Enable maintenance mode
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Security Settings
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Password Policy
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Require minimum 8 characters
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Require uppercase and lowercase letters
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Require numbers and special characters
                            </span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Two-Factor Authentication
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="2fa"
                              defaultChecked
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Optional for all users
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="2fa"
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Required for admin users
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="2fa"
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Required for all users
                            </span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Session Timeout (minutes)
                        </label>
                        <input
                          type="number"
                          defaultValue={60}
                          className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Failed Login Attempts
                        </label>
                        <div className="flex items-center space-x-4">
                          <span className="text-sm text-gray-600">
                            Lock account after
                          </span>
                          <input
                            type="number"
                            defaultValue={5}
                            className="w-20 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                          <span className="text-sm text-gray-600">
                            attempts
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "notifications" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Notification Settings
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-md font-medium text-gray-900 mb-3">
                          Email Notifications
                        </h4>
                        <div className="space-y-3">
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">
                              New user registrations
                            </span>
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">
                              New IPO submissions
                            </span>
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">
                              Content moderation required
                            </span>
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">
                              System errors and alerts
                            </span>
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </label>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-md font-medium text-gray-900 mb-3">
                          Push Notifications
                        </h4>
                        <div className="space-y-3">
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">
                              Weekly analytics report
                            </span>
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </label>
                          <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">
                              Daily activity summary
                            </span>
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Notification Email Template
                        </label>
                        <textarea
                          rows={4}
                          defaultValue="Hi {{name}},\n\nYou have a new notification from IPO Hub.\n\n{{message}}\n\nBest regards,\nIPO Hub Team"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">
                          Use {`{{name}}`} and {`{{message}}`} as placeholders
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "integrations" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Third-party Integrations
                    </h3>
                    <div className="space-y-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">
                              Google Analytics
                            </h4>
                            <p className="text-sm text-gray-600">
                              Track website analytics and user behavior
                            </p>
                          </div>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-green-600">
                              Enabled
                            </span>
                          </label>
                        </div>
                        <div className="mt-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tracking ID
                          </label>
                          <input
                            type="text"
                            defaultValue="GA-123456789-1"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">
                              Mailchimp
                            </h4>
                            <p className="text-sm text-gray-600">
                              Email marketing and newsletter management
                            </p>
                          </div>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-600">
                              Disabled
                            </span>
                          </label>
                        </div>
                        <div className="mt-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            API Key
                          </label>
                          <input
                            type="password"
                            placeholder="Enter Mailchimp API key"
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium text-gray-900">Slack</h4>
                            <p className="text-sm text-gray-600">
                              Real-time notifications and alerts
                            </p>
                          </div>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-green-600">
                              Enabled
                            </span>
                          </label>
                        </div>
                        <div className="mt-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Webhook URL
                          </label>
                          <input
                            type="url"
                            defaultValue="https://hooks.slack.com/services/..."
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "appearance" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Appearance Settings
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Theme
                        </label>
                        <div className="flex space-x-4">
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="theme"
                              defaultChecked
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Light
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="theme"
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Dark
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="radio"
                              name="theme"
                              className="text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Auto
                            </span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Primary Color
                        </label>
                        <div className="flex items-center space-x-4">
                          <input
                            type="color"
                            defaultValue="#2563eb"
                            className="w-16 h-10 rounded border border-gray-300"
                          />
                          <input
                            type="text"
                            defaultValue="#2563eb"
                            className="px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Logo Upload
                        </label>
                        <div className="flex items-center space-x-4">
                          <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 text-xs">Logo</span>
                          </div>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Upload New Logo
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Favicon
                        </label>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                            <span className="text-gray-400 text-xs">🌐</span>
                          </div>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Upload Favicon
                          </button>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-md font-medium text-gray-900 mb-3">
                          Layout Options
                        </h4>
                        <div className="space-y-3">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Show breadcrumbs
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              defaultChecked
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Enable sticky navigation
                            </span>
                          </label>
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">
                              Show footer social links
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Save Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-end space-x-4">
                  <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Reset to Defaults
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Settings;
