import CategoryItem from "./CategoryItem";
import ProductItem from "./ProductItem";

const CategoryList = () => {
  return (
    <div className="mt-24">
      <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
      <div className="px-4 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 md:gap-8">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
