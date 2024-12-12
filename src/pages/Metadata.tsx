import React from 'react';
import { Tags, Plus, Search } from 'lucide-react';
import type { Metadata } from '../types';

const mockMetadata: Metadata[] = [
  {
    metadataId: '1',
    fileId: '1',
    key: 'Author',
    value: 'John Doe',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    metadataId: '2',
    fileId: '1',
    key: 'Department',
    value: 'Sales',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
];

const Metadata = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Metadata</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Add Metadata
        </button>
      </div>

      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search metadata..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6">
          <div className="grid grid-cols-1 gap-4">
            {mockMetadata.map((meta) => (
              <div
                key={meta.metadataId}
                className="border rounded-lg p-4 hover:border-blue-500 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <Tags className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {meta.key}
                      </h3>
                      <p className="text-sm text-gray-500">{meta.value}</p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Edit
                  </button>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  Last updated: {meta.updatedAt.toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metadata;