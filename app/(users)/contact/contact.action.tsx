'use server';

import { db } from "@/config/db";
// import bcrypt from "bcryptjs";

export type ActionState = {
  success: boolean;
  msg: string;
};

export const serverAction = async (
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> => {
  try {
    const fname = formData.get("fname") as string;
    const lname = formData.get("lname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // ✅ Validation
    if (!fname || !lname || !email || !password) {
      return { success: false, msg: "All fields are required" };
    }

    // ✅ Check duplicate email
    const [existing]: any = await db.execute(
      "SELECT id FROM user WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      return { success: false, msg: "Email already exists" };
    }

    // ✅ Hash password
    const hashedPassword = password;

    // ✅ Insert user
    await db.execute(
      "INSERT INTO user (fname, lname, email, password, role) VALUES (?, ?, ?, ?, ?)",
      [fname, lname, email, hashedPassword, "USER"]
    );

    return { success: true, msg: "User created successfully ✅" };

  } catch (error: any) {
    console.error("Server error:", error);
    return { success: false, msg: "User creation failed ❌" };
  }
};
