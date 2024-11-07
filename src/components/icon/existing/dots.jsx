import React from 'react';

const DotsIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <g fillRule="evenodd" fill="currentColor">
      <circle cx="2" cy="2" r="2"/>
      <circle cx="2" cy="10" r="2"/>
      <circle cx="2" cy="18" r="2"/>
    </g>
  </svg>
);

export default DotsIcon;