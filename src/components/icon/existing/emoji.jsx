import React from 'react';

const EmojiIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16" className={className}>
    <g fill="none" fillRule="evenodd" transform="translate(.572 .913)">
      <path 
        stroke="currentColor" 
        d="M6.428 0c.374 0 .748.096 1.083.29l4.262 2.46a2.167 2.167 0 0 1 1.083 1.877v4.92c0 .774-.412 1.49-1.083 1.877l-4.262 2.46a2.165 2.165 0 0 1-2.166 0l-4.262-2.46A2.167 2.167 0 0 1 0 9.547v-4.92c0-.774.413-1.49 1.083-1.877L5.345.29C5.68.096 6.054 0 6.428 0Z" 
      />
      <ellipse cx="3.428" cy="6.754" fill="currentColor" fillRule="nonzero" rx="1.2" ry="2" />
      <ellipse cx="9.428" cy="6.754" fill="currentColor" fillRule="nonzero" rx="1.2" ry="2" />
      <path stroke="currentColor" strokeLinecap="round" d="M5.095 9.884c.44.222.885.333 1.333.333.448 0 .893-.11 1.333-.333" />
    </g>
  </svg>
);

export default EmojiIcon;