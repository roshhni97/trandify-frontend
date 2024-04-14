import * as React from "react";
import type { SVGProps } from "react";
const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={20}
    fill="none"
    {...props}
  >
    <path fill="#DAF9F2" d="M0 8h4v9H0z" />
    <path fill="#DAF9F2" d="M0 15.2h4v4H0zM7.2 2.8h4v7h-4z" />
    <path fill="#DAF9F2" d="M7.2 8h4v9h-4z" />
    <path fill="#DAF9F2" d="M7.2 15.2h4v4h-4zM14.4.8h4v8h-4z" />
    <path fill="#DAF9F2" d="M14.4 8h4v8h-4z" />
    <path fill="#DAF9F2" d="M14.4 15.2h4v4h-4z" />
  </svg>
);
export default Icon;
