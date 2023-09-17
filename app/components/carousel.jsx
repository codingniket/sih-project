import React from "react";
import Image from "next/image";
export default function carousel() {
  return (
    <div className="">
      <div className="carousel w-full lg:h-[400px]">
        <div id="item1" className="carousel-item w-full">
          <img src="/images/intro-1.jpg" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="/images/intro-2.jpg" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="/images/intro-3.jpg" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="/images/intro-4.jpg" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}
