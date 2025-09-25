"use server";

import { getToken } from "@/utilities/token";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

interface MyToken {
  id: string;
  [key: string]: any; 
}

export async function getUserOrders() {
  const token = await getToken();

  if (!token) {
    throw new Error("User not authenticated");
  }

  const decoded = jwtDecode<MyToken>(token as string);
  const { id } = decoded;

  const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${id}`);

  return data;
}
