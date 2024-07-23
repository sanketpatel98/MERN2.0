import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  const handleClick = () => {
    window.open(
      "https://docs.google.com/document/d/1cidRkwkDNWiFWkWbsA24nqZC_HByINm8vBuOdx9YetU/edit?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about Sanket?</h2>
        <p className="text-gray-500 my-2">Checkout the link below</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
          onClick={handleClick}
        >
          Resume
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://miro.medium.com/v2/resize:fit:960/0*ngXgBNNdx6iiWP8q.png" />
      </div>
    </div>
  );
}
