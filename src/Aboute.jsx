import React from "react";

import web from "../src/Images/aboute.jpg";
import Commen from "./Commen";

const Aboute = () => {
  return(
    <>
  < Commen  name="Welcome to Aboute page" imgsrc={web} visit='/contact' btname="Contact Now"/>
    </>
  )
}
export default Aboute;
