import React, { useEffect, useState } from "react";
import app from "../firebase";
import CardWork from "./Components/CardWork";
import Image_gallery from "./Components/Image-gallery";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Works() {
const [Data, setData] = useState([])
  useEffect(() => {
    app.firestore().collection("projects").get().then(function(querySnapshot) {
      let tempData=[]
      querySnapshot.forEach(function(doc) {
         tempData.push(doc.data())

      });
      setData(tempData)
    console.log(Data)
  });
    
  }, [])
  return (
    <div className="max-h-full">
      <Navbar />
     {Data.map((item)=>{
       return <CardWork data={item}/>
     })}

      <Footer />
    </div>
  );
}
