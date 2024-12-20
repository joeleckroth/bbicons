import React from 'react';

const CogIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path 
        d="m10.742 21.43-.596.483a1.55 1.55 0 0 1-2.472-.804l-.2-.74a2 2 0 0 0-2.035-1.48l-.765.04a1.55 1.55 0 0 1-1.528-2.102l.274-.716a2 2 0 0 0-.777-2.393L2 13.3a1.55 1.55 0 0 1 0-2.6l.643-.418A2 2 0 0 0 3.42 7.89l-.274-.716A1.55 1.55 0 0 1 4.674 5.07l.765.04a2 2 0 0 0 2.036-1.479l.199-.74a1.55 1.55 0 0 1 2.472-.804l.596.483a2 2 0 0 0 2.516 0l.596-.483a1.55 1.55 0 0 1 2.472.804l.2.74a2 2 0 0 0 2.035 1.48l.765-.04a1.55 1.55 0 0 1 1.528 2.102l-.274.716a2 2 0 0 0 .777 2.393L22 10.7a1.55 1.55 0 0 1 0 2.6l-.643.418a2 2 0 0 0-.777 2.393l.274.716a1.55 1.55 0 0 1-1.528 2.103l-.765-.04a2 2 0 0 0-2.036 1.479l-.199.74a1.55 1.55 0 0 1-2.472.804l-.596-.483a2 2 0 0 0-2.516 0Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <circle 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        cx="12" 
        cy="12" 
        r="5" 
      />
    </g>
  </svg>
);

export default CogIcon;