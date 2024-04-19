import React from "react";
// Props
interface Props {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export default function index({ children, className }: Props) {
  return (
    <div className={`mx-auto px-4 md:px-6 xl:max-w-[1460px] ${className}`}>
      {children}
    </div>
  );
}
