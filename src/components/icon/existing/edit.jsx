import React from 'react';

const EditIcon = ({ stroke = '#000000' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <g fill="none" fillRule="evenodd">
      <path d="M14.305 1.411c.45.372.772.885.866 1.396.094.514-.025 1.031-.439 1.445-.537.551-1.356 1.379-2.457 2.483l-.425.426-.688.688-.747.746c-1.69 1.686-3.382 3.369-5.076 5.05l-4.165 1.219 1.11-4.265.826-.826 1.38-1.378 6.287-6.288.677-.678c.422-.422.907-.59 1.385-.586.524.003 1.047.222 1.466.568Z" stroke={stroke} strokeLinejoin="round" />
      <path stroke={stroke} strokeLinecap="round" d="M11 2.333 12.667 4" />
      <path stroke={stroke} d="m2.333 10.333 3.334 3.334" />
    </g>
  </svg>
);

export default EditIcon;
