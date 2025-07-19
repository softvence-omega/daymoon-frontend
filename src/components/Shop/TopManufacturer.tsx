import { Manufacturer, manufacturers } from "@/lib/Manufacturer/manufacturer";
import { useEffect, useState } from "react";
import ManufacturerCard from "../ReUseable/ManufacturerCard";

interface TopRatedManufacturersProps {
  title?: string; // <-- add title prop here
  showTopRatedOnly?: boolean;
  showAll?: boolean;
  cols?: {
    mobile: number;
    md: number;
    lg: number;
    xl?: number;
  };
  rows?: {
    mobile: number;
    md: number;
    lg: number;
    xl?: number;
  };
}

const isMobileWidth = (width: number) => width < 768;
const isMdWidth = (width: number) => width >= 768 && width < 1024;

const TopManufacturer = ({
  title,
  showTopRatedOnly = false,
  showAll = true,
  cols = { mobile: 1, md: 2, lg: 3, xl: 3 },
  rows = { mobile: 1, md: 2, lg: 2, xl: 2 },
}: TopRatedManufacturersProps) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filter data
  let filteredManufacturers: Manufacturer[] = [];

  if (showTopRatedOnly) {
    filteredManufacturers = manufacturers.filter((m) => m.rating >= 4.7);
  } else if (showAll) {
    filteredManufacturers = manufacturers;
  }

  const currentCols = isMobileWidth(windowWidth)
    ? cols.mobile
    : isMdWidth(windowWidth)
    ? cols.md
    : windowWidth >= 1280 && cols.xl
    ? cols.xl
    : cols.lg;

  const currentRows = isMobileWidth(windowWidth)
    ? rows.mobile
    : isMdWidth(windowWidth)
    ? rows.md
    : windowWidth >= 1280 && rows.xl
    ? rows.xl
    : rows.lg;

  const visibleCount = currentCols * (currentRows || 1);

  const displayedManufacturers = filteredManufacturers.slice(0, visibleCount);

  const getColsClass = (num: number) => {
    switch (num) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      case 4:
        return "grid-cols-4";
      case 5:
        return "grid-cols-5";
      case 6:
        return "grid-cols-6";
      default:
        return "";
    }
  };

  const colClass = getColsClass(currentCols);
  const gridClass = `grid gap-4 md:gap-6 lg:gap-8 max-[767px]:mt-8 mt-12 ${colClass}`;

  return (
    <section className="my-10 md:my-18 lg:my-18 xl:my-18 2xl:my-18 max-w-full mx-auto">
      {title && (
        <h2 className="text-2xl lg:text-[32px] text-left md:text-left lg:text-left pt-2 md:pt-0 lg:pt-0 max-[767px]:font-medium font-semibold mb-0 md:mb-6 lg:mb-6 xl:mb-6 2xl:mb-6 uppercase ">
          {title}
        </h2>
      )}

      <div className={gridClass}>
        {displayedManufacturers.map((manufacturer) => (
          <ManufacturerCard key={manufacturer.id} manufacturer={manufacturer} />
        ))}
      </div>
    </section>
  );
};

export default TopManufacturer;
