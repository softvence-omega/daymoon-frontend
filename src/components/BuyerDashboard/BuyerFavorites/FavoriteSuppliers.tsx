import image1 from "@/assets/Manufacturer/Rectangle 5.png";
import image2 from "@/assets/Manufacturer/Rectangle 6.png";
import {
  default as image3,
  default as image4,
} from "@/assets/Manufacturer/Rectangle 7.png";
import ManufacturerCard from '../../ReUseable/ManufacturerCard';
const manufacturers = [
  {
    id: 1,
    shopName: "Samsung Electronics",
    name: "Samsung",
    location: "Seoul, South Korea",
    rating: 4.9,
    totalReviews: 1200,
    images: [image1, image2, image3, image4],
  },
  {
    id: 2,
    shopName: "Apple Store",
    name: "Apple",
    location: "California, USA",
    rating: 4.8,
    totalReviews: 1500,
    images: [image1, image2, image3, image4],
  },
  {
    id: 3,
    shopName: "Sony Corporation",
    name: "Sony",
    location: "Tokyo, Japan",
    rating: 4.7,
    totalReviews: 980,
    images: [image1, image2, image3, image4],
  },
  {
    id: 4,
    shopName: "LG Electronics",
    name: "LG",
    location: "Seoul, South Korea",
    rating: 4.6,
    totalReviews: 875,
    images: [image1, image2, image3, image4],
  },
  {
    id: 5,
    shopName: "Samsung Digital Plaza",
    name: "Samsung",
    location: "Suwon, South Korea",
    rating: 4.7,
    totalReviews: 1025,
    images: [image1, image2, image3, image4],
  },
  {
    id: 6,
    shopName: "Sony Center",
    name: "Sony",
    location: "Tokyo, Japan",
    rating: 4.5,
    totalReviews: 740,
    images: [image1, image2, image3, image4],
  },
  {
    id: 7,
    shopName: "Sony Center",
    name: "Sony",
    location: "Tokyo, Japan",
    rating: 4.5,
    totalReviews: 740,
    images: [image1, image2, image3, image4],
  },
  {
    id: 8,
    shopName: "Sony Center",
    name: "Sony",
    location: "Tokyo, Japan",
    rating: 4.5,
    totalReviews: 740,
    images: [image1, image2, image3, image4],
  },
  {
    id: 9,
    shopName: "Sony Center",
    name: "Sony",
    location: "Tokyo, Japan",
    rating: 4.5,
    totalReviews: 740,
    images: [image1, image2, image3, image4],
  },
];

const FavoriteSuppliers = () => {
  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-12 md:gap-4 lg:gap-8">
            {manufacturers.map((manufacturer) => (
              <ManufacturerCard
                key={manufacturer.id}
                manufacturer={manufacturer}
              />
            ))}
          </div>
    </div>
  )
}

export default FavoriteSuppliers