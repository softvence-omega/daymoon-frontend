import Breadcrumbs from "./Breadcrumbs";

import ProductSearch from "./ProductSearch";
import { ProductTable } from "./ProductTable";
import Card from "../Dashboard/Card";

const AllProduct = () => {
  return (
    <>
      <div className="pb-6">
        <Breadcrumbs title="Products" subtitle="All Product" />
      </div>
      <Card />
      <div className="py-12">
        <ProductSearch />
      </div>

      <ProductTable />
    </>
  );
};

export default AllProduct;
