import React from 'react';

const SvgTrendingDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

export default SvgTrendingDown;
