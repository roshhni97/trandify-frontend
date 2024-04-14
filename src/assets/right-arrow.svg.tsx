import * as React from "react";
import type { SVGProps } from "react";
const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#DAF9F2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.417}
      d="M1.491 6H11.51m0 0L7 1.492M11.509 6 7 10.508"
    />
  </svg>
);
export default Icon;
