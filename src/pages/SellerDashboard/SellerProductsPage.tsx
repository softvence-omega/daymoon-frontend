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
    toast.error("Product updated successfully.");
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

  const handleFormSubmit = (data: ProductFormData) => {
    setProductsList((prev) =>
      prev.map((p) => (p.id === data.id ? { ...p, ...data } : p))
    );
    setSelectedIds([]);
    setModalOpen(false);
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
        searchText=""
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

      {modalOpen && editingProduct && (
        <div className="w-full fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[50%] mx-auto">
            <CommonWrapper>
              <SellerOrderUpdateForm
                defaultValues={editingProduct}
                onSubmit={handleFormSubmit}
                onCancel={() => setModalOpen(false)}
              />
            </CommonWrapper>
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
