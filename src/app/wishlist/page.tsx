"use client";

import { WishlistContext } from "@/Context/WishlistContext";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useContext } from "react";
import { toast } from "sonner";
import Loading from "../loading";

const Wishlist = () => {
  const { wishlist, isLoading, removeFromWishlist, clearWishlist } =
    useContext(WishlistContext);

  async function handleRemove(id: string) {
    const data = await removeFromWishlist(id);
    if (data?.status === "success") {
      toast.success("Item removed from wishlist");
    } else {
      toast.error("Failed to remove item");
    }
  }

  async function handleClear() {
    const data = await clearWishlist();
    if (data?.status === "success") {
      toast.success("Wishlist cleared");
    } else {
      toast.error("Failed to clear wishlist");
    }
  }

  if (isLoading) return <Loading />;

  return (
    <div className="w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 bg-slate-100">
      <div className="p-5">
        <h1 className="text-2xl font-bold">My Wishlist:</h1>

        

        <div className="allProducts">
          {Array.isArray(wishlist) && wishlist.length > 0 ? (
            wishlist.map((product: any, idx: number) => (
              <div
                key={product._id || idx}
                className="flex items-center justify-between py-3 border-b-[1px] border-green-700/35"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={
                      product.imageCover ||
                      product.product?.imageCover ||
                      "/fallback.png"
                    }
                    alt={product.title || product.product?.title || "Wishlist item"}
                    height={200}
                    width={200}
                  />

                  <div>
                    <h1>{product.title || product.product?.title}</h1>
                    <p className="my-3 text-green-700">
                      Price : {product.price || product.product?.price}
                    </p>

                    <Button
                      onClick={() =>
                        handleRemove(product._id || product.product?._id)
                      }
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='flex justify-center items-center h-screen'>
         <i className='text-red-600 text-3xl font-bold'>No Data To Display</i>
        
    </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
