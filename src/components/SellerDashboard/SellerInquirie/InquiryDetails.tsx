import Title from "../Shared/Title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import invoice from "@/assets/Icon/invoice.png";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { MdAttachment, MdOutlinePhoto } from "react-icons/md";
import { RiMessage2Line } from "react-icons/ri";
import Inquirephoto from "@/assets/image/inqueredetails1.png";
import { IoIosArrowDown, IoIosSend } from "react-icons/io";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const InquiryDetails = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 items-start lg:items-center mb-10 w-full">
        <div className="w-full lg:flex-1">
          <Title title="Inquiry Details" subTitle="" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full lg:w-auto">
          <Button
            asChild
            className="w-full md:w-auto h-12 px-6 py-[10px] items-center justify-center gap-2 rounded-[16px] border border-[var(--color-sunset-orange)] text-[var(--color-sunset-orange)] text-lg bg-transparent hover:bg-[#e7edf6] transition cursor-pointer"
          >
            <Link to="" className="flex items-center gap-2">
              Mark As Resolved
            </Link>
          </Button>

          {/* Add New Product Button */}
          <Button
            asChild
            className="flex items-center justify-center gap-2 h-[48px] px-6 py-[10px] rounded-[16px] bg-[#F04436] text-white text-[16px] md:text-[18px] font-sans leading-[130%] shadow-md hover:shadow-lg transition w-full sm:w-auto"
          >
            <Link to="" className="flex items-center gap-2">
              <img src={invoice} alt="" className="w-5 h-5" />
              Generate Invoice
            </Link>
          </Button>
        </div>
      </div>
      {/* Part-2 */}
      <div>
        <div className=" bg-[#F8F9FA] min-h-screen font-sans">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {/* Buyer Info */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-[#E5E5E5]">
              {/* Top Section */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300" />
                  <div>
                    <h2 className="text-base font-semibold text-gray-900">
                      Marvin McKinney
                    </h2>
                    <p className="text-sm text-gray-500">XYZ Company</p>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-medium px-4 py-2 h-[42px] rounded-[12px] bg-[#192D4E] text-white hover:bg-[#14325f] transition">
                  <RiMessage2Line className="h-6 w-6" />
                  Message
                </button>
              </div>

              {/* Contact Info */}
              <div className="text-sm text-gray-700 space-y-2">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-gray-500" />
                  <span>alexjohnson@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-gray-500" />
                  <span>+4953034533</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-gray-500" />
                  <span>123 Innovation Drive, Suite 400, USA</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-[#E5E5E5]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={Inquirephoto}
                    alt="product"
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <h2 className="text-base text-[#1A1A1A] font-sans">
                      SKU : SP-X2023-BLK
                    </h2>
                    <p className="text-xs text-gray-500">XYZ Company</p>
                  </div>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                <p className="text-base font-medium">$45</p>
                <p className="text-sm text-[#666666]">In Stock : 100 Units</p>
              </div>
            </div>

            {/* Inquiry Status */}
            <div className="bg-white rounded-xl shadow-md p-6 space-y-4 border border-[#E5E5E5]">
              <div className="flex justify-between">
                <p className="text-base text-[#666666]">Inquiry Status</p>
                <p className="text-base text-[#08AD36]">New</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-[#666666]">Date</p>
                <p className="text-base text-[#666666]">21/06/2025, 03:24 pm</p>
              </div>
              <div className="flex justify-between">
                <p className="text-base text-[#666666]">Response</p>
                <p className="text-sm text-gray-600">Awaiting Response</p>
              </div>

              {/* Select Dropdown */}
              <div className="relative mt-3 w-full">
                <Select>
                  <SelectTrigger className="w-full bg-[#E5E5E5] border border-gray-300 text-sm rounded-md px-4 py-2 text-gray-800 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10 appearance-none">
                    <SelectValue placeholder="Update Status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 rounded-md shadow-md">
                    <SelectItem value="responded" className="text-gray-800">
                      Responded
                    </SelectItem>
                    <SelectItem value="in-progress" className="text-gray-800">
                      In Progress
                    </SelectItem>
                  </SelectContent>
                </Select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#EF584C]">
                  <IoIosArrowDown className="text-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Messages & Response */}
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Buyer Message */}
            <div>
              <h3 className="text-2xl font-sans mb-4">Buyers Messages</h3>
              <div className="bg-white rounded-xl shadow p-4 border border-[#E5E5E5] h-[386px] overflow-hidden">
                {/* Scrollable message content */}
                <div className="overflow-y-auto h-full space-y-3">
                  <div className="w-full text-lg text-gray-700 leading-loose whitespace-pre-line">
                    Hello, I’m interested in your handmade ceramic vase. I have
                    a few questions before making a purchase:
                    {"\n"}1. What are the exact dimensions of the vase?
                    {"\n"}2. Do you offer this in any other colors besides the
                    ones shown?
                    {"\n"}3. Is this suitable for fresh flowers or just
                    decorative?
                    {"\n"}4. What’s your estimated shipping time to Portland,
                    Oregon?
                    {"\n"}Also, do you offer any discounts for purchasing
                    multiple items? I’m considering getting this as a gift set
                    for several friends.
                    {"\n"}Thank you for your time!
                  </div>

                  <div className="w-full text-xs text-gray-400 text-right">
                    21/06/2025, 03:24 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Response Box */}
            <div>
              <h3 className="text-2xl font-sans mb-4">Your Response</h3>
              <div className="bg-white rounded-xl shadow p-6 space-y-4 h-[386px] border border-gray-300">
                <textarea
                  placeholder="Type your response here"
                  className="w-full  rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[295px]"
                />
                <p className="text-xs text-gray-400">21/06/2025, 03:24 pm</p>
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <MdAttachment className="h-6 w-6" /> Attach File
                    <input type="file" className="hidden" />
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <MdOutlinePhoto className="h-6 w-6" />
                    Add Product Image
                    <input type="file" className="hidden" />
                  </label>
                </div>

                <div className="flex justify-end">
                  <button className="flex gap-3 w-full md:w-auto mt-4 px-6 py-3 bg-[#192D4E] text-white font-semibold rounded-lg hover:bg-[#14325f]">
                    <IoIosSend className="h-6 w-6 text-white " />
                    Send Response
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryDetails;
