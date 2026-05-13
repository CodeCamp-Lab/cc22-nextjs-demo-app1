import Link from "next/link";

export default function NewsPage() {
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
    </div>
  );
}
