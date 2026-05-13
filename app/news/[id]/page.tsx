import Link from "next/link";
import { getNewsById } from "../services";
import { use } from "react";
import { notFound } from "next/navigation";
import { getNewsMetadata } from "../services/getNewsMetadata";

type NewsDetailPageProp = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: NewsDetailPageProp) {
  const { id } = await params;
  return getNewsMetadata(+id);
}

export default function NewsDetailPage({ params }: NewsDetailPageProp) {
  const { id } = use(params);
  const news = use(getNewsById(+id));

  if (!news) {
    notFound();
  }

  return (
    <div>
      <Link href="/news" className="text-blue-600 hover:underline">
        Back to News
      </Link>
      <article className="mt-8">
        <h1 className="text-3xl font-bold">{news.title}</h1>
        <p className="mt-4 text-gray-600">{news.summary}</p>
        <div className="mt-8 leading-7">{news.content}</div>
      </article>
    </div>
  );
}
