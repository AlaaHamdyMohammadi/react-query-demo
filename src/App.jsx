import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SuperHeroes from "./pages/SuperHeroes";
import RQSuperHeroes from "./pages/RQSuperHeroes";

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/super-heroes">SuperHeroes</Link>
          </li>
          <li>
            <Link to="/rq-super-heroes">RQSuperHeroes</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heroes" element={<SuperHeroes />} />
        <Route path="/rq-super-heroes" element={<RQSuperHeroes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
