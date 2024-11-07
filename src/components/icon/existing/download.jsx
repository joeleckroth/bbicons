import React from 'react';

const DownloadIcon = ({ stroke = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
    <g fill="none" fillRule="evenodd">
      <path d="M.98.064h18v18h-18z" />
      <path stroke={stroke} strokeWidth="1.125" strokeLinecap="round" d="M9.98 10.939v5.625" />
      <path d="M7.408 11.07c-8.866.056-5.73-8.179-1.179-7.069 0 0-.432-3.187 3.75-3.187s5.61 3.553 3.945 5.444c4.941-.318 4.941 3.1 3.37 4.352-.761.608-3.003.46-4.536.46" stroke={stroke} strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
      <path stroke={stroke} strokeWidth="1.125" strokeLinecap="round" d="m7.765 14.127 2.214 2.646 2.286-2.646" />
    </g>
  </svg>
);

export default DownloadIcon;
