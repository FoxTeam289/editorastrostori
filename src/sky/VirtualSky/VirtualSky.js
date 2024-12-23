/** @format */

import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import d3 from "d3";
import projectionsConfig from "../VirtualSky/projectionsConfig.js";
import { calcConstellationLines, drawConstellationLines } from "./constellationLines.js";
import { calcConstellationLabels, drawConstellationLabels } from "./constellationLabels.js";
import { calcBoundaries, drawBoundaries } from "./constllationBoundaries.js";
import { calcGalaxy, drawGalaxy } from "./galaxy.js";
import { calcGridAz, calcGridEq, calcGridGal, drawGridAz, drawGridEq, drawGridGal, drawAz } from "./grids.js";
import { drawStars } from "./stars.js";
import { drawMoonAndSun } from "./sunAndMoon.js";
import { calcPlanets, drawPlanets, drawPlanetOrbits, drawPlanetLabels } from "./planets.js";
import { drawInfo } from "./info.js";
import { stereo } from "./projections.js";

let svg = null;
let azOff = 0;
let azOffOff = 0;

const VirtualSky = ({ skyId, skyConfig }) => {
  const targetRef = useRef();

  if (azOff !== (skyConfig.azOff % 360) - 180) {
    azOff = (skyConfig.azOff % 360) - 180;
    azOffOff = 0;
  }

  const time = skyConfig.time || new Date();
  const visibility = skyConfig.visibility;
  const styles = skyConfig.styles;
  const starMag = visibility.starMag || 2;
  const config = projectionsConfig(skyConfig.width, skyConfig.height, skyConfig.latitude, skyConfig.longitude, skyConfig.language, time);
  const gridAzColor = skyConfig.gridAzColor;
  const gridEqColor = skyConfig.gridEqColor;
  const gridGalColor = skyConfig.gridGalColor;

  useLayoutEffect(() => {
    if (!targetRef.current) return;

    config.width = targetRef.current.offsetWidth;
    config.height = targetRef.current.offsetHeight;
  }, [config]);

  useLayoutEffect(() => {
    svg = drawCanvas();
    draw(svg);
  }, [skyConfig]);

  const draw = (svg) => {
    const start = new Date().getTime();
    const azO = azOff + azOffOff;
    if (visibility.showGalaxy) {
      calcGalaxy(stereo, azO, config);
      drawGalaxy(svg);
    }
    if (visibility.showAzGrid) {
      calcGridAz(stereo, azO, config);
      drawGridAz(svg, gridAzColor);
    }
    if (visibility.showEqGrid) {
      calcGridEq(stereo, azO, config);
      drawGridEq(svg, gridEqColor);
    }
    if (visibility.showGalGrid) {
      calcGridGal(stereo, azO, config);
      drawGridGal(svg, gridGalColor);
    }
    if (visibility.showConstellations) {
      calcConstellationLines(stereo, azO, config);
      drawConstellationLines(svg, config);
    }
    if (visibility.showConstellationBoundaries) {
      calcBoundaries(stereo, azO, config);
      drawBoundaries(svg, config);
    }
    drawStars(svg, stereo, azO, config, starMag, visibility.showStarLabels);
    if (visibility.showPlanets || visibility.showPlanetsLabels || visibility.showPlanetsOrbit) {
      calcPlanets(stereo, azO, config);
      if (visibility.showPlanets) drawPlanets(svg);
      if (visibility.showPlanetsLabels) drawPlanetLabels(svg);
      if (visibility.showPlanetsOrbit) drawPlanetOrbits(svg);
    }
    if (visibility.showSunMoon) {
      drawMoonAndSun(svg, stereo, azO, config);
    }
    if (visibility.showConstellationLabels) {
      calcConstellationLabels(stereo, azO, config);
      drawConstellationLabels(svg);
    }
    if (visibility.showAzLabels) {
      drawAz(svg, stereo, azO, config);
    }
    const rendTime = new Date().getTime() - start + "ms";
    if (visibility.showInfo) {
      drawInfo(svg, config, rendTime);
    }
  };

  const drawCanvas = () => {
    d3.select("#" + skyId)
      .select("svg")
      .remove();
    const svg = d3
      .select("#" + skyId)
      .append("svg")
      .attr("width", config.width)
      .attr("height", config.height)
      .attr("viewBox", `0 0 ${config.width} ${config.height}`)
      .style(styles);
    return svg;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      ref={targetRef}
      id={skyId}
    />
  );
};

export default VirtualSky;
