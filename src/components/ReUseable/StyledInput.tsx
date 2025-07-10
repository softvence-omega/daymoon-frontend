import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import * as React from "react";

const StyledInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Input
      className={cn(
        "w-full rounded-md border border-[#B3B3B3] bg-transparent px-3 py-3 h-10 text-sm placeholder:text-[#B3B3B3]",
        "focus:outline-none focus:border-none focus:ring-[#B3B3B3] focus:ring-[0.2px] focus:shadow-none",
        "[&:-webkit-autofill]:shadow-[inset_0_0_0px_1000px_transparent] [&:-webkit-autofill]:text-[#333333]",
        className
      )}
      {...props}
    />
  );
};

export default StyledInput;
