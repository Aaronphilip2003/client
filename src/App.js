import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Main from "./pages/Main";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
