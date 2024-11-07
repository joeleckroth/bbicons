import React from 'react';

const BarsIcon = ({ stroke = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g fill="none" fillRule="evenodd">
    <path d="M16 7.75c2.278 0 4.34.923 5.834 2.416A8.224 8.224 0 0 1 24.25 16c0 1.606-.686 3.098-1.674 4.357l1.324.578a2.248 2.248 0 0 1 1.35 2.062c0 .349-.137.663-.362.89a1.222 1.222 0 0 1-.871.363l-7.974-.001-8.06.001a1.23 1.23 0 0 1-1.233-1.233c0-.456.132-.888.367-1.25.235-.361.572-.653.982-.832l1.325-.578C8.436 19.098 7.75 17.607 7.75 16c0-2.278.923-4.34 2.416-5.834A8.224 8.224 0 0 1 16 7.75Z" stroke={stroke} strokeWidth="1.5"/>
    <path d="M16 27.99c1.105 0 2-.902 2-2.015-1.17.017-2.977.025-4 0 0 1.113.895 2.015 2 2.015Z" fill={stroke}/>
    <path d="M17.414 5.414a1.99 1.99 0 0 0-2.828 0" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
</svg>
);

export default BarsIcon;


