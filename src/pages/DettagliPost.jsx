import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function DettagliPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Caricamento in corso</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/post">Torna alla lista prodotti</Link>
    </div>
  );
}
