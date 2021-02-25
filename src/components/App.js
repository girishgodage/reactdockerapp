import React from "react";

import "./App.css";
import ReactImg from "../assets/react.png";
import DockerImg from "../assets/docker.png";

const App = () => {
  return (
    <div className="container">
      <img src={ReactImg} alt="ReactImg" className="ReactImg" />
      <h1 className="title"> I Love React & Docker</h1>
      <img src={DockerImg} alt="DockerImg" className="DockerImg" />
    </div>
  );
};

export default App;
