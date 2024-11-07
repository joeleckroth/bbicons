import React from 'react';

const InfoIcon = ({ stroke = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h18v18H0z" />
      <circle stroke={stroke} strokeWidth=".844" cx="9" cy="9" r="8.578" />
      <g transform="translate(7.5 3.75)" fill={stroke} >
        <path d="M0 4.76c.906-1.043 1.631-1.564 2.175-1.564 1.087 0-.696 4.986-.816 5.478s0 .492.544.26c.184-.07.455-.244.815-.521C1.631 9.804.906 10.5.544 10.5c-.725 0-.453-2 .815-6 0-.348-.181-.435-.543-.26-.173.065-.445.24-.816.52Z" />
        <ellipse cx="2.039" cy="1.043" rx="1.087" ry="1.043" />
      </g>
    </g>
  </svg>
);

export default InfoIcon;

