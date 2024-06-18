"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    const name = formData.get("name");

    if (name) {
      router.push(`/list?name=${name}`);
    }
  };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      action={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <button className="cursor-pointer">
        <Image
          src="/search.png"
          alt="This is a search icon"
          width={16}
          height={16}
        />
      </button>
    </form>
  );
};

export default SearchBar;
