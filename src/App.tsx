import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<PostPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
