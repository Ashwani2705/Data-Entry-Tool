
import React from 'react';
import { FileSpreadsheetIcon } from './common/Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-surface shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <FileSpreadsheetIcon className="w-8 h-8 text-primary" />
        <h1 className="text-2xl font-bold ml-3 text-text-primary tracking-wide">
          CSV Data Entry Tool
        </h1>
      </div>
    </header>
  );
};

export default Header;
