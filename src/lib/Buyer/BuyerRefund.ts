export interface RefundOrder {
    id: string
    productName: string
    orderNumber: string
    orderDate: string
    price: number
    image: string
    status: "delivered" | "processing" | "shipped"
    description?: string
}

export const refundOrdersData: RefundOrder[] = [
    {
        id: "1",
        productName: "Bluetooth Wireless Earbuds",
        orderNumber: "#REF-2024",
        orderDate: "Jan 5, 2025",
        price: 23.345,
        image: "/placeholder.svg?height=60&width=60",
        status: "delivered",
        description: "High-quality wireless earbuds with noise cancellation",
    },
    {
        id: "2",
        productName: "Noise-Cancelling Headphones",
        orderNumber: "#REF-2024",
        orderDate: "Jan 5, 2025",
        price: 15.0,
        image: "/placeholder.svg?height=60&width=60",
        status: "delivered",
        description: "Premium over-ear headphones with active noise cancellation",
    },
    {
        id: "3",
        productName: "24-Inch Ultrawide Monitor",
        orderNumber: "#REF-2024",
        orderDate: "May 20, 2024",
        price: 1200,
        image: "/placeholder.svg?height=60&width=60",
        status: "delivered",
        description: "4K ultrawide monitor perfect for productivity and gaming",
    },
    {
        id: "4",
        productName: "Mechanical Gaming Keyboard",
        orderNumber: "#REF-2024",
        orderDate: "N/A",
        price: 89,
        image: "/placeholder.svg?height=60&width=60",
        status: "processing",
        description: "RGB mechanical keyboard with blue switches",
    },
    {
        id: "5",
        productName: "4K HD Projector",
        orderNumber: "#REF-2024",
        orderDate: "Jan 1, 2025",
        price: 799,
        image: "/placeholder.svg?height=60&width=60",
        status: "delivered",
        description: "Portable 4K projector for home entertainment",
    },
    {
        id: "6",
        productName: "Smartwatch Series 7",
        orderNumber: "#REF-2024",
        orderDate: "Jan 2, 2025",
        price: 299,
        image: "/placeholder.svg?height=60&width=60",
        status: "delivered",
        description: "Advanced fitness tracking and health monitoring",
    },
    {
        id: "7",
        productName: "Portable Phone Charger",
        orderNumber: "#REF-2024",
        orderDate: "Jan 4, 2025",
        price: 45,
        image: "/placeholder.svg?height=60&width=60",
        status: "delivered",
        description: "Fast-charging portable battery pack",
    },
]
