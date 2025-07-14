import React, { useState } from "react";
import CommonWrapper from "@/common/CommonWrapper";
import Breadcrumbs from "@/components/SellerDashboard/SellerProducts/Breadcrumbs";
import ProductCard from "@/components/SellerDashboard/SellerProducts/ProductCard";
import ProductNavbar from "@/components/SellerDashboard/SellerProducts/ProductNavbar";
import ProductSearch from "@/components/SellerDashboard/SellerProducts/ProductSearch";
import { ProductTable } from "@/components/SellerDashboard/SellerProducts/ProductTable";
import RevenueOverview from "@/components/SellerDashboard/SellerProducts/RevenueOverview";

import { useLocation } from "react-router-dom";
import { initialProducts, ProductFormData } from "./SellerOrder/SellerData";
import SellerOrderUpdateForm from "./SellerOrder/SellerOrderUpdateFrom";
import { toast } from "react-toastify";

const SellerProductsPage: React.FC = () => {
  const { pathname } = useLocation();
  const [productsList, setProductsList] =
    useState<ProductFormData[]>(initialProducts);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [editingProduct, setEditingProduct] = useState<ProductFormData | null>(
    null
  );
  const [searchText, setSearchText] = useState("");

  const [modalOpen, setModalOpen] = useState(false);

  const handleEdit = () => {
    if (selectedIds.length !== 1) {
      toast.error("Please select exactly one product to edit.");
    }
    const prod = productsList.find((p) => p.id === selectedIds[0]);
    if (!prod) return;
    setEditingProduct(prod);

    setModalOpen(true);
  };

  const handleDelete = () => {
    if (window.confirm("Delete selected products?")) {
      setProductsList((prev) =>
        prev.filter((p) => !selectedIds.includes(p.id))
      );
      setSelectedIds([]);
    }
  };

  const handleFormSubmit = async (data: ProductFormData) => {
    try {
      setProductsList((prev) =>
        prev.map((p) => (p.id === data.id ? { ...p, ...data } : p))
      );
      toast.success("Product updated successfully.");

      setSelectedIds([]);
      setModalOpen(false);
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  const content = (
    <>
      {pathname === "/seller-dashboard/all-products" ? (
        <Breadcrumbs title="Products" subtitle="All Products" />
      ) : (
        <ProductNavbar />
      )}
      <ProductCard />
      <ProductSearch
        searchText={searchText}
        onSearchChange={setSearchText}
        onEditClick={handleEdit}
        onDeleteClick={handleDelete}
      />
      <ProductTable
        searchText={searchText}
        productsList={productsList}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
      {pathname !== "/seller-dashboard/all-products" && <RevenueOverview />}

      {modalOpen && editingProduct && selectedIds.length === 1 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full bg-opacity-50 bg-black/80">
          <div className="bg-white p-4 sm:p-6 rounded-lg  overflow-y-auto max-h-[90vh] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%] mx-auto">
            <>
              <SellerOrderUpdateForm
                defaultValues={editingProduct}
                onSubmit={handleFormSubmit}
                onCancel={() => setModalOpen(false)}
              />
            </>
          </div>
        </div>
      )}
    </>
  );

  return pathname === "/seller-dashboard/products" ? (
    content
  ) : (
    <CommonWrapper>{content}</CommonWrapper>
  );
};

export default SellerProductsPage;
