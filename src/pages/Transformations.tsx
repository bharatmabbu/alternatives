import React from 'react';
import { Plus, FileType, Code, Clock } from 'lucide-react';
import type { Transformation } from '../types';

const mockTransformations: Transformation[] = [
  {
    transformationId: '1',
    transformationName: 'CSV to JSON Converter',
    description: 'Converts CSV files to JSON format with customizable options',
    script: 'convert_csv_to_json.py',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
  },
  {
    transformationId: '2',
    transformationName: 'Excel to Parquet',
    description: 'Transforms Excel files to Apache Parquet format',
    script: 'excel_to_parquet.py',
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02'),
  },
];

const Transformations = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Transformations</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          New Transformation
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockTransformations.map((transformation) => (
          <div
            key={transformation.transformationId}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FileType className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="ml-3 text-lg font-medium text-gray-900">
                  {transformation.transformationName}
                </h3>
              </div>
              <button className="text-gray-400 hover:text-blue-500">
                <Code className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">{transformation.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>
                  Updated {transformation.updatedAt.toLocaleDateString()}
                </span>
              </div>
              <button className="text-blue-600 hover:text-blue-800">
                Edit Script
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transformations;