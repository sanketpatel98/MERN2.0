import { Button } from "flowbite-react";
import React from "react";

export default function CallToAction() {
  const handleClickResume = () => {
    window.open(
      "https://docs.google.com/document/d/1cidRkwkDNWiFWkWbsA24nqZC_HByINm8vBuOdx9YetU/edit?usp=sharing",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleClickPortfolio = () => {
    window.open(
      "https://sanketpatel98.github.io/portfolio",
      "_blank",
      "noopener,noreferrer"
    );
  };
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about Sanket?</h2>
        <p className="text-gray-500 my-2">Checkout the link below</p>
        <div className="flex flex-row justify-center gap-5">
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl"
            onClick={handleClickResume}
          >
            Resume
          </Button>
          <Button
            gradientDuoTone="purpleToPink"
            className="rounded-tl-xl"
            onClick={handleClickPortfolio}
          >
            Potfolio
          </Button>
        </div>
      </div>
      <div className="p-7 flex-1">
        <img src="https://miro.medium.com/v2/resize:fit:960/0*ngXgBNNdx6iiWP8q.png" />
      </div>
    </div>
  );
}
