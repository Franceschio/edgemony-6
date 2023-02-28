import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PostsList from "./components/PostsList/PostsList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <PostsList />
      <Footer />
    </div>
  );
};

export default App;
