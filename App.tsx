
import React, { useState, useCallback, useEffect } from 'react';
import type { DataEntry } from './types';
import type { ToastInfo } from './types';
import Header from './components/Header';
import DataEntryForm from './components/DataEntryForm';
import DataTable from './components/DataTable';
import Button from './components/common/Button';
import { DownloadIcon } from './components/common/Icons';
import Toast from './components/common/Toast';

declare const Papa: any;

const App: React.FC = () => {
  const [dataEntries, setDataEntries] = useState<DataEntry[]>([]);
  const [toast, setToast] = useState<ToastInfo | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type });
  };

  const handleAddEntry = useCallback((entry: DataEntry) => {
    setDataEntries(prevEntries => [...prevEntries, entry]);
    showToast('Entry added successfully!', 'success');
  }, []);

  const handleDownloadCsv = useCallback(() => {
    if (dataEntries.length === 0) {
      showToast('No data to download.', 'info');
      return;
    }
    
    try {
      const csv = Papa.unparse(dataEntries);
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'data_entries.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('CSV file downloaded.', 'success');
    } catch (error) {
      console.error("Failed to generate CSV:", error);
      showToast('Failed to download CSV.', 'error');
    }
  }, [dataEntries]);
  
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-surface rounded-lg shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold mb-4 text-text-primary">Add New Entry</h2>
              <DataEntryForm onAddEntry={handleAddEntry} />
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-lg shadow-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-text-primary">Data Preview</h2>
                <Button 
                  onClick={handleDownloadCsv} 
                  disabled={dataEntries.length === 0}
                >
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Download CSV
                </Button>
              </div>
              <DataTable entries={dataEntries} />
            </div>
          </div>
        </div>
      </main>
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
};

export default App;
