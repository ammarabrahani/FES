import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Blog from "../src//pages/Blog";
import CategoryPages from "../src/pages/CategoryPage";
import Detail from "../src/pages/Details";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/blog" element={<Blog />}></Route>
            <Route path="/blog/:category" element={<CategoryPages />} />

            <Route path="/blog/:category/details" element={<Detail />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
