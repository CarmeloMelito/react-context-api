import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import ChiSiamo from "./pages/ChiSiamo";
import Layout from "./layout/Layout";
import DettagliPost from "./pages/DettagliPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:id" element={<DettagliPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
