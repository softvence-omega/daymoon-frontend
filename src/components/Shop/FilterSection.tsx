import ReusableFilter from "../ReUseable/ReusbaleFilter";

const FilterSection = () => {
  return (
    <div className="lg:mt-12 w-full">
      <ReusableFilter
        title="Price"
        options={[
          { label: "Under $25", value: "0-25" },
          { label: "$25-$50", value: "25-50" },
          { label: "$50-$100", value: "50-100" },
          { label: "Above $100", value: "100-200" },
        ]}
      />
      <ReusableFilter
        title="Brands"
        options={[
          { label: "Apple", value: "apple" },
          { label: "Samsung", value: "samsung" },
          { label: "Sony", value: "sony" },
          { label: "Puma", value: "puma" },
          { label: "Adidas", value: "adidas" },
          { label: "Nike", value: "nike" },
        ]}
      />
      <ReusableFilter
        title="Customer Ratings"
        options={[
          { label: "4 stars & up", value: "4" },
          { label: "3 stars & up", value: "3" },
          { label: "2 stars & up", value: "2" },
        ]}
      />

      <ReusableFilter
        title="Color "
        options={[
          { label: "Red ", value: " red" },
          { label: "Blue", value: "blue" },
          { label: "Black ", value: "black" },
          { label: "White  ", value: "white" },
          { label: "Yellow ", value: "yellow" },
          { label: "Green ", value: "green" },
          { label: "Pink ", value: "pink" },
        ]}
      />
      <ReusableFilter
        title="Size "
        options={[
          { label: "S ", value: " small" },
          { label: "M", value: "medium" },
          { label: "L ", value: "large" },
          { label: "XL  ", value: "xlarge" },
          { label: "XXL ", value: "xxlarge" },
          { label: "One Size ", value: "onesize" },
        ]}
      />
      <ReusableFilter
        title="Availability "
        options={[
          { label: "In stock ", value: " instock" },
          { label: "Out of Stock", value: "outofstock" },
        ]}
      />
      <ReusableFilter
        title="Features "
        options={[
          { label: "Water proof", value: "waterproof" },
          { label: "Wireless", value: "wireless" },
          { label: "Adjustable", value: "adjustable" },
          { label: "Eco-Friendly", value: "ecofriendly" },
          { label: "Portable", value: "portable" },
        ]}
      />
      <ReusableFilter
        title="Sort By "
        options={[
          { label: "Price : Low to high", value: "lowToHigh" },
          { label: "  Price : High to Low", value: "highToLow" },
          { label: "Best sellers", value: "bestsellers" },
          { label: "Customer Rating", value: "customerRating" },
        ]}
      />
    </div>
  );
};

export default FilterSection;
