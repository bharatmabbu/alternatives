import React from 'react';
import { Play, Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import type { Job } from '../types';

const mockJobs: Job[] = [
  {
    jobId: '1',
    fileId: '1',
    transformationId: '1',
    status: 'Running',
    startTime: new Date('2024-03-10T10:00:00'),
    logFileLocation: '/logs/job1.log',
    createdAt: new Date('2024-03-10T10:00:00'),
    updatedAt: new Date('2024-03-10T10:00:00'),
  },
  {
    jobId: '2',
    fileId: '2',
    transformationId: '2',
    status: 'Success',
    startTime: new Date('2024-03-10T09:00:00'),
    endTime: new Date('2024-03-10T09:05:00'),
    logFileLocation: '/logs/job2.log',
    createdAt: new Date('2024-03-10T09:00:00'),
    updatedAt: new Date('2024-03-10T09:05:00'),
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Running':
      return <Clock className="w-5 h-5 text-blue-500" />;
    case 'Success':
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case 'Failed':
      return <XCircle className="w-5 h-5 text-red-500" />;
    default:
      return <AlertCircle className="w-5 h-5 text-gray-500" />;
  }
};

const getStatusClass = (status: string) => {
  switch (status) {
    case 'Running':
      return 'bg-blue-100 text-blue-800';
    case 'Success':
      return 'bg-green-100 text-green-800';
    case 'Failed':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const Jobs = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Jobs</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
          <Play className="w-5 h-5 mr-2" />
          New Job
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="space-y-4">
            {mockJobs.map((job) => (
              <div
                key={job.jobId}
                className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(job.status)}
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClass(
                        job.status
                      )}`}
                    >
                      {job.status}
                    </span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    View Logs
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Started:</span>
                    <span className="ml-2 text-gray-900">
                      {job.startTime.toLocaleString()}
                    </span>
                  </div>
                  {job.endTime && (
                    <div>
                      <span className="text-gray-500">Completed:</span>
                      <span className="ml-2 text-gray-900">
                        {job.endTime.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;