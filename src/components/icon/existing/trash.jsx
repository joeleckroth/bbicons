import React from 'react';

const TrashIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19" className={className}>
    <g transform="translate(.98 .064)" fill="none" fillRule="evenodd">
      <path d="M0 0h18v18H0z" />
      <path d="M17.438 2.063V4.61l-3.614 12.828H4.176L.562 4.61V2.062h16.875Z" stroke="currentColor" strokeWidth="1.125" />
      <rect fill="currentColor" x="6" width="6" height="2.25" rx=".75" />
      <path 
        stroke="currentColor" 
        strokeWidth="1.125" 
        strokeLinecap="round" 
        d="M.938 4.875H14.25m-8.25 12-1.5-9.75m4.5 9.75v-9.75m3 9.75 1.5-9.75" 
      />
    </g>
  </svg>
);

export default TrashIcon;