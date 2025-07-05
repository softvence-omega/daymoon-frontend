import { Card } from "@/components/ui/card";
import { ImPencil } from "react-icons/im";
import { FaPlus } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";

import visa from "@/assets/dashboard/buyer-dashboard/visa.png";
import mastercard from "@/assets/dashboard/buyer-dashboard/mastercard.png";
import { Badge } from "@/components/ui/badge";

const cardDetails = [
	{
		image: visa,
		name: "Visa Card",
		details: "Expires 05/2026",
		isDefault: true,
	},
	{
		image: mastercard,
		name: "MasterCard",
		details: "Expires 08/2027",
		isDefault: false,
	},
	{
		image: mastercard,
		name: "MasterCard",
		details: "Expires 08/2027",
		isDefault: false,
	},
];

const PaymentMethods = () => {
	const handleEdit = (index: number) => {
		console.log(`Editing address at index ${index}`);
		// Example: Open a modal or navigate to an edit page
	};

	const handleDelete = (index: number) => {
		console.log(`Deleting address at index ${index}`);
		// Example: Send a DELETE request to the backend
		// fetch(`/api/addresses/${index}`, { method: 'DELETE' })
	};

	const handleSetDefault = (index: number) => {
		console.log(`Setting address at index ${index} as default`);
		// Example: Send a PUT request to the backend
		// fetch(`/api/addresses/${index}/set-default`, { method: 'PUT' })
	};

	return (
		<div className="">
			<h2 className="text-2xl sm:text-3xl font-medium text-[#1A1A1A] mt-6 sm:mt-10 mb-4 sm:mb-6">
				Payment Methods
			</h2>
			<div className="mx-auto mt-6 sm:mt-8 md:p-6 sm:p-10 bg-[#FFFFFF] md:border border-[#B3B3B3] rounded-[20px] ">
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
					{cardDetails.map((card, index) => (
						<div
							key={index}
							className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl border border-dashed border-[#B3B3B3] relative flex gap-4 items-center"
						>
							<div className="p-3 sm:p-4 border border-[#E5E5E5] rounded-xl aspect-square flex items-center justify-center">
								<img src={card.image} alt="" className="w-6 sm:w-8" />
							</div>
							<div className="flex-1">
								<h1 className="text-base md:text-lg lg:text-xl font-medium">
									{card.name}
								</h1>
								<p className="text-[#484848] text-sm sm:text-base mt-1 sm:mt-2 max-w-sm">
									{card.details}
								</p>
							</div>
							<div className="flex flex-col gap-2 items-end">
								<div className="flex items-center gap-2 sm:gap-4 absolute top-3 sm:top-5 right-2 sm:right-4">
									<Button
										variant="ghost"
										size="icon"
										className="size-6"
										onClick={() => handleEdit(index)} // Call edit handler
									>
										<ImPencil className="w-5 sm:w-6 h-5 sm:h-6 text-[#F04436]" />
									</Button>
									<Button
										variant="ghost"
										size="icon"
										className="size-6"
										onClick={() => handleDelete(index)} // Call delete handler
									>
										<MdOutlineDelete className="w-5 sm:w-6 h-5 sm:h-6 text-[#F04436]" />
									</Button>
								</div>
								{card.isDefault ? (
									<Badge className="absolute bottom-3 sm:bottom-4 right-2 sm:right-4 bg-[#FFF7EC] text-[#FCAB3F] border border-[#FCAB3F] text-xs sm:text-sm font-normal px-2 sm:px-3 py-1 rounded-lg">
										Default
									</Badge>
								) : (
									<Badge
										className="absolute bottom-3 sm:bottom-4 right-2 sm:right-4 bg-[#192D4E] text-[#E8EAED] border border-[#192D4E] text-xs sm:text-sm font-normal px-2 sm:px-3 py-1 rounded-lg"
										onClick={() => handleSetDefault(index)}
									>
										Set as Default
									</Badge>
								)}
							</div>
						</div>
					))}
					<div className="bg-[#FFFFFF] p-4 sm:p-6 rounded-xl border border-dashed border-[#B3B3B3] flex flex-col gap-2 items-center justify-center">
						<div className="p-2 bg-[#E5E5E5] rounded-full">
							<FaPlus className="w-4 sm:w-5 h-4 sm:h-5 text-[##1A1A1A]" />
						</div>
						<p className="text-[#666666] text-xs sm:text-sm font-normal text-center">
							Add new payment method (Credit card, Bank account, or Paypal)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentMethods;
