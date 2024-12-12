import React from 'react';
import { Activity, CheckCircle, XCircle, Clock } from 'lucide-react';

const stats = [
  {
    label: 'Active Jobs',
    value: '12',
    icon: Activity,
    color: 'text-blue-500',
    bg: 'bg-blue-100',
  },
  {
    label: 'Completed',
    value: '1,234',
    icon: CheckCircle,
    color: 'text-green-500',
    bg: 'bg-green-100',
  },
  {
    label: 'Failed',
    value: '23',
    icon: XCircle,
    color: 'text-red-500',
    bg: 'bg-red-100',
  },
  {
    label: 'Scheduled',
    value: '45',
    icon: Clock,
    color: 'text-purple-500',
    bg: 'bg-purple-100',
  },
];

const recentJobs = [
  {
    id: '1',
    name: 'CSV to JSON Conversion',
    status: 'Running',
    progress: 75,
    startTime: '2 minutes ago',
  },
  {
    id: '2',
    name: 'Excel to Parquet Transform',
    status: 'Completed',
    progress: 100,
    startTime: '15 minutes ago',
  },
  {
    id: '3',
    name: 'XML to JSON Transform',
    status: 'Failed',
    progress: 45,
    startTime: '1 hour ago',
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          New Transformation
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-lg shadow-sm space-y-2"
          >
            <div className="flex items-center space-x-2">
              <div className={`${stat.bg} p-2 rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <h2 className="text-lg font-semibold text-gray-700">
                {stat.label}
              </h2>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Jobs</h2>
        <div className="space-y-4">
          {recentJobs.map((job) => (
            <div
              key={job.id}
              className="border rounded-lg p-4 space-y-2"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">{job.name}</h3>
                <span className="text-sm text-gray-500">{job.startTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2"
                    style={{ width: `${job.progress}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {job.progress}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full ${
                    job.status === 'Running'
                      ? 'bg-blue-100 text-blue-700'
                      : job.status === 'Completed'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {job.status}
                </span>
                <button className="text-sm text-blue-500 hover:text-blue-600">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;