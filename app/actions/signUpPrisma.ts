"use server";
import prisma from "@/db";
import { validateEmail } from "./util";

export async function signUpPrisma(email: string) {
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

    if ("error" in subscription) {
      return {
        success: false,
        message: "Error create",
        errm: JSON.stringify(subscription?.error ?? subscription),
      };
    }

    return subscription;
  } catch (e) {
    return {
      success: false,
      message: "Error signing up, possible duplicate email",
      errm: JSON.stringify(e),
    };
  }
}
