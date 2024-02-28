import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body(Part-1).js";
import BodyPart2 from "./components/Body(Part-2).js";
import BodyPart3 from "./components/Body(Part-3).js";
import BodyPart4 from "./components/Body(Part-4)";
import Footer from "./components/Footer.js";
const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
      <BodyPart2 />
      <BodyPart3 />
      <BodyPart4 />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
