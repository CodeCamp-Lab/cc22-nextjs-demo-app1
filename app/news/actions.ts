"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createNews(formData: FormData) {
    const title = String(formData.get("tile") || "");
    const summary = String(formData.get("summary") || "");
    const content = String(formData.get("content") || "");

    await prisma.news.create({
        data: {
            title,
            summary,
            content
        }
    });

    revalidatePath("/news");
    redirect("/news")
}
