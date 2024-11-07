import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';

const CodeBlock = ({ code }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
    script.async = true;
    document.body.appendChild(script);

    const markupScript = document.createElement('script');
    markupScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js';
    markupScript.async = true;
    document.body.appendChild(markupScript);

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(markupScript);
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  }, [code]);

  return (
    <pre className="rounded-lg text-sm overflow-x-auto">
      <code className="language-markup">{code}</code>
    </pre>
  );
};

const formatSVGCode = (code) => {
  // Initial cleanup
  let formatted = code.replace(/>\s+</g, '><').trim();
  
  // Add newlines and proper indentation
  let depth = 0;
  let result = '';
  let inTag = false;
  
  for (let i = 0; i < formatted.length; i++) {
    const char = formatted[i];
    
    if (char === '<' && formatted[i + 1] !== '/') {
      // Opening tag
      if (result) result += '\n';
      result += '  '.repeat(depth);
      depth++;
      inTag = true;
    } else if (char === '<' && formatted[i + 1] === '/') {
      // Closing tag
      depth--;
      if (result) result += '\n';
      result += '  '.repeat(depth);
      inTag = true;
    } else if (char === '>' && formatted[i - 1] === '/') {
      // Self-closing tag
      depth--;
      inTag = false;
    } else if (char === '>') {
      // End of tag
      inTag = false;
    }
    
    result += char;
  }
  
  // Cleanup any excessive newlines
  return result.replace(/\n\s*\n/g, '\n');
};

const CodeDialog = ({ isOpen, onClose, iconName, svgCode }) => {
  if (!svgCode) return null;

  const [copyStatus, setCopyStatus] = useState('Copy code');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(svgCode);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus('Copy code'), 2000);
    } catch (err) {
      setCopyStatus('Failed to copy');
      setTimeout(() => setCopyStatus('Copy code'), 2000);
    }
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 animate-fade-in" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-lg shadow-xl p-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-semibold">
              {iconName} Icon Code
            </Dialog.Title>
            <Dialog.Close className="text-gray-500 hover:text-gray-700">
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Dialog.Close>
          </div>
          
          <div className="bg-[#1e1e1e] p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <button 
                onClick={handleCopy}
                className="px-3 py-1 text-xs bg-gray-700 text-gray-200 rounded-full hover:bg-gray-600 transition-colors"
              >
                {copyStatus}
              </button>
            </div>
            <div className="overflow-x-auto">
              <CodeBlock code={formatSVGCode(svgCode)} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const IconWrapper = ({ children, iconName }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [svgCode, setSvgCode] = useState('');

  const handleClick = () => {
    const svgElement = document.querySelector(`#${iconName}-container svg`);
    if (svgElement) {
      setSvgCode(svgElement.outerHTML);
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div
              id={`${iconName}-container`}
              className="p-4 bg-gray-50 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={handleClick}
            >
              {children}
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-gray-800 text-white px-2 py-1 rounded text-sm z-50"
              sideOffset={5}
            >
              Click to view {iconName} icon code
              <Tooltip.Arrow className="fill-gray-800" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <CodeDialog 
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        iconName={iconName}
        svgCode={svgCode}
      />
    </>
  );
};

export default IconWrapper;