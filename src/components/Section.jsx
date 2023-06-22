import { color, motion } from "framer-motion";
import React from "react";

const Section = ({
  h3,
  text,
  btnText,
  imgSrc,
  imgSize = "70%",
  backgroundColor,
  headingColor,
  textColor,
  btnBgColor,
  btnColor,
}) => {

  
  const headingOption = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };

  const textOptions = {
    ...headingOption,
    transition: {
      delay: 0.3,
    },
  };

  const btnOptions = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
      ease: "easeIn",
    },
  };

  const imgOptions = {
    initial: {
      scale: 0.1,
      opacity: 0,
    },
    whileInView: {
      scale: 1,
      opacity: 1,
    },
    transition: {
      delay: 0.3,
    },
  };

  return (
    <>
      <section className="section" style={{ backgroundColor: backgroundColor }}>
        <div>
          <motion.h3
            style={{ color: headingColor }}
            data-cursorpointer={true}
            {...headingOption}
          >
            {h3}
          </motion.h3>
          <motion.p
            style={{ color: textColor }}
            data-cursorpointer={true}
            {...textOptions}
          >
            {text}
          </motion.p>

          {btnText && (
            <motion.button
              style={{ backgroundColor: btnBgColor, color: btnColor }}
              data-cursorpointer={true}
              {...btnOptions}
            >
              {btnText}
            </motion.button>
          )}

          <motion.div {...imgOptions}>
            <img src={imgSrc} alt="ImgSrc" style={{ width: imgSize }} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Section;
