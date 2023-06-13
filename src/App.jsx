import { React, useEffect } from "react";
import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Others from "./components/Others";
import data from "./data/data.json";

import freshTopicImg from "./assets/academy.png";
import chaiGlassImg from "./assets/story.png";
import tedTalkImg from "./assets/in-the-news.gif";
import franchiseImg from "./assets/franchise.gif";
import locationImg from "./assets/locations.png";
import speakerImg from "./assets/image2.png";
import careImg from "./assets/mba-cares.gif";
import hireImg from "./assets/image1.png";
import tastingImg from "./assets/image3.png";

import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/others.scss";

import "./styles/mediaQuery.scss";

const yellow = "#fff100",
  pink = "#ed1e79",
  brown = "#6d3d0f",
  white = "#ffffff";

const sectionsData = [
  {
    dataKey: "freshTopic",
    imgSrc: freshTopicImg,
    backgroundColor: pink,
    headingColor: yellow,
    textColor: yellow,
    btnBgColor: yellow,
    btnColor: pink,
  },
  {
    dataKey: "freshTopic2",
    imgSrc: chaiGlassImg,
    backgroundColor: pink,
    headingColor: yellow,
    textColor: yellow,
    btnBgColor: yellow,
    btnColor: pink,
  },
  {
    dataKey: "tedTalks",
    imgSrc: tedTalkImg,
    backgroundColor: yellow,
    headingColor: pink,
    textColor: pink,
    btnBgColor: pink,
    btnColor: yellow,
  },
  {
    dataKey: "franchise",
    imgSrc: franchiseImg,
    backgroundColor: white,
    headingColor: pink,
    textColor: brown,
    btnBgColor: brown,
    btnColor: yellow,
  },
  {
    dataKey: "map",
    imgSrc: locationImg,
    backgroundColor: pink,
    headingColor: yellow,
    textColor: yellow,
    btnBgColor: yellow,
    btnColor: pink,
    hasBtn: false,
  },
  {
    dataKey: "courses",
    imgSrc: speakerImg,
    backgroundColor: yellow,
    headingColor: pink,
    textColor: pink,
    btnBgColor: pink,
    btnColor: yellow,
    imgSize: "30%", // Added imgSize property for courses section
  },
  {
    dataKey: "album",
    imgSrc: careImg,
    backgroundColor: white,
    headingColor: pink,
    textColor: brown,
    btnBgColor: brown,
    btnColor: yellow,
  },
  {
    dataKey: "barat",
    imgSrc: hireImg,
    backgroundColor: pink,
    headingColor: yellow,
    textColor: yellow,
    btnBgColor: yellow,
    btnColor: pink,
  },
  {
    dataKey: "chaiwala",
    imgSrc: tastingImg,
    backgroundColor: white,
    headingColor: pink,
    textColor: brown,
    btnBgColor: brown,
    btnColor: yellow,
  },
];

const App = () => {
  const dotCursor = (e) => {
    const cursor = document.querySelector(".cursor");
    cursor.style.top = `${e.pageY - 14}px`;
    cursor.style.left = `${e.pageX - 14}px`;

    if (e.target.getAttribute("data-cursorpointer")) {
      cursor.classList.add("cursorHover");
    } else if (e.target.getAttribute("data-cursorpointermini")) {
      cursor.classList.add("cursorHoverMini");
    } else {
      cursor.classList.remove("cursorHover");
      cursor.classList.remove("cursorHoverMini");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", dotCursor);
    return () => {
      window.removeEventListener("mousemove", dotCursor);
    };
  }, []);

  return (
    <>
      <IntroVideo />

      {sectionsData.map((section) => (
        <Section
          key={section.dataKey}
          h3={data[section.dataKey].heading}
          text={data[section.dataKey].text}
          btnText={data[section.dataKey].btn}
          imgSrc={section.imgSrc}
          backgroundColor={section.backgroundColor}
          headingColor={section.headingColor}
          textColor={section.textColor}
          btnBgColor={section.btnBgColor}
          btnColor={section.btnColor}
          imgSize={section.imgSize} // Pass imgSize prop from sectionsData
          hasBtn={section.hasOwnProperty("hasBtn") ? section.hasBtn : true} // Check if hasBtn property exists, default to true
        />
      ))}

      <Footer />

      <Others />
    </>
  );
};

export default App;

// import IntroVideo from "./components/IntroVideo";
// import Section from "./components/Section";

// import data from "./data/data.json";

// import freshTopicImg from "./assets/academy.png";
// import chaiGlassImg from "./assets/story.png";
// import tedTalkImg from "./assets/in-the-news.gif";
// import franchiseImg from "./assets/franchise.gif";
// import locationImg from "./assets/locations.png";
// import speakerImg from "./assets/image2.png";
// import careImg from "./assets/mba-cares.gif";
// import hireImg from "./assets/image1.png";
// import tastingImg from "./assets/image3.png";

// import "./styles/App.scss";
// import "./styles/intro.scss";
// import "./styles/section.scss";

// const yellow = "#fff100",
//   pink = "#ed1e79",
//   brown = "#6d3d0f",
//   white = "#ffffff";

// function App() {
//   return (
//     <>
//       <IntroVideo />

//       <Section
//         h3={data.freshTopic.heading}
//         text={data.freshTopic.text}
//         btnText={data.freshTopic.btn}
//         imgSrc={freshTopicImg}
//         backgroundColor={pink}
//         headingColor={yellow}
//         textColor={yellow}
//         btnBgColor={yellow}
//         btnColor={pink}
//       />
//       <Section
//         h3={data.freshTopic2.heading}
//         text={data.freshTopic2.text}
//         btnText={data.freshTopic2.btn}
//         imgSrc={chaiGlassImg}
//         backgroundColor={pink}
//         headingColor={yellow}
//         textColor={yellow}
//         btnBgColor={yellow}
//         btnColor={pink}
//       />
//       <Section
//         h3={data.tedTalks.heading}
//         text={data.tedTalks.text}
//         btnText={data.tedTalks.btn}
//         imgSrc={tedTalkImg}
//         backgroundColor={yellow}
//         headingColor={pink}
//         textColor={pink}
//         btnBgColor={pink}
//         btnColor={yellow}
//       />
//       <Section
//         h3={data.franchise.heading}
//         text={data.franchise.text}
//         btnText={data.franchise.btn}
//         imgSrc={franchiseImg}
//         backgroundColor={white}
//         headingColor={pink}
//         textColor={brown}
//         btnBgColor={brown}
//         btnColor={yellow}
//       />
//       <Section
//         h3={data.map.heading}
//         text={data.map.text}
//         btnText={false}
//         imgSrc={locationImg}
//         backgroundColor={pink}
//         headingColor={yellow}
//         textColor={yellow}
//         btnBgColor={yellow}
//         btnColor={pink}
//       />
//       <Section
//         h3={data.courses.heading}
//         text={data.courses.text}
//         btnText={data.courses.btn}
//         imgSrc={speakerImg}
//         imgSize="30%"
//         backgroundColor={yellow}
//         headingColor={pink}
//         textColor={pink}
//         btnBgColor={pink}
//         btnColor={yellow}
//       />
//       <Section
//         h3={data.album.heading}
//         text={data.album.text}
//         btnText={data.album.btn}
//         imgSrc={careImg}
//         backgroundColor={white}
//         headingColor={pink}
//         textColor={brown}
//         btnBgColor={brown}
//         btnColor={yellow}
//       />
//       <Section
//         h3={data.barat.heading}
//         text={data.barat.text}
//         btnText={data.barat.btn}
//         imgSrc={hireImg}
//         backgroundColor={pink}
//         headingColor={yellow}
//         textColor={yellow}
//         btnBgColor={yellow}
//         btnColor={pink}
//       />
//       <Section
//         h3={data.chaiwala.heading}
//         text={data.chaiwala.text}
//         btnText={data.chaiwala.btn}
//         imgSrc={tastingImg}
//         backgroundColor={white}
//         headingColor={pink}
//         textColor={brown}
//         btnBgColor={brown}
//         btnColor={yellow}
//       />
//     </>
//   );
// }

// export default App;

// import IntroVideo from "./components/IntroVideo";
// import Section from "./components/Section";

// import data from "./data/data.json";

// import freshTopicImg from "./assets/academy.png";

// import "./styles/App.scss";
// import "./styles/intro.scss";
// import "./styles/section.scss";

// const yellow = "#fff100",
//   pink = "#ed1e79",
//   brown = "#6d3d0f",
//   white = "#ffffff";

// // const { heading, text, btn } = data.freshTopic;

// const SectionInfo = () => {
//   const dataEntries = Object.entries(data);

// const sections = dataEntries.map(([key, value]) => {
//   // Access the individual data properties for each key-value pair
//   const { heading, text, btn } = value;

//   return (
//     <Section
//       key={key} // Don't forget to add a unique key for each rendered component
//       h3={heading}
//       text={text}
//       btnText={btn}
//       imgSrc={freshTopicImg}
//       backgroundColor={pink}
//       headingColor={yellow}
//       textColor={yellow}
//       btnBgColor={yellow}
//       btnColor={pink}
//     />
//   );
// });

// // Render the sections array
// return <div>{sections}</div>;

// };

// function App() {
//   return (
//     <>
//       <IntroVideo />

//       <SectionInfo/>
//     </>
//   );
// }

// export default App;
