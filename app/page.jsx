import { UserButton } from "@clerk/nextjs";


import React from "react";
import Carousel from "./components/carousel";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
    
    <Carousel />
    <Card className="py-10" />
    </>
  )
}
