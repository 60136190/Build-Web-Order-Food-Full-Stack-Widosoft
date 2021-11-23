import React from "react";
import { ScrollTops } from "../../Styles/ScrollTops";
const ScrollTop = () => {
  return (
    <>
      <ScrollTops>
        <a href="#home" className="fas fa-angle-up active" id="scroll-top"></a>
      </ScrollTops>
    </>
  );
};

export default ScrollTop;