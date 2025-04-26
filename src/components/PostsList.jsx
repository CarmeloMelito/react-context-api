import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostCard from "./PostCard";

export default function PostList() {
  const { posts, loading } = useContext(PostContext);

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
