import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PostsPage from "./pages/PostsPage";
import ChiSiamo from "./pages/ChiSiamo";
import Layout from "./layout/Layout";
import DettagliPost from "./pages/DettagliPost";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <>
      <PostProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/post" element={<PostsPage />} />
              <Route path="/post/:id" element={<DettagliPost />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </>
  );
}

export default App;
