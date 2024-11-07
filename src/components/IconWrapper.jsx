import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';

const CodeDialog = ({ isOpen, onClose, iconName, svgCode }) => {
  if (!svgCode) return null;

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
          <div className="bg-gray-50 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto whitespace-pre-wrap break-all">
              {svgCode}
            </pre>
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