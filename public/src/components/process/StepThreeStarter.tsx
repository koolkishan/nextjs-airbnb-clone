import Image from "next/image";
import React from "react";

export default function StepThreeStarter() {
  return (
    <div className="flex items-center h-full mx-20">
      <div className="grid grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 text-airbnb-light-black">
          <h3 className="text-2xl">Step 3</h3>
          <h1 className="text-4xl">
            <strong>Finish up and publish</strong>
          </h1>
          <p className="text-xl">
            Finally, you’ll choose if you'd like to start with an experienced
            guest, then you'll set your nightly price. Answer a few quick
            questions and publish when you're ready.
          </p>
        </div>
        <div className="">
          <video src="/home3.mp4" autoPlay loop controls={false}></video>
        </div>
      </div>
    </div>
  );
}
