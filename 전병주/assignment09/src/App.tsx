import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainPage from "./MainPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인 페이지 */}
        <Route path="/" element={<Login />} />

        {/* 메인 페이지 */}
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
