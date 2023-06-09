import React, { useState } from "react";
import "./Home.css";
import { AdBanner, YoutubeLogo } from "../../Assets/ImageIndex";
import Video from "./Video";
import VideoData from "./Videos.json";

const Home = () => {
  const categoryData = [
    "All",
    "Gaming",
    "Javascript",
    "Python",
    "Music",
    "Sports",
    "Mixes",
    "Lives",
    "Comedy",
    "Programming",
    "Hillsong Worship",
    "Couples",
    "Teenage Programmer",
    "T-Series",
  ];

  const [cateogry, setCateogry] = useState("All");
  const { videos } = VideoData;
  const [onDisplay, setonDisplay] = useState(videos);

  const handleCategory = (tag) => {
    setCateogry(tag);
    if (tag === "All") {
      setonDisplay(videos);
      return;
    }
    setonDisplay(videos.filter((video) => video.category === tag));
  };

  return (
    <>
      <div className="homeContainer" id="homeContainer">
        <div className="categoryContainer">
          {categoryData.map((tab) => {
            return (
              <h3
                className={`categoryTab ${cateogry === tab && "active"}`}
                key={tab}
                onClick={() => handleCategory(tab)}
              >
                {tab}
              </h3>
            );
          })}
        </div>
        <div className="videoContainer">
          {onDisplay.map((video) => {
            return <Video video={video} key={video.image} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
