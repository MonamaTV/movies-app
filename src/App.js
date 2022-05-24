import "./App.css";
import Home from "./components/pages/Home/Home";
import Layout from "./components/ui/Layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/pages/Movies/Movies";
import Shows from "./components/pages/Shows/Shows";
import Movie from "./components/pages/Movies/Movie/Movie";
import Show from "./components/pages/Shows/Show/Show";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movie" element={<Movie />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/:show" element={<Show />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;
