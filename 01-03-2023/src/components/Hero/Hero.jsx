import "./index.css";

const Hero = () => {
  return (
    <div className="Hero">
      <img src="https://picsum.photos/id/20/1080/1080" alt="heroImg" />
      <div className="heroOverlay">
        <h3>Il miglior luogo per condividere i propri pensieri!</h3>
      </div>
    </div>
  );
};

export default Hero;
