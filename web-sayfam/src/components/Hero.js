import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import Header from "./Header";

const Hero = () => {
  const { postData, loading, error } = useContext(DataContext);

  const { description, imageURL, header, links } = postData;

  return (
    <div>
      <Header />
      <h1>{header}</h1>
      <p>{description}</p>
      <img src={imageURL} />
      {/* //maplenecek// */}
      <p>{links[0]}</p>
      <p>{links[1]}</p>
    </div>
  );
};
export default Hero;
