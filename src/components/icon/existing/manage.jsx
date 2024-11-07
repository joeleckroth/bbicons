import React from 'react';

const ManageIcon = ({ stroke = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
    <g transform="translate(.813 .812)" fill="none" fillRule="evenodd">
      <path d="M5.062 6.188h2.25v1.125c0 .31-.252.563-.563.563H5.625a.563.563 0 0 1-.562-.563V6.188h-.001Z" fill={stroke} fillRule="nonzero" />
      <path d="M0 4.801c1.71 1.125 3.773 1.688 6.187 1.688s4.476-.563 6.188-1.688" stroke={stroke} strokeWidth="1.125" strokeLinecap="round" />
      <path d="M3.375 2.251V1.125C3.375.505 3.878 0 4.499 0h3.375C8.496 0 9 .504 9 1.125V2.25" stroke={stroke} strokeWidth="1.125" />
      <rect stroke={stroke} strokeWidth="1.125" y="2.251" width="12.375" height="10.125" rx="1.125" />
    </g>
  </svg>
);

export default ManageIcon;


