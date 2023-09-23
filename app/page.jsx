import Carousel from "./components/carousel";
import Card from "./components/Card";
import Progress from "./components/Progress";
import StudentRanking from "./components/StudentRanking";
import TopCreator from "./components/TopCreator";

export default function Home() {
  return (
    <div className="">
    <Carousel />
    <div className=" text-3xl font-extrabold px-4 text-white">
      <h1>Ongoing Courses</h1>
    </div>
    <Progress className="py-10" />
    <div className=" text-3xl font-extrabold px-4 text-white">
      <h1>Popular Courses</h1>
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
