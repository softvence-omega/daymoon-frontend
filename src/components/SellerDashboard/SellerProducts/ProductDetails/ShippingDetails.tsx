import ShippingCard from "./ShippingCard";

const details = [
  { label: "Air Freight", value: "$15–$25", sub: "3–5 Business Days" },
  { label: "Sea Freight", value: "$8–$12", sub: "15–20 Business Days" },
  { label: "Express Shipping", value: "$30–$45", sub: "1–2 Business Days" },
  { label: "", sub: "Lead Time", value: "7–10 Days" },
  { label: "", sub: "Product Weight", value: "0.2 Kg" },
  { label: "", sub: "Package Dimension", value: "10 × 8 × 4 cm" },
];
const notice =
  "Shipping costs vary based on destination and quantity ordered. Exact shipping costs are calculated at checkout.Free shipping available for orders over $500";
const ShippingDetails = () => {
  return (
    <div>
      <ShippingCard details={details} notice={notice} />
    </div>
  );
};

export default ShippingDetails;
