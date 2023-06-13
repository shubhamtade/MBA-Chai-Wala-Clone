import React from "react";
import logoImg from "../assets/logo.png"
import {BsMouse} from "react-icons/bs"

const Others = () => {
  return (
    <>
      <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logoImg} alt="logo" data-cursorpointer={true}/>
      </a>

      <a href="/franchise" className="franchiseBtn" data-cursorpointer={true}>Get a franchise</a>

      <BsMouse className="scrollBtn"/>
    </>
  );
};

export default Others;
