import { CartData } from "@/types";

export const cartData: CartData = {
    cart: [
        {
            vendorInfo: {
                vendorName: "ElectroMart",
                vendorLocation: "123 Tech Street, San Francisco, CA, USA",
                vendorLogo: "https://example.com/vendor-shop-image.jpg",
            },
            products: [
                {
                    productId: "1",
                    productName: "Bluetooth Wireless Earbuds",
                    variants: [
                        {
                            variantId: "1-Black-Small",
                            color: "Black",
                            size: "Small",
                            image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
                            quantity: 2,
                            priceRange: [
                                { range: "10-199", price: 49.98 },
                                { range: "200-499", price: 45.00 },
                                { range: "500-999", price: 40.00 },
                                { range: "1000-10000", price: 35.00 },
                            ],
                            customizations: [
                                { option: "Logo/graphic design", price: 0.20 },
                                { option: "Extended Battery (10+ hours)", price: 3.00 },
                            ],
                        },
                        {
                            variantId: "1-White",
                            color: "White",
                            image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
                            quantity: 1,
                            priceRange: [
                                { range: "10-199", price: 49.98 },
                                { range: "200-499", price: 45.00 },
                                { range: "500-999", price: 40.00 },
                                { range: "1000-10000", price: 35.00 },
                            ],
                            customizations: [{ option: "Wireless Charging Case", price: 4.00 }],
                        },
                    ],
                },
                {
                    productId: "7",
                    productName: "Portable Bluetooth Speaker",
                    variants: [
                        {
                            variantId: "7-Red-Large",
                            color: "Red",
                            size: "Large",
                            image: "https://images.pexels.com/photos/3847634/pexels-photo-3847634.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
                            quantity: 3,
                            priceRange: [
                                { range: "10-199", price: 29.99 },
                                { range: "200-499", price: 27.00 },
                                { range: "500-999", price: 24.00 },
                                { range: "1000-10000", price: 20.00 },
                            ],
                            customizations: [{ option: "Extended Battery (10+ hours)", price: 3.00 }],
                        },
                    ],
                },
            ],
        },
        {
            vendorInfo: {
                vendorName: "TechGear",
                vendorLocation: "456 Electronic Blvd, Los Angeles, CA, USA",
                vendorLogo: "https://example.com/techgear-logo.jpg",
            },
            products: [
                {
                    productId: "2",
                    productName: "Noise-Cancelling Over-Ear Headphones",
                    variants: [
                        {
                            variantId: "2-White",
                            color: "White",
                            image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
                            quantity: 1,
                            priceRange: [
                                { range: "10-199", price: 89.99 },
                                { range: "200-499", price: 85.00 },
                                { range: "500-999", price: 80.00 },
                                { range: "1000-10000", price: 75.00 },
                            ],
                            customizations: [{ option: "Extended Battery (10+ hours)", price: 3.00 }],
                        },
                    ],
                },
                {
                    productId: "8",
                    productName: "Smart Fitness Tracker",
                    variants: [
                        {
                            variantId: "8-Black-Medium",
                            color: "Black",
                            size: "Medium",
                            image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
                            quantity: 2,
                            priceRange: [
                                { range: "10-199", price: 59.95 },
                                { range: "200-499", price: 55.00 },
                                { range: "500-999", price: 50.00 },
                                { range: "1000-10000", price: 45.00 },
                            ],
                            customizations: [{ option: "Logo/graphic design", price: 0.20 }],
                        },
                        {
                            variantId: "8-Pink-Small",
                            color: "Pink",
                            size: "Small",
                            image: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
                            quantity: 3,
                            priceRange: [
                                { range: "10-199", price: 61.95 },
                                { range: "200-499", price: 57.00 },
                                { range: "500-999", price: 52.00 },
                                { range: "1000-10000", price: 47.00 },
                            ],
                            customizations: [{ option: "Wireless Charging Case", price: 4.00 }],
                        },
                    ],
                },
            ],
        },
    ],
};



