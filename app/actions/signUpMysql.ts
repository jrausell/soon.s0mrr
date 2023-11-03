"use server";
import prisma from "@/db";
import { validateEmail } from "./util";

export async function signUpMysql(email: string) {
  if (!email || !validateEmail(email))
    return {
      error: true,
      message: "Please enter a valid email",
    };

  try {
    // insert email in Subscription table
    const subscription = await prisma.subscription.create({
      data: {
        email,
      },
    });

    return subscription;
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Error signing up, possible duplicate email",
      error_e: e,
    };
  }
}
