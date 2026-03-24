import React, { Suspense, useEffect } from "react";
import { useLoaderData } from "react-router";
import Active6 from "./Active6";
import Slider from "./Slider";
import PopularPlants from "./PopularPlants";
import { Bounce, Flip, Roll, Slide, Zoom } from "react-awesome-reveal";
import TopTips from "./TopTips";
import LowMaintain from "./LowMaintain";

const Home = () => {
  const active = useLoaderData();
  // console.log(active);

  const topTipsPromise = fetch(
    "https://assignment-10-server-pink-beta.vercel.app/usersTips6",
  ).then((res) => res.json());

  useEffect(() => {
    document.title = "GreenSpire || Home";
  }, []);

  return (
    <div className=" ">
      <div className="py-10">
        <Slider></Slider>
      </div>
      <div></div>
      <Bounce
        delay={500} // Wait 200ms before starting
        duration={1000} // Animation lasts 1 second
        // triggerTwice // Only animate once
        fraction={0.1} // Start animation when element is 50% visible
      >
        {/* Meet the Garden Whisperers */}
        <h3 className="text-3xl font-bold drop-shadow-emerald-200 drop-shadow-sm text-green-900 text-center pt-10">
          Meet the Garden Whisperers
        </h3>
      </Bounce>
      <div className=" container mx-auto  m-5 grid  md:grid-cols-2 lg:grid-cols-3 gap-7 py-10">
        {active.map((act) => (
          <Active6 act={act} key={act._id}></Active6>
        ))}
      </div>{" "}
      <div>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg"></span>
          }
        >
          <TopTips topTipsPromise={topTipsPromise}></TopTips>
        </Suspense>
      </div>
      <div className="bg-amber-50">
        <PopularPlants></PopularPlants>
      </div>
      <div>
        <LowMaintain></LowMaintain>
      </div>
    </div>
  );
};

export default Home;
