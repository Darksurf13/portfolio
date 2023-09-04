import React, { useState, useEffect, useRef } from "react";
import "../styles/Slideshow.css";
import video1 from "../assets/VIDEO01maquette.mp4";
import video2 from "../assets/VIDEO02implementationHTML5CSS3.mp4";
import video3 from "../assets/VIDEO03javascript.mp4";
import video4 from "../assets/VIDEO04solutionTechnique.mp4";
import video5 from "../assets/VIDEO05optimisationDebogage.mp4";
import video6 from "../assets/VIDEO06react.mp4";
import video7 from "../assets/VIDEO07backend.mp4";
import video8 from "../assets/VIDEO08projetpersonnel.mp4";
import thumbnail1 from "../assets/02implementation.jpg";
import thumbnail2 from "../assets/01maquetteFigma.jpg";
import thumbnail3 from "../assets/03JS.jpg";
import thumbnail4 from "../assets/04solutiontechnique.jpg";
import thumbnail5 from "../assets/05optimisationdebogage.jpg";
import thumbnail6 from "../assets/06react.jpg";
import thumbnail7 from "../assets/07backend.jpg";
import thumbnail8 from "../assets/08projetperso.jpg";
function Slideshow() {
  const videos = [
    { video: video1, thumbnail: thumbnail2 },
    { video: video2, thumbnail: thumbnail1 },
    { video: video3, thumbnail: thumbnail3 },
    { video: video4, thumbnail: thumbnail4 },
    { video: video5, thumbnail: thumbnail5 },
    { video: video6, thumbnail: thumbnail6 },
    { video: video7, thumbnail: thumbnail7 },
    { video: video8, thumbnail: thumbnail8 },
    // Ajoutez plus d'objets vidéo comme celui-ci
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const videoRefs = useRef([]); // Un tableau pour stocker les références vidéo

  useEffect(() => {
    let timer;
    if (isTimerActive) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === videos.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }

    return () => clearInterval(timer);
  }, [isTimerActive, videos.length]);

  const handlePlay = () => {
    setIsTimerActive(false);
  };

  const handleThumbnailOrArrowClick = (newIndex) => {
    if (videoRefs.current[currentIndex]) {
      videoRefs.current[currentIndex].load(); // Réinitialise la vidéo actuelle
    }
    setCurrentIndex(newIndex);
    setIsTimerActive(true);
  };

  return (
    <div className="slideshow-container">
      <div className="slideshow">
        <div
          className="arrow prev"
          onClick={() =>
            handleThumbnailOrArrowClick(
              currentIndex === 0 ? videos.length - 1 : currentIndex - 1
            )
          }
        >
          &#10094;
        </div>

        {videos.map(({ video, thumbnail }, index) => (
          <div
            className={`slide ${currentIndex === index ? "active" : ""}`}
            key={index}
          >
            <video
              ref={(el) => (videoRefs.current[index] = el)} // Stocke la référence
              controls
              width="100%"
              height="100%"
              poster={thumbnail}
              onPlay={handlePlay}
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        ))}

        <div
          className="arrow next"
          onClick={() =>
            handleThumbnailOrArrowClick(
              currentIndex === videos.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          &#10095;
        </div>
      </div>

      <div className="thumbnails">
        {videos.map(({ thumbnail }, index) => (
          <div
            className={`thumbnail ${currentIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => handleThumbnailOrArrowClick(index)}
          >
            <img
              src={thumbnail}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
