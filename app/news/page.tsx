import Link from "next/link";
import { getNews } from "./services";

export default async function NewsPage() {
  const newsList = await getNews();

  return (
    <div className="px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">News</h1>
        <Link
          href="/news/create"
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Create News
        </Link>
      </div>
      <div className="mt-8 space-y-4">
        {newsList.map((news: any) => (
          <div key={news.id}>
            <Link href={`/news/${news.id}`}
            className="block rounded border p-4 hover:bg-gray-50"
            >
              <h2 className="text-xl font-semibold">{news.title}</h2>
              <p className="mt-2 text-gray-600">{news.summary}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
