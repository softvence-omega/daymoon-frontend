"use client";

import * as React from "react";
import formlogo from "@/assets/Icon/formlogo.png";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ProductsService from "./ProductsService";
import DiscountPricingPayment from "./DiscountPricingPayment";

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  return !!date && !isNaN(date.getTime());
}

const InvoiceForm = () => {
  // Issue Date
  const [issueOpen, setIssueOpen] = React.useState(false);
  const [issueDate, setIssueDate] = React.useState<Date | undefined>(
    new Date("2025-06-01")
  );
  const [issueMonth, setIssueMonth] = React.useState<Date | undefined>(
    issueDate
  );
  const [issueValue, setIssueValue] = React.useState(formatDate(issueDate));

  // Due Date
  const [dueOpen, setDueOpen] = React.useState(false);
  const [dueDate, setDueDate] = React.useState<Date | undefined>(
    new Date("2025-06-15")
  );
  const [dueMonth, setDueMonth] = React.useState<Date | undefined>(dueDate);
  const [dueValue, setDueValue] = React.useState(formatDate(dueDate));

  return (
    <div className="w-full space-y-5">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
        <div className="w-full lg:flex-1 space-y-3">
          <img src={formlogo} alt="Form Logo" />
          <h1 className="text-xl font-semibold">Innovatech Solutions</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          <h3 className="text-[#F04436] font-sans text-xl">
            Invoice: #3647365
          </h3>
        </div>
      </div>

      <div className="space-y-10">
        {/* Date Inputs Section */}
        <div className="flex flex-col md:flex-row w-full gap-6">
          {/* Issue Date */}
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <Label htmlFor="issue-date" className="px-1">
              Issue Date
            </Label>
            <div className="relative flex gap-2">
              <Input
                id="issue-date"
                value={issueValue}
                placeholder="June 01, 2025"
                className="bg-background pr-10 border-[#B3B3B3] h-[50px] rounded-[12px]"
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  setIssueValue(e.target.value);
                  if (isValidDate(date)) {
                    setIssueDate(date);
                    setIssueMonth(date);
                  }
                }}
                onClick={() => setIssueOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setIssueOpen(true);
                  }
                }}
              />
              <Popover open={issueOpen} onOpenChange={setIssueOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                  >
                    <CalendarIcon className="size-3.5" />
                    <span className="sr-only">Select date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    mode="single"
                    selected={issueDate}
                    captionLayout="dropdown"
                    month={issueMonth}
                    onMonthChange={setIssueMonth}
                    onSelect={(date) => {
                      setIssueDate(date);
                      setIssueValue(formatDate(date));
                      setIssueOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Due Date */}
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <Label htmlFor="due-date" className="px-1">
              Due Date
            </Label>
            <div className="relative flex gap-2">
              <Input
                id="due-date"
                value={dueValue}
                placeholder="June 15, 2025"
                className="bg-background pr-10 border-[#B3B3B3] h-[50px] rounded-[12px]"
                onChange={(e) => {
                  const date = new Date(e.target.value);
                  setDueValue(e.target.value);
                  if (isValidDate(date)) {
                    setDueDate(date);
                    setDueMonth(date);
                  }
                }}
                onClick={() => setDueOpen(true)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setDueOpen(true);
                  }
                }}
              />
              <Popover open={dueOpen} onOpenChange={setDueOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                  >
                    <CalendarIcon className="size-3.5" />
                    <span className="sr-only">Select date</span>
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="end"
                  alignOffset={-8}
                  sideOffset={10}
                >
                  <Calendar
                    mode="single"
                    selected={dueDate}
                    captionLayout="dropdown"
                    month={dueMonth}
                    onMonthChange={setDueMonth}
                    onSelect={(date) => {
                      setDueDate(date);
                      setDueValue(formatDate(date));
                      setDueOpen(false);
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        {/* Buyers Info Section */}
        <div>
          <div className="w-full lg:flex-1 space-y-3 mb-4">
            <h1 className="text-xl font-semibold">Buyers Information</h1>
          </div>

          <div className="space-y-3">
            <div className="flex flex-col md:flex-row w-full gap-6">
              {/* Buyer Name */}
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <Label htmlFor="buyer-name" className="px-1">
                  Buyer's Name
                </Label>
                <Input
                  id="buyer-name"
                  placeholder=""
                  className="bg-background pr-10 border-[#B3B3B3] h-[50px] rounded-[12px]"
                />
              </div>

              {/* Business Name */}
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <Label htmlFor="business-name" className="px-1">
                  Business Name
                </Label>
                <Input
                  id="business-name"
                  placeholder=""
                  className="bg-background pr-10 border-[#B3B3B3] h-[50px] rounded-[12px]"
                />
              </div>
            </div>
            {/* email/phone */}
            <div className="flex flex-col md:flex-row w-full gap-6">
              {/* Buyer Name */}
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <Label htmlFor="email" className="px-1">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder=""
                  className="bg-background pr-10 border-[#B3B3B3] h-[50px] rounded-[12px]"
                />
              </div>

              {/* Business Name */}
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <Label htmlFor="phone" className="px-1">
                  Phone
                </Label>
                <Input
                  id="number"
                  placeholder=""
                  className="bg-background pr-10 border-[#B3B3B3] h-[50px] rounded-[12px]"
                />
              </div>
            </div>
            {/* Address/tAX */}

            <div className="flex flex-col md:flex-row w-full gap-6">
              {/* Buyer Name */}
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <Label htmlFor="buyer-name" className="px-1">
                  Address
                </Label>
                <Input
                  id="name"
                  placeholder=""
                  className="bg-background pr-10 border-[#B3B3B3] h-[50px] rounded-[12px]"
                />
              </div>

              {/* Business Name */}
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <Label htmlFor="tax-id" className="px-1">
                  TAX ID
                </Label>
                <Input
                  id="number"
                  placeholder=""
                  className="bg-background pr-10 border-[#B3B3B3] h-[50px] rounded-[12px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ProductsService */}
      <ProductsService />
      <div>
        <DiscountPricingPayment />
      </div>
    </div>
  );
};

export default InvoiceForm;

// const InvoiceForm = () => {
//   return (
//     <div>
//       <h1>InvoiceForm mmm</h1>
//     </div>
//   );
// };

// export default InvoiceForm;
