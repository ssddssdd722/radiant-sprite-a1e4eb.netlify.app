import React from 'react';
import Button from './ui/Button';
import { Copy } from 'lucide-react';

interface LinkOutputProps {
  links: string;
  onCopy: () => void;
}

export default function LinkOutput({ links, onCopy }: LinkOutputProps) {
  return (
    <div className="space-y-4">
      <label htmlFor="outputLinks" className="block text-right text-gray-700 mb-2">
        الروابط المختصرة
      </label>
      <textarea
        id="outputLinks"
        value={links}
        readOnly
        className="w-full h-48 p-4 bg-gray-50 border border-gray-300 rounded-lg resize-none"
        dir="rtl"
      />
      <Button onClick={onCopy} variant="secondary" icon={Copy}>
        نسخ جميع الروابط
      </Button>
    </div>
  );
}