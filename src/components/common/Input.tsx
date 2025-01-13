// src/components/Common/Input.tsx

import React from 'react';

interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export const Input: React.FC<InputProps> = ({ label, name, type = 'text', value, onChange, error, required = false }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${error ? 'border-red-500' : ''}`}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};