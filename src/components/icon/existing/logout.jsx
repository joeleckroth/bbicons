import React from 'react';

const LogoutIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" className={className}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h18v18H0z" />
      <path 
        d="M6.75 5.563v-4.25c0-.311.252-.563.563-.563h9.375c.31 0 .562.252.562.563v15.374a.563.563 0 0 1-.563.563H7.313a.562.562 0 0 1-.562-.563v-4.25h0M1.875 9.011h9.75" 
        stroke="currentColor" 
        strokeWidth=".844" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        stroke="currentColor" 
        strokeWidth=".844" 
        strokeLinecap="round" 
        d="M4.585 5.625 1.11 9.011l3.382 3.364" 
      />
    </g>
  </svg>
);

export default LogoutIcon;