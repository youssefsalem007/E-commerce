"use server";

import { getToken } from "@/utilities/token";
import axios from "axios";

export async function addToWishlistAction(productId: string) {
  const token = await getToken();

  if (!token) throw new Error("User not authenticated");

  const { data } = await axios.post(
    `https://ecommerce.routemisr.com/api/v1/wishlist`,
    { productId },
    { headers: { token: token as string } }
  );

  return data;
}
