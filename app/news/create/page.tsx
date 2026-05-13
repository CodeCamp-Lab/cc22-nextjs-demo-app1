import { createNews } from "../actions"

export default function CreateNewPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Create News</h1>

      <form action={createNews} className="mt-8 space-y-4">
        <input
          name="title"
          placeholder="Title"
          className="w-full rounded border p-2"
        />

        <input
          name="summary"
          placeholder="Summary"
          className="w-full rounded border p-2"
        />

        <textarea
          name="content"
          placeholder="Content"
          className="h-40 border w-full rounded p-2"
        />

        <button className="rounded bg-blue-600 text-white px-4 py-2 cursor-pointer">
          Save
        </button>
      </form>
    </div>
  );
}
