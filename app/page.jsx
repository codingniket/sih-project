import { UserButton } from "@clerk/nextjs";


import React from "react";
import Carousel from "./components/carousel";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
    
    <Carousel />
    <div className=" text-3xl font-extrabold px-4 text-white">
      <h1>Popular Coures</h1>
    </div>
    <Card className="py-10" />
    </>
  )
}
