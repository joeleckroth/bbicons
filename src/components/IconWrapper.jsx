import React, { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

const Toast = ({ message, isVisible, onHide }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md shadow-lg animate-fade-in z-50">
      {message}
    </div>
  );
};

const IconWrapper = ({ children, iconName }) => {
  const [showToast, setShowToast] = useState(false);

  const handleCopy = () => {
    const svgElement = document.querySelector(`#${iconName}-container svg`);
    if (svgElement) {
      const svgCode = svgElement.outerHTML;
      navigator.clipboard.writeText(svgCode).then(() => {
        setShowToast(true);
      });
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
              onClick={handleCopy}
            >
              {children}
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="bg-gray-800 text-white px-2 py-1 rounded text-sm z-50"
              sideOffset={5}
            >
              Click to copy {iconName} icon code
              <Tooltip.Arrow className="fill-gray-800" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <Toast 
        message={`${iconName} icon code copied!`}
        isVisible={showToast}
        onHide={() => setShowToast(false)}
      />
    </>
  );
};

export default IconWrapper;