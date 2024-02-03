import React from "react";
import Laptop from "../assets/laptop.jpg";
function Analytics() {
  return (
    <div className=" w-full bg-white py-16 px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-col-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop}></img>
        <div className=" flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold "> DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus aliquid eaque temporibus culpa vero libero obcaecati
            rem vel facilis accusamus eos dolores, quisquam eligendi repudiandae
            repellendus veniam dicta ad animi.
          </p>
          <button className=" bg-black  text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 px-6 py-3">
            get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
