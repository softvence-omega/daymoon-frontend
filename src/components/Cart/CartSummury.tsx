import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CartData } from "@/types";
import RedButton from "../ReUseable/RedButton";

interface CartSummaryProps {
  cartData: CartData;
}

/**
 * Returns the price for a given quantity based on the priceRange array.
 * Assumes priceRange is sorted by minQuantity ascending.
 * Picks the highest minQuantity less than or equal to the quantity.
 */
const getPriceBasedOnQuantity = (
  priceRange: { range: string; price: number }[],
  quantity: number
): number => {
  for (const range of priceRange) {
    const [min, max] = range.range.split("-").map(Number);
    if (quantity >= min && quantity <= max) {
      return range.price;
    }
  }
  return priceRange[priceRange.length - 1].price; // Default to the last price if quantity is out of range
};

export function CartSummary({ cartData }: CartSummaryProps) {
  const getSafeValue = (value: number | undefined | null) => {
    return value != null ? value : 0;
  };

  // Calculate the total price based on cart items
  const calculateTotal = () => {
    let total = 0;

    cartData.cart.forEach((vendor) => {
      vendor.products.forEach((product) => {
        product.variants.forEach((variant) => {
          const price = getPriceBasedOnQuantity(
            variant.priceRange!,
            variant.quantity!
          );
          total += price * variant.quantity!;
        });
      });
    });

    return total;
  };

  const totalPrice = calculateTotal();

  return (
    <Card className="lg:sticky top-6 my-20 border-1 border-[#E5E5E5]">
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {cartData.cart.flatMap((vendor) =>
            vendor.products.flatMap((product) =>
              product.variants.map((variant) => (
                <div
                  key={variant.variantId}
                  className="flex justify-between text-sm"
                >
                  <span className="text-gray-600 truncate pr-2">
                    {product.productName} ({variant.quantity}x)
                  </span>
                  <span className="text-gray-900 font-medium">
                    ${" "}
                    {getPriceBasedOnQuantity(
                      variant.priceRange!,
                      variant.quantity!
                    ).toFixed(2)}
                  </span>
                </div>
              ))
            )
          )}
        </div>

        <Separator />

        {/* Total */}
        <div className="flex justify-between text-lg font-semibold">
          <span className="text-gray-900">Total</span>
          <span className="text-[#F04436]">
            ${getSafeValue(totalPrice).toFixed(2)}
          </span>
        </div>

        <RedButton title="Proceed to checkout" />

        <div className="text-xs text-gray-500 text-center mt-4">
          <p className="mt-1">Secure checkout with SSL encryption</p>
        </div>
      </CardContent>
    </Card>
  );
}
