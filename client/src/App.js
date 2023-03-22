import Init from "./pages/initial";
import Login from "./pages/login";
import Post from './pages/post';
import Signup from "./pages/signup";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Init />} />
            <Route path="/login" element={<Login />} />
            <Route path="/post" element={<Post />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
