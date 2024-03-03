import React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

import "./FourierSeries.css";

function FourierSeries({ waveType }) {
  let time = 0;
  let wave = [];
  let slider;

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(800, 500).id("fourier-canvas");
      slider = p5.createSlider(1, 100, 5);
    };

    p5.draw = () => {
      p5.background(200);
      p5.translate(200, 300);

      let x = 0;
      let y = 0;

      let radius = 0;
      let n = 0;
      for (let i = 0; i < slider.value(); i++) {
        let prevx = x;
        let prevy = y;

        if (waveType === "square") {
          n = i * 2 + 1; // 2n + 1 : coefficient
          radius = 75 * (4 / (n * p5.PI));
          x += radius * p5.cos(n * time);
          y += radius * p5.sin(n * time);
        } else if (waveType === "sawtooth") {
          n = i + 1;
          radius = 50 * (2 * (Math.pow(-1, n) / n));
          x += radius * p5.cos(n * time);
          y -= radius * p5.sin(n * time);
        } else if (waveType === "triangle") {
          n = i * 2 + 1; // Only odd harmonics
          radius =
            125 * (8 / (n * n * p5.PI * p5.PI)) * Math.pow(-1, (n - 1) / 2);
          x += radius * p5.cos(n * time);
          y += radius * p5.sin(n * time);
        }

        p5.stroke(0, 0, 255, 100);
        p5.noFill();
        p5.ellipse(prevx, prevy, radius * 2);

        p5.fill(255);
        p5.stroke(0, 0, 255);
        p5.line(prevx, prevy, x, y);
        p5.ellipse(x, y, 8);
      }

      wave.unshift(y);

      p5.translate(200, 0);
      p5.line(x - 200, y, 0, wave[0]);
      p5.beginShape();
      p5.noFill();
      for (let i = 0; i < wave.length; i++) {
        p5.vertex(i, wave[i]);
      }
      p5.endShape();

      time += 0.05;

      if (wave.length > 250) {
        wave.pop();
      }

      p5.fill(255);
      p5.textSize(32);
      p5.text("N: " + slider.value(), 1, 160);
    };
  };

  return <ReactP5Wrapper sketch={sketch} />;
}

export default FourierSeries;
