import SearchInput from "@/components/SearchInput";

export default async function Posts({ searchParams }) {
  const { q, limit = 30, skip = 0 } = searchParams;
  let res = await fetch(
    q
      ? `https://dummyjson.com/posts/search?q=${q}&limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`
  );
  res = await res.json();

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl my-4">Posts</h1>
      <SearchInput />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {res.posts.map((post) => (
          <div key={post.id} className="shadow rounded p-3">
            <h1 className="font-semibold flex-grow">{post.title}</h1>
            <div className="flex gap-3 text-sm">
              <div className="flex">Likes : {post.reactions.likes}</div>
              <div className="flex">Dislikes : {post.reactions.dislikes}</div>
              <div className="flex">Views : {post.views}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
