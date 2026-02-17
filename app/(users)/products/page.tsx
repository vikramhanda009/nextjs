import ProductList from "./productlist";

type ProductsPageProps = {
  searchParams?: {
    category?: string;
    sort?: string;
    page?: string;
  };
};

const Products = async ({ searchParams }: ProductsPageProps) => {
  const category = searchParams?.category ?? "all";
  const sort = searchParams?.sort ?? "all";
  const page = searchParams?.page ?? "1";

  console.log("inner", searchParams);

  return (
    <h2 className="center red">
      server Show {category} products, sorted By {sort} Page No {page}
      <ProductList />
    </h2>
  );
};

export default Products;
