'use server';

import { db } from "@/config/db";
import { redirect } from "next/navigation";

type ActionState = {
  success: boolean;
  msg: string;
};

export const serverAction = async (
  prevState: any,
  formData: FormData
): Promise<ActionState> => {
  try {
    const { fname, lname, email, password } = Object.fromEntries(
      formData.entries()
    ) as {
      fname: string;
      lname: string;
      email: string;
      password: string;
    };

    if (!fname || !lname || !email || !password) {
      return { success: false, msg: "All fields are required" };
    }

    const hashedPassword = password;

    await db.execute(
      "INSERT INTO user (fname, lname, email, password, role) VALUES (?, ?, ?, ?, ?)",
      [fname, lname, email, hashedPassword, "USER"]
    );

    return { success: true, msg: "User created successfully" };
    // redirect("/")
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error; // ✅ rethrow redirect
    }

  console.error("server error", error);
  return { success: false, msg: "User creation failed" };
}
};
