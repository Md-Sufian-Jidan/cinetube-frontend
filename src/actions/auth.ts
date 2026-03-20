"use server";

import { api } from "@/api/axios";
import { LoginInput, RegisterInput } from "@/schemas/auth";
import { cookies } from "next/headers";

export async function loginAction(data: LoginInput) {
  try {
    const response = await api.post("/auth/login", data);
    const { token } = response.data.data;

    // Set cookie for server-side auth
    (await cookies()).set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1 week
    });

    return { success: true, token };
  } catch (error: any) {
    return { success: false, error: error.response?.data?.message || "Login failed" };
  }
}

export async function registerAction(data: RegisterInput) {
  try {
    const response = await api.post("/auth/register", data);
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.response?.data?.message || "Registration failed" };
  }
}

export async function logoutAction() {
  (await cookies()).delete("token");
  return { success: true };
}
