import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(links);


  return <nav>
    <a href="#home" key="home">home</a>
    <a href="#about" key="about">about</a>
    <a href="#projects" key="project">projects</a>
  </nav>;
}

export default NavBar;
