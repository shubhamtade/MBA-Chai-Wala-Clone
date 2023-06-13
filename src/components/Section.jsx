import { color } from "framer-motion";
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
  return (
    <>
      <section className="section" style={{ backgroundColor: backgroundColor }}>
        <div>
          <h3 style={{ color: headingColor }} data-cursorpointer={true}>{h3}</h3>
          <p style={{ color: textColor }} data-cursorpointer={true}>{text}</p>

          {btnText && (
            <button style={{ backgroundColor: btnBgColor, color: btnColor }} data-cursorpointer={true}>
              {btnText}
            </button>
          )}

          <div>
            <img src={imgSrc} alt="ImgSrc" style={{ width: imgSize }} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
