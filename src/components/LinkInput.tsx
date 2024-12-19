import React from 'react';

interface LinkInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function LinkInput({ value, onChange }: LinkInputProps) {
  return (
    <div>
      <label htmlFor="inputLinks" className="block text-right text-gray-700 mb-2">
        أدخل الروابط هنا، كل رابط في سطر منفصل
      </label>
      <textarea
        id="inputLinks"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        dir="rtl"
        placeholder="https://example.com"
      />
    </div>
  );
}