import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { UserProfilePage } from "./pages/userProfilePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userProfile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  );
}

