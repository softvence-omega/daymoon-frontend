import { useState, useEffect } from "react";
import ManufacturerCard from "../ReUseable/ManufacturerCard";
import { Manufacturer, manufacturers } from "@/lib/Manufacturer/manufacturer";

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
  title,                  // receive title from props
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
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-2";
      case 3: return "grid-cols-3";
      case 4: return "grid-cols-4";
      case 5: return "grid-cols-5";
      case 6: return "grid-cols-6";
      default: return "";
    }
  };

  const colClass = getColsClass(currentCols);
  const gridClass = `grid gap-4 md:gap-6 lg:gap-8 mt-12 ${colClass}`;

  return (
    <section className="mt-10 md:mt-18 max-w-full mx-auto">
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-start uppercase">
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
