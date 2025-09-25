"use client";

import { addToWishlistAction } from "@/WishlistActions/addToWishlist";
import { getUserWishlistAction } from "@/WishlistActions/getUserWishlist";
import { removeFromWishlistAction } from "@/WishlistActions/removeFromWishlist";
import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext({} as any);

const WishlistContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function addToWishlist(id: string) {
    try {
      const data = await addToWishlistAction(id);
      await getUserWishlist();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFromWishlist(id: string) {
    try {
      const data = await removeFromWishlistAction(id);
      await getUserWishlist();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserWishlist() {
    setIsLoading(true);
    try {
      const data = await getUserWishlistAction();
      setWishlist(data.data ? data.data : data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUserWishlist();
  }, []);

  const numOfWishlist = wishlist.length; 

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isLoading,
        numOfWishlist, 
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
