import "./index.css";

let galleryImages = [
  "https://picsum.photos/id/0/1080/1080",
  "https://picsum.photos/id/78/1080/1080",
  "https://picsum.photos/id/133/1080/1080",
  "https://picsum.photos/id/10/1080/1080",
];

const imageVisualization0 = () => {
  window.open(galleryImages[0], "_blank");
};
const imageVisualization1 = () => {
  window.open(galleryImages[1], "_blank");
};
const imageVisualization2 = () => {
  window.open(galleryImages[2], "_blank");
};
const imageVisualization3 = () => {
  window.open(galleryImages[3], "_blank");
};

const Gallery = () => {
  return (
    <div className="Gallery">
      <div className="imgCont">
        <img
          onClick={imageVisualization0}
          src={galleryImages[0]}
          alt="gallery img"
        />
      </div>
      <div className="imgCont">
        <img
          onClick={imageVisualization1}
          src={galleryImages[1]}
          alt="gallery img"
        />
      </div>
      <div className="imgCont">
        <img
          onClick={imageVisualization2}
          src={galleryImages[2]}
          alt="gallery img"
        />
      </div>
      <div className="imgCont">
        <img
          onClick={imageVisualization3}
          src={galleryImages[3]}
          alt="gallery img"
        />
      </div>
    </div>
  );
};

export default Gallery;
