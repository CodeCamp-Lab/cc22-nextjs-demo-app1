import { createPost } from "./actions";

export default function CreatePostPage() {
  return (
    <div className="px-6 py-12">
      <h1 className="text-2xl font-bold mb-8">Create Post</h1>
      <form action={createPost} className="space-y-3">
        <div>
          <p>Title:</p>
          <input name="title" className="border p-2 rounded" />
        </div>

        <div>
          <p>Content</p>
          <textarea name="content" className="border p-2 rounded" />
        </div>

        <button className="border rounded p-2 cursor-pointer bg-blue-600 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
