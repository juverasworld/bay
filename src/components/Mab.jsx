// import React from 'react'
import { StarsCanvas } from './canvas'
import Contact from "./Contact"
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
// import Accordion from "../Accordion";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Mab = () => {

    const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;
    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  
  return (
    <div>
         <div ref={ref} className="relative  app z-0 black-gradient">
            <Contact />
            <StarsCanvas />
          </div>
    </div>
  )
}

export default Mab