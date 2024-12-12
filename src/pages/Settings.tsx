import React from 'react';
import {
  Settings as SettingsIcon,
  Bell,
  Lock,
  Mail,
  User,
  Globe,
} from 'lucide-react';

const settingsSections = [
  {
    title: 'Profile',
    icon: User,
    description: 'Manage your account settings and preferences',
  },
  {
    title: 'Security',
    icon: Lock,
    description: 'Update your password and security settings',
  },
  {
    title: 'Notifications',
    icon: Bell,
    description: 'Configure how you receive alerts and updates',
  },
  {
    title: 'Email',
    icon: Mail,
    description: 'Manage email preferences and notifications',
  },
  {
    title: 'API Access',
    icon: Globe,
    description: 'View and manage API keys and access tokens',
  },
];

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <SettingsIcon className="w-8 h-8 text-gray-900 mr-3" />
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settingsSections.map((section) => (
          <div
            key={section.title}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <section.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="ml-3 text-lg font-medium text-gray-900">
                {section.title}
              </h2>
            </div>
            <p className="text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;