import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { IProduct } from "@/types";
import { motion } from "motion/react";

function AddToCart({ productData }: { productData: IProduct }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button className="px-10 py-3 rounded-3xl border-[#F04436] border-1 hover:bg-[#F04436] hover:text-white text-[#F04436] transition-colors duration-200 font-semibold">
          Add to Cart
        </motion.button>
      </DialogTrigger>

      <DialogContent className="max-w-[800px] border-none bg-white rounded-lg shadow-xl overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-semibold text-gray-800">
            My Cart
          </DialogTitle>
          <hr className="border-gray-200 mt-4" />
        </DialogHeader>

        <div className="grid gap-6 mt-4">
          <div>
            <div className="flex justify-between flex-wrap items-center gap-5">
              {productData.moq.map((tier, i) => (
                <div key={i} className="border-none rounded-md p-2 text-start">
                  <p className="text-sm text-[#666]">{tier.range}</p>
                  <p className="text-lg md:font-semibold mt-2 md:text-xl text-gray-800">
                    {tier.price}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-[#666] text-sm mt-8 font-medium mb-2">
              Minimum Order Quantity
            </p>
            <p className="mb-2 text-gray-900 text-lg font-semibold">
              {productData.minOrderQuantity} pcs
            </p>
          </div>

          {productData.variants.map((variant, index) => (
            <div
              key={index}
              className="flex justify-between items-start gap-4 mt-6"
            >
              <div className="flex items-center gap-4">
                <img
                  src={variant.image}
                  alt={variant.color}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <span className="text-base font-medium text-gray-800">
                    {productData.productName}
                  </span>
                  <span className="text-sm text-gray-600">{variant.color}</span>
                </div>
              </div>

              <div className="flex items-center ">
                <div className="flex items-center  shadow-[0_0_0_1px_#E5E5E5] rounded-xl p-2 border-gray-300 gap-2">
                  <Button
                    size="sm"
                    // onClick={() =>
                    // //   handleQuantityChange("decrease", variant.color)
                    // }
                    className="text-[#F04436] bg-[#FEECEB] rounded-full"
                  >
                    -
                  </Button>
                  <Input
                    id={`quantity-${variant.color}`}
                    // value={variantQuantities[variant.color]}
                    // onChange={(e) => handleQuantityInput(e, variant.color)}
                    className=" text-center text-gray-700 bg-[#EAEAEA] rounded-full border-none "
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    // onClick={() =>
                    //   handleQuantityChange("increase", variant.color)
                    // }
                    className="text-[#F04436] bg-[#FEECEB] rounded-full"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <h4 className="font-semibold      text-2xl">
              Customization Options
            </h4>
            <div className="space-y-4 mt-4">
              {productData.customizations.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4   text-gray-600 p-4 rounded-lg cursor-pointer transition-all duration-200 bg-[#E5E5E5] text-lg "
                >
                  <Checkbox
                    id={item.option}
                    // checked={selectedCustomizations.includes(item.option)}
                    // onCheckedChange={() =>
                    //   handleCustomizationChange(item.option)
                    // }
                    className=" h-5 w-5 cursor-pointer transition-colors duration-200 ease-in-out border 
                    data-[state=checked]:bg-[#f04436] 
                    data-[state=checked]:border-[#f04436] 
                    data-[state=checked]:text-white 
                    data-[state=unchecked]:bg-transparent 
                    data-[state=unchecked]:border-[#f04436] 
                    data-[state=unchecked]:border-2"
                  />
                  <span className="">{item.option}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <hr className="border-gray-200 mt-4 w-full" />
          {/* Subtotal */}
          <div className="flex justify-between text-sm font-semibold ">
            <span>Subtotal</span>
            {/* <span>${calculateSubtotal().toFixed(2)}</span> */}
            <span className="font-semibold text-2xl text-[#D1512D]">
              {" "}
              2141$
            </span>
          </div>
        </div>

        <DialogFooter className="mt-6">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            // disabled={!isQuantityValid}
            className={`px-6 py-2 rounded-lg bg-[#F04436] text-white hover:bg-[#D7362F] `}
            //     className={`px-6 py-2 rounded-lg bg-[#F04436] text-white hover:bg-[#D7362F]
            //         ${
            //       !isQuantityValid ? "opacity-50 cursor-not-allowed" : ""
            //     }
            // `}
            // onClick={handleCheckout}
          >
            Continue to Checkout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default AddToCart;
