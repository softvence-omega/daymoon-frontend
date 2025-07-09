import React from "react";

export type ChartConfig = Record<string, { label: string; color?: string }>;

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: ChartConfig;
  children: React.ReactNode;
}

export function ChartContainer({
  children,
  className,
  ...props
}: ChartContainerProps) {
  return (
    <div className={` p-4 ${className ?? ""}`} {...props}>
      {children}
    </div>
  );
}
