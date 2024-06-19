import Image from "next/image";
import Link from "next/link";

const ProductItem = () => {
  return (
    <Link
      href={"/test"}
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
    >
      <div className="relative w-full h-80">
        <Image
          src="https://images.unsplash.com/photo-1712847332442-87725fbd3091?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-colors ease-in-out duration-500"
        />
        <Image
          src="https://images.unsplash.com/photo-1712847333062-f641820692b0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Product Name</span>
        <span className="font-semibold">$49</span>
      </div>
      <div className="text-sm text-gray-500">My description</div>
      <button className="rounded-2xl ring-1 ring-orange text-orange w-max py-2 px-4 text-xs hover:bg-orange hover:text-white">
        Add to cart
      </button>
    </Link>
  );
};

export default ProductItem;
