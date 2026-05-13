"use server"

import { redirect } from "next/navigation";
import {revalidatePath} from "next/cache";

export async function createPost(formData: FormData) {
  const title = formData.get("title");
  const content = formData.get("content");

  console.log("New Post:", { title, content });

  revalidatePath("/");
  redirect("/");
}
