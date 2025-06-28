
const Categories = () => {
    const categories = [
          "Account and Login",
          "Order and Payment",
          "Shipping and Delivery",
          "Product",
          "Technical Issues",
          "Security and Privacy Concerns",
          "Subscription and Membership",
          "Contact Support",
        ]
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16 text-center">
        {categories.map((item) => (
          <div
            key={item}
            className="border border-gray-200 rounded-md py-4 px-2 hover:bg-gray-50 cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>
  )
}

export default Categories