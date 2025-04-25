import { useEffect, useState } from "react";
//AXIOS
import axios from "axios";
import { Link } from "react-router-dom";

export default function post() {
  const [posts, setPosts] = useState([]);

  function getPosts() {
    //AXIOS
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data).catch((err) => console.error(err));
    });
  }

  useEffect(getPosts, []);

  return (
    <>
      <h1>Prodotti</h1>
      {/* POST MAP */}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>Dettaglio {post.id}</p>
          <Link to={`/post/${post.id}`}>Leggi di più</Link>
        </div>
      ))}
    </>
  );
}
