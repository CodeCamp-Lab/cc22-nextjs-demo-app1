import prisma from "@/lib/prisma";

export async function getNews() {
    const news = await prisma.news.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    return news;
}

export async function getNewsById(id: number) {
    const news = await prisma.news.findUnique({
        where: {
            id
        }
    })

    return news;
}