"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItem = true;

  return (
    <div className="w-max absolute p-4 rounded-md bg-white top-12 right-0 flex flex-col gap-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
      {!cartItem ? (
        <div>Cart is empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
       <div className="flex flex-col gap-8">
         <div className="flex gap-4">
          <Image
            src="https://images.unsplash.com/photo-1712847332442-87725fbd3091?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
            alt="This is notification icon"
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="flex flex-col justify-between w-full">
            <div className="">
              <div className="flex items-center justify-between gap-8">
                <h3 className="font-semibold">Product Name</h3>
                <span className="p-1 bg-gray-50 rounded-sm">$49</span>
              </div>
              <div className="text-sm text-gray-500">
                Available
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Qty. 2</span>
              <span className="text-gray-500">Remove</span>
            </div>
          </div>
        </div>
       </div>
       <div>
        <div className="flex items-center justify-between font-semibold">
          <span>Subtotal</span>
          <span>$49</span>
        </div>
        <p className="text-sm text-gray-500 mt-2 mb-4">Shipping cost and taxes calculated at checkout.</p>
        <div className="flex justify-between text-sm">
          <button className="rounded-md py-3 px-4 ring-1 ring-gray-300 cursor-pointer">View Cart</button>
          <button className="rounded-md py-3 px-4 bg-black text-white cursor-pointer">Checkout</button>
        </div>
       </div>
       </>
      )}
    </div>
  );
};

export default CartModal;
