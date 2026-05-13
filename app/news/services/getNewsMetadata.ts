import type { Metadata } from "next";
import { getNewsById } from ".";

export async function getNewsMetadata(id: number): Promise<Metadata> {
    const news = await getNewsById(id);

    if(!news) {
        return {
            title: "News Not found",
            description: "This new article does not exist"
        }
    }

    return {
        title: news.title,
        description: news.summary
    }
}