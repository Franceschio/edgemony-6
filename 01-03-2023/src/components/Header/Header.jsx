import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <ul>
        <a href="https://www.google.com/">
          <li>Go to Google</li>
        </a>
        <a href="https://www.youtube.com/">
          <li>Go to Youtube</li>
        </a>
        <a href="https://www.github.com/">
          <li>Go to GitHub</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
