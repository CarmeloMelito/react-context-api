import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>

      <Link to={`/post/${post.id}`}>Leggi di più</Link>
    </div>
  );
}
