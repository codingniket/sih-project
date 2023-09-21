import React from "react";
import Carousel from "./components/carousel";
import Card from "./components/Card";
import Progress from "./components/Progress";


export default function Home() {
  return (
    <div className="z-0">
    <Carousel />
    <div className=" text-3xl font-extrabold px-4 text-white">
      <h1>Ongoing Coures</h1>
    </div>
    <Progress className="py-10" />
    <div className=" text-3xl font-extrabold px-4 text-white">
      <h1>Popular Coures</h1>
    </div>
    <Card className="py-10" />
     
    </div>
  );
}
