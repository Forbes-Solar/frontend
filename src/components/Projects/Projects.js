import React from "react";
import Gallery from "react-photo-gallery";
import ImageWithCaption from "../ImageCaption/ImageCaption";
import "../../styles.css"
import { photos } from "../../assets/images/Photos";

 function Projects () {
  const imageRenderer = ({ index, left, top, key, photo }) => (
    <ImageWithCaption
      key={key}
      margin={"2px"}
      index={index}
      photo={photo}
      left={left}
      top={top}
    />
  );

  return (
    <div className="App">

        <h1 style={{color:"#FFA500", fontWeight: "bold",}}>Our Projects</h1>
      <Gallery photos={photos} renderImage={imageRenderer}></Gallery>
    </div>
  );
}

export default Projects

