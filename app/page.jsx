import React from "react";
import Carousel from "./components/carousel";
import Card from "./components/Card";
import Progress from "./components/Progress";
import TopCreator from "./components/TopCreator";
import StudentRanking from "./components/StudentRanking";

export default function Home() {
  return (
    <div className="">
    <Carousel />
    <div className=" text-3xl font-extrabold px-4 text-white">
      <h1>Ongoing Coures</h1>
    </div>
    <Progress className="py-10" />
    <div className=" text-3xl font-extrabold px-4 text-white">
      <h1>Popular Coures</h1>
    </div>
    <Card className="py-10" />
    <div className="flex justify-center text-3xl font-extrabold px-4 text-warning">
      <h1>Creator Of the Week</h1>
    </div>
    <TopCreator className="py-10" />
    
    <div className="py-5">
    <StudentRanking  />

    </div>
    </div>
      );
}
