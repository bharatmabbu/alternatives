import React from 'react';
import { Plus, Database, Trash2, RefreshCw } from 'lucide-react';
import type { DataSource } from '../types';

const mockDataSources: DataSource[] = [
  {
    dataSourceId: '1',
    dataSourceType: 'S3',
    connectionString: 's3://my-bucket',
    location: '/data',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    dataSourceId: '2',
    dataSourceType: 'SFTP',
    connectionString: 'sftp://example.com',
    location: '/uploads',
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02'),
  },
];

const DataSources = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Data Sources</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add Data Source
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {mockDataSources.map((source) => (
              <div
                key={source.dataSourceId}
                className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Database className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {source.dataSourceType}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {source.connectionString}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-500 rounded-lg hover:bg-gray-100">
                      <RefreshCw className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-100">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <span className="ml-2 text-gray-900">{source.location}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Created:</span>
                    <span className="ml-2 text-gray-900">
                      {source.createdAt.toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataSources;