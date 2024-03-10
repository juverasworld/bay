import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import TypewriterText from "./TypewriterText";

// template_dvkhm9j
// service_rbeowvq
// Y8DTsG0HdRIKPXils
const Contact = () => {
  

  return (
    <div
      className={`xl:mt-5 flex xl:flex-row flex-col-reverse gap-5 overflow-hidden `}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] p-3 lg:p-8 rounded-2xl '
      >
   <TypewriterText/>
      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[250px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
