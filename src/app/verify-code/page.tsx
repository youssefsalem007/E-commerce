"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { redirect, useRouter } from "next/navigation";

export default function VerifyCodePage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resetCode: code }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Code verified! Now you can reset your password.");
        router.push("/reset-password");
      } else {
        alert(data.message || "Invalid code");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded w-96">
        <h1 className="text-xl font-bold mb-4">Verify Code</h1>
        <input
          type="text"
          className="border w-full p-2 rounded mb-4"
          placeholder="Enter the code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "Verifying..." : "Verify Code"}
        </Button>
      </form>
    </div>
  );
}
