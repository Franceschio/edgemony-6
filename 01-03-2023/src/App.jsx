import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import PostsList from "./components/PostsList/PostsList";
import SpecialsPosts from "./components/specialsPosts/specialsPost";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SectionTitle text="Gallery" />
      <Gallery />
      <SectionTitle text="Post" />
      <PostsList />
      <SectionTitle text="Post speciali" />
      <SpecialsPosts />
      <Footer />
    </div>
  );
};

export default App;
