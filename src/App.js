import React, { useState } from "react";

import { TbWaveSine } from "react-icons/tb";

import {
  PiWaveSawtoothBold,
  PiWaveSquareBold,
  PiWaveTriangleBold,
} from "react-icons/pi";

import FourierSeries from "./FourierSeries";

import triangle_wave from "./images/triangle_wave.png";
import sawtooth_wave from "./images/sawtooth_wave.png";
import square_wave from "./images/square_wave.png";

function App() {
  const [waveType, setWaveType] = useState("square");

  let formulaImg = {
    square: square_wave,
    sawtooth: sawtooth_wave,
    triangle: triangle_wave,
  };

  return (
    <div className="App flex flex-col items-center p-2 min-h-[100vh]">
      <h1 className="text-4xl font-bold text-center text-blue-500 mt-12 flex flex-row">
        <TbWaveSine className="mr-6 bg-gray-300 rounded-full w-12 h-12 p-2" />
        Fourier Series Visualization
      </h1>{" "}
      <nav className="bg-blue-500 rounded-md py-2 px-8 mt-8">
        <ul className="flex flex-row space-x-16">
          <li className="">
            <PiWaveSquareBold
              onClick={() => {
                setWaveType("square");
              }}
              className="cursor-pointer text-2xl transform hover:scale-150 transition-transform duration-200"
            />
          </li>
          <li className="">
            <PiWaveSawtoothBold
              onClick={() => {
                setWaveType("sawtooth");
              }}
              className="cursor-pointer text-2xl transform hover:scale-150 transition-transform duration-200"
            />
          </li>
          <li className="">
            <PiWaveTriangleBold
              onClick={() => {
                setWaveType("triangle");
              }}
              className="cursor-pointer text-2xl transform hover:scale-150 transition-transform duration-200"
            />
          </li>
        </ul>
      </nav>
      <img
        src={formulaImg[waveType]}
        className="rounded-xl h-32"
        alt={waveType}
      />
      <div className="">
        <FourierSeries waveType={waveType} />
      </div>
      <footer className="absolute bottom-0 p-2 bg-blue-500 w-full text-center">
        <p>Copyright &copy; 2024 Thihamz </p>
      </footer>
    </div>
  );
}

export default App;
