import * as React from "react";
import type { SVGProps } from "react";
const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#DAF9F2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.311}
      d="M1.195 12.963 12.752 1.406m0 0H2.351m10.401 0v10.401"
    />
  </svg>
);
export default Icon;
