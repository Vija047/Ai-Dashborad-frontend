import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AvatarsPage from "../src/components/AvatarCard"; // Create this page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/avatars" element={<AvatarsPage />} /> {/* Define /avatars route */}
      </Routes>
    </Router>
  );
}

export default App;
