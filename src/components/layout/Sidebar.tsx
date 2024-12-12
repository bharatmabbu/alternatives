import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Home,
  Database,
  Target,
  Files,
  FileType,
  PlaySquare,
  Tags,
  Settings,
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Database, label: 'Data Sources', path: '/sources' },
  { icon: Target, label: 'Data Targets', path: '/targets' },
  { icon: Files, label: 'Files', path: '/files' },
  { icon: FileType, label: 'Transformations', path: '/transformations' },
  { icon: PlaySquare, label: 'Jobs', path: '/jobs' },
  { icon: Tags, label: 'Metadata', path: '/metadata' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="flex items-center mb-8">
        <FileType className="w-8 h-8 mr-2 text-blue-400" />
        <h1 className="text-xl font-bold">DataTransform</h1>
      </div>
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-2 rounded-lg hover:bg-gray-700 transition-colors ${
                  location.pathname === item.path ? 'bg-gray-700' : ''
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;