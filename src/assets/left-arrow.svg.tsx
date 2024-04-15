import * as React from "react";
import type { SVGProps } from "react";
const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={22}
    fill="none"
    {...props}
    className="transform hover:translate-x-[-5px] transition-all duration-200 cursor-pointer"
  >
    <path
      stroke="#DAF9F2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.333}
      d="M2.833 11h30.334M2.833 11l8.667 8.667M2.833 11 11.5 2.333"
    />
  </svg>
);
export default Icon;
