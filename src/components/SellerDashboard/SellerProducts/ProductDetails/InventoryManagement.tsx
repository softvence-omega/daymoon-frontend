import { Plus } from "lucide-react";
import { GrHistory } from "react-icons/gr";

import { InventoryData, InventoryManagementProps } from "./type/inventory";
import StockProgressBar from "./StockProgressBar";
import StockStatusBadge from "./StockStatusBadge";
import CommonHeader from "@/common/CommonHeader";
import SubHeader from "@/common/SubHeader";
import ButtonWithIcon from "@/common/ButtonWithIcon";

const InventoryManagement = ({
  inventory,
  onUpdateStock,
  onViewHistory,
}: InventoryManagementProps) => {
  const defaultInventory: InventoryData = {
    availableStock: 250,
    maxStock: 300,
    stockStatus: "In Stock",
    lowStockThreshold: 50,
    lastRestock: "20 June, 2025",
  };

  const inventoryData = inventory || defaultInventory;

  const getStockColor = (stock: number, threshold: number) => {
    return stock <= threshold ? "text-[#009CDE]" : "text-[#08AD36]";
  };

  const handleUpdateStock = () => {
    onUpdateStock?.();
  };

  const handleViewHistory = () => {
    onViewHistory?.();
  };

  return (
    <div className=" bg-white border border-foundation-white  rounded-2xl ">
      <CommonHeader className="!text-header p-6  border-b border-foundation-white">
        Inventory Management
      </CommonHeader>

      <div className="space-y-8 p-6 ">
        {/* Available Stock */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <SubHeader>Available Stock</SubHeader>
            <div className="text-right">
              <span
                className={`text-2xl font-bold ${getStockColor(
                  inventoryData.availableStock,
                  inventoryData.lowStockThreshold
                )}`}
              >
                {inventoryData.availableStock}
              </span>
              <span className="text-xl text-gray-500 ml-2">Units</span>
            </div>
          </div>
          <StockProgressBar
            current={inventoryData.availableStock}
            max={inventoryData.maxStock}
            threshold={inventoryData.lowStockThreshold}
          />
        </div>

        {/* Stock Information */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <SubHeader>Stock Status</SubHeader>
            <StockStatusBadge status={inventoryData.stockStatus} />
          </div>

          <div className="flex items-center justify-between">
            <SubHeader>Low Stock Threshold</SubHeader>
            <SubHeader className="!text-base !text-jet-black font-semibold ">
              {inventoryData.lowStockThreshold} Units
            </SubHeader>
          </div>

          <div className="flex items-center justify-between">
            <SubHeader>Last Restock</SubHeader>
            <SubHeader className="!text-base !text-jet-black font-semibold ">
              {inventoryData.lastRestock}
            </SubHeader>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-8">
          <ButtonWithIcon
            onClick={handleUpdateStock}
            icon={Plus}
            className="!text-white bg-sunset-orange border-transparent !px-5  flex-1"
          >
            Update Stock
          </ButtonWithIcon>
          <ButtonWithIcon
            onClick={handleViewHistory}
            icon={GrHistory}
            className="text-sunset-orange border-sunset-orange border !px-5 flex-1 justify-center gap-2"
          >
            History
          </ButtonWithIcon>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;
