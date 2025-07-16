/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import fileSearch from "../../assets/Icon/fileSearch.svg";

async function callImageSearchAPI(imageFile: File) {
  const formData = new FormData();
  formData.append("image", imageFile);

  const response = await fetch("/api/search-by-image", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) throw new Error("Search by image failed");
  return await response.json(); // Assumed API returns JSON results
}

const SearchByImage = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log("productId", error);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    setLoading(true);
    try {
      const results = await callImageSearchAPI(file);
      console.log("🚀 ~ handleFileChange ~ results:", results);
      setLoading(false);
    } catch (err: any) {
      console.log("🚀 ~ handleFileChange ~ err:", err);
      setLoading(false);
      toast.error("Failed to search by image. Please try again.");
      setError("Failed to search by image. Please try again.");
    }
  };

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center lg:ml-4 w-fit   px-6 rounded-full shadow-[0_0_1px_0px_#F46A39] h-17 bg-white"
    >
      <button
        type="button"
        onClick={handleButtonClick}
        className="flex items-center  gap-2 text-base text-[#1A1A1A] font-normal focus:outline-none"
        disabled={loading}
      >
        <img
          alt="fileSearch"
          src={fileSearch}
          className="w-10  h-10 lg:w-5 lg:h-5"
        />
        <span className="hidden sm:inline">
          {loading ? "Searching..." : "Search by Image"}
        </span>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </button>
    </motion.div>
  );
};

export default SearchByImage;
