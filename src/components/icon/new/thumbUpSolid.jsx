import React from 'react';

const ThumbUpSolid = ({ stroke = '#000000' }) => (
  <svg viewBox="0 0 24 24">
    <g fill={stroke} fillRule="evenodd" strokeLinejoin="round">
      <path fill={stroke} d="M2.365 16c0-4.16 2.21-6.073 3.205-6.542.663-.313 1.473-.612 2.43-.898l2.52-3.634-.393-3.456-.019-.163c.816-.421 1.475-.567 1.98-.437.755.196 2.32 1.318 2.454 3.13.09 1.208-.202 2.839-.874 4.892h5.91c1.542 0 2.744.855 2.744 2.108 0 .835-.401 1.395-1.202 1.68.901.304 1.302.886 1.202 1.746-.1.859-.808 1.324-2.123 1.395 1.072.408 1.464 1.046 1.176 1.912-.288.865-.989 1.191-2.104.977.986.415 1.35 1.12 1.094 2.114-.257.994-1.653 1.497-4.19 1.506-4.596.106-7.658-.179-9.187-.856-1.8 0-4.623-1.313-4.623-5.474z" />
    </g>
  </svg>
);

export default ThumbUpSolid;


