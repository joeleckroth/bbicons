import React from 'react';

const AIIcon = ({ stroke = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path stroke={stroke} d="M4.55 16 8 8l3.451 8M16 16V8m-2.5 8h5m-5-8h5" />
      <circle cx="8" cy="16" r="1" fill={stroke} />
    </g>
  </svg>

);

export default AIIcon;



