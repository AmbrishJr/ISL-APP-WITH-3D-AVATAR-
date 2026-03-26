import React from "react";
import "../App.css";
import "font-awesome/css/font-awesome.min.css";
import Services from "../Components/Home/Services";
import Intro from "../Components/Home/Intro";
import Masthead from "../Components/Home/Masthead";

function Home() {
  return (
    <main className="page enter">
      <Masthead />
      <Intro />
      <Services />
    </main>
  );
}

export default Home;
