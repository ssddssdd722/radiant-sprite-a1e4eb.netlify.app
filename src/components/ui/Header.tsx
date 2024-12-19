import React from 'react';
import { Link } from 'lucide-react';

export default function Header() {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <Link className="w-8 h-8 text-blue-600" />
      <h1 className="text-3xl font-bold text-gray-800">لوحة اختصار الروابط</h1>
    </div>
  );
}