
import React from 'react';
import type { DataEntry } from '../types';
import { TableIcon } from './common/Icons';

interface DataTableProps {
  entries: DataEntry[];
}

const DataTable: React.FC<DataTableProps> = ({ entries }) => {
  if (entries.length === 0) {
    return (
      <div className="text-center py-16 border-2 border-dashed border-border rounded-lg">
        <TableIcon className="mx-auto h-12 w-12 text-gray-500" />
        <h3 className="mt-2 text-lg font-medium text-text-secondary">No data entered yet</h3>
        <p className="mt-1 text-sm text-gray-500">Add a new entry using the form on the left.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-border">
        <thead className="bg-gray-700/50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Email</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider">Product</th>
            <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-text-secondary uppercase tracking-wider">Quantity</th>
          </tr>
        </thead>
        <tbody className="bg-surface divide-y divide-border">
          {entries.map((entry, index) => (
            <tr key={index} className="hover:bg-gray-700/60 transition-colors duration-200">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">{entry.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{entry.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">{entry.product}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary text-right">{entry.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
