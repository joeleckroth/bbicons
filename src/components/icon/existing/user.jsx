import React from 'react';

const UserIcon = ({ stroke = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <g transform="translate(.562 .562)" stroke={stroke} strokeWidth="1.125" fill="none" fillRule="evenodd">
      <circle cx="8.438" cy="8.438" r="8.438" />
      <circle cx="8.438" cy="5.438" r="2.813" />
      <path d="M4.688 15.376v-2.438a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 0 1 2.25 2.25v2.438h0" strokeLinecap="round" />
    </g>
  </svg>
);

export default UserIcon;

