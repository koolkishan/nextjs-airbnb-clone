import Image from "next/image";
import React from "react";

function Overview() {
  const mainTitle = "It’s easy to get started on Airbnb";
  const data = [
    {
      title: "Tell us about your place",
      description:
        "Share some basic info, such as where it is and how many guests can stay.",
      image: "/overview1.webp",
    },
    {
      title: "Make it stand out",
      description:
        "Add 5 or more photos plus a title and description – we’ll help you out.",
      image: "/overview2.webp",
    },
    {
      title: "Finish up and publish",
      description:
        "Choose if you'd like to start with an experienced guest, set a starting price and publish your listing.",
      image: "/overview3.webp",
    },
  ];
  return (
    <div className="flex  h-full justify-between items-center px-32 gap-20">
      <div>
        <strong>
          <h1 className="text-5xl leading-normal text-airbnb-light-black">
            {mainTitle}
          </h1>
        </strong>
      </div>
      <ul className="flex flex-col gap-16">
        {data.map(({ description, image, title }, index) => (
          <li key={title} className="flex items-start justify-start gap-6">
            <strong className="text-2xl pt-5 text-airbnb-light-black">
              <h3>{index + 1}</h3>
            </strong>
            <div className="pt-5">
              <strong className="text-2xl text-airbnb-light-black">
                <h3>{title}</h3>
              </strong>
              <p className="text-airbnb-light-gray text-lg">{description}</p>
            </div>
            <div className="relative w-48 h-32 object-cover">
              <Image src={image} alt="overview" fill />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Overview;
