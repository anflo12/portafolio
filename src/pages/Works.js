import React from "react";
import CardWork from "./Components/CardWork";
import Image_gallery from "./Components/Image-gallery";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Works() {
  return (
    <div className="max-h-full">
      <Navbar />
      <CardWork/>
      <CardWork/>
      <CardWork/>

      <Footer />
    </div>
  );
}
