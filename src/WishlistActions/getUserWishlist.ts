"use server";

import { getToken } from "@/utilities/token";
import axios from "axios";

export async function getUserWishlistAction() {
  const token = await getToken();

  if (!token) throw new Error("User not authenticated");

  const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
    headers: { token: token as string },
  });

  return data.data; 
}
