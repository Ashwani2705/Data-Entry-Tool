
import React, { useState } from 'react';
import type { DataEntry } from '../types';
import Button from './common/Button';
import { PlusIcon } from './common/Icons';

interface DataEntryFormProps {
  onAddEntry: (entry: DataEntry) => void;
}

const DataEntryForm: React.FC<DataEntryFormProps> = ({ onAddEntry }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState<number | string>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !product || Number(quantity) <= 0) {
      // Basic validation
      alert('Please fill all fields correctly. Quantity must be positive.');
      return;
    }
    onAddEntry({
      name,
      email,
      product,
      quantity: Number(quantity),
    });
    // Reset form
    setName('');
    setEmail('');
    setProduct('');
    setQuantity(1);
  };

  const inputClass = "w-full bg-background border border-border rounded-md px-3 py-2 text-text-primary focus:ring-2 focus:ring-primary focus:border-primary outline-none transition duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1">Full Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="John Doe"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="john.doe@example.com"
          required
        />
      </div>
      <div>
        <label htmlFor="product" className="block text-sm font-medium text-text-secondary mb-1">Product</label>
        <input
          type="text"
          id="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className={inputClass}
          placeholder="e.g., Laptop Pro"
          required
        />
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-text-secondary mb-1">Quantity</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value ? Math.max(1, parseInt(e.target.value)) : '')}
          className={inputClass}
          min="1"
          required
        />
      </div>
      <Button type="submit" className="w-full">
        <PlusIcon className="w-5 h-5 mr-2" />
        Add Entry
      </Button>
    </form>
  );
};

export default DataEntryForm;
