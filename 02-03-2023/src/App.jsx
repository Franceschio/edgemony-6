import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import PostsList from "./components/PostsList/PostsList";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Slider from "./components/Slider";

const App = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <div className={`App ${isDarkMode && "InDark"}`}>
      <Header />
      <button
        className="darkModeSet"
        onClick={() => setDarkMode((pre) => !pre)}
      >
        Dark mode: {isDarkMode ? "on" : "off"}
      </button>
      <Hero />
      <SectionTitle text="Gallery" />
      <Gallery />
      <SectionTitle text="Post" />
      <PostsList />
      <SectionTitle text="Best images from our users" />
      <Slider />
      <Footer />
    </div>
  );
};

export default App;
