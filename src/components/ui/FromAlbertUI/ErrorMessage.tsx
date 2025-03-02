// src/components/Common/ErrorMessage.tsx

import React from 'react';

interface ErrorMessageProps {
  errors?: string[];
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ errors }) => {
  if (!errors || errors.length === 0) {
    return null;
  }

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <ul className="list-disc pl-5">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};
