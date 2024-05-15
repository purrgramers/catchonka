import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CreateProfile from "./pages/CreateProfile";
import EditProfile from "./pages/EditProfile"
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats/:catId" element={<Profile />} />
        <Route path="/cats/create" element={<CreateProfile />} />
        <Route path="/cats/edit/:catId" element={<EditProfile />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
