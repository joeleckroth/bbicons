import React from 'react';

const PeopleIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 25" className={className}>
    <g transform="translate(1)" fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <circle stroke="currentColor" strokeWidth="1.5" cx="12" cy="5" r="3.75" />
      <circle stroke="currentColor" strokeWidth="1.5" cx="4" cy="6" r="3" />
      <path 
        d="M5.5 12H3.55h0-.05a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1H4m14.5-10h2a3 3 0 0 1 3 3v6a1 1 0 0 1-1 1H20h0" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M10 12h4a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-8a3 3 0 0 1 3-3Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
      />
      <circle stroke="currentColor" strokeWidth="1.5" cx="20" cy="6" r="3" />
    </g>
  </svg>
);

export default PeopleIcon;