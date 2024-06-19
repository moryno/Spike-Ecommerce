import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryItem = () => {
  return (
  
        <Link
          href={"/list?cat=test"}
          className="w-full flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
        >
       <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://images.unsplash.com/photo-1712847333062-f641820692b0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              fill
              sizes="20vw"
              className="object-cover rounded-md"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Category Name</h1>
        </Link>
  
  );
};

export default CategoryItem;
