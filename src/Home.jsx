import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/Images/home.png";
import Commen from "./Commen";

const Home = () => {
  return(
    <>
  
  < Commen  name="Improve Your Skills to Join " imgsrc={web} visit='/service' btname="Get Started"/>
  </>
   
  )
}
export default Home;
