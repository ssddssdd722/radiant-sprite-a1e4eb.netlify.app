import React, { useState } from 'react';
import Header from './ui/Header';
import Button from './ui/Button';
import LinkInput from './LinkInput';
import LinkOutput from './LinkOutput';
import { shortenLinks, validateLinks } from '../utils/linkShortener';

export default function LinkShortener() {
  const [inputLinks, setInputLinks] = useState('');
  const [outputLinks, setOutputLinks] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleShortenLinks = async () => {
    setIsLoading(true);
    try {
      const validLinks = validateLinks(inputLinks);
      if (validLinks.length === 0) {
        alert('الرجاء إدخال روابط صالحة تبدأ بـ http:// أو https://');
        return;
      }
      const shortened = await shortenLinks(validLinks);
      setOutputLinks(shortened.join('\n'));
    } catch (error) {
      console.error('Error:', error);
      alert('حدث خطأ أثناء إنشاء الروابط المختصرة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputLinks);
      alert('تم نسخ الروابط المختصرة إلى الحافظة');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      alert('حدث خطأ أثناء نسخ الروابط');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <Header />
        
        <div className="space-y-6">
          <LinkInput value={inputLinks} onChange={setInputLinks} />
          
          <Button onClick={handleShortenLinks} disabled={isLoading}>
            {isLoading ? 'جاري المعالجة...' : 'إنشاء الروابط المختصرة'}
          </Button>

          {outputLinks && (
            <LinkOutput links={outputLinks} onCopy={copyToClipboard} />
          )}
        </div>
      </div>
    </div>
  );
}