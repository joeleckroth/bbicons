import React from 'react';

const DataIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <g transform="translate(2)" fill="none" fillRule="evenodd">
      <path 
        d="M2.824 1.927a2.07 2.07 0 0 0-1.467.607A2.067 2.067 0 0 0 .75 4v17.176a2.07 2.07 0 0 0 2.074 2.074h14.352a2.07 2.07 0 0 0 2.074-2.074V4a2.07 2.07 0 0 0-.607-1.466 2.067 2.067 0 0 0-1.467-.607Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
        <path d="M4.765 8.348h5.882" />
        <path strokeLinejoin="round" d="m12.647 9.258 1.544.827 1.456-2.977" />
      </g>
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
        <path d="M4.883 13.31h5.882" />
        <path strokeLinejoin="round" d="m12.765 14.22 1.544.826 1.456-2.977" />
      </g>
      <rect fill="currentColor" x="5.765" width="8.824" height="3.969" rx=".706" />
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
        <path d="M4.883 18.27h5.882" />
        <path strokeLinejoin="round" d="m12.765 19.18 1.544.828 1.456-2.977" />
      </g>
    </g>
  </svg>
);

export default DataIcon;