import React from 'react';

const BellSolid = ({ stroke = '#000000' }) => (
  <svg viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path fill={stroke} d="M4 20.75h16c1.333-.5 2-1.417 2-2.75 0-1.75-1.75-2.75-1.75-2.75.387-1.007.5-2.077.5-3.25 0-6-3.5-9.25-8.75-9.25S3.25 6 3.25 12c0 1.157.205 2.25.582 3.244C3.5 15.25 2 16.5 2 18c0 1.333.667 2.25 2 2.75zm8 3.24c1.105 0 2-.902 2-2.015-1.17.017-2.977.025-4 0 0 1.113.895 2.015 2 2.015z" />
      <path stroke={stroke} d="M13.414 1.414a1.99 1.99 0 0 0-2.828 0" />
    </g>
  </svg>

);

export default BellSolid;






