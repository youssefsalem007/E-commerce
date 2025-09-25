"use client";

import { Button } from "@/components/ui/button";
import { WishlistContext } from "@/Context/WishlistContext";
import React, { useContext } from "react";
import { toast } from "sonner";

const AddWishlistCard = ({ id }: { id: string }) => {
  const { addToWishlist } = useContext(WishlistContext);

  async function handleAddToWishlist() {
    const data = await addToWishlist(id);

    if (data?.status === "success") {
      toast.success("Item added to wishlist", {
        duration: 3000,
        position: "top-center",
      });
    } else {
      toast.error("Failed to add to wishlist", {
        duration: 3000,
        position: "top-center",
      });
    }
  }

  return (
    <div>
      <Button
        variant="default"
        className="w-full"
        onClick={handleAddToWishlist}
      >
        Add To Wishlist
      </Button>
    </div>
  );
};

export default AddWishlistCard;
