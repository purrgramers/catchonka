import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CreateProfile from "./pages/CreateProfile";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats/:catId" element={<Profile />} />
        <Route path="/cats/create" element={<CreateProfile />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
