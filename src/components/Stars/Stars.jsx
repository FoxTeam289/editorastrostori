/** @format */

import { useEffect } from "react";
import { useAppContext } from "../../context/state";
import { AnimatePresence } from "framer-motion";
import useGetDate from "../../modules/useGetDate";
import { Sky } from "./styles";
import { theme } from "./theme";

import VirtualSky from "../../sky";
import Svg from "./Svg";
import Classic from "./Classic";

const Stars = () => {
  const { skyRef, dataSky, full, setFull } = useAppContext();
  const { coords, constellation, galaxy, language } = dataSky;
  const { bg } = theme[dataSky.design];

  const skyId = "skymap";
  const date = useGetDate({ dataSky });

  useEffect(() => (dataSky.design !== "classic" ? setFull(false) : setFull(true)), [dataSky.design]);

  const config = {
    azOff: -180,
    height: 0,
    width: 0,
    latitude: coords.lat ? coords.lat : 56.1322,
    longitude: coords.lon ? coords.lon : 47.2519,
    time: date,
    skyColors: ["#000", "#000"],
    gridAzColor: "#ffffff",
    gridEqColor: "#ffffff",
    gridGalColor: "#ffffff",
    language,
    visibility: {
      starMag: 6,
      showStarLabels: false,
      showPlanets: false,
      showPlanetsOrbit: false,
      showPlanetsLabels: false,
      showSunMoon: false,
      showConstellations: true,
      showConstellationBoundaries: false,
      showConstellationLabels: constellation,
      showAzLabels: false,
      showAzGrid: false,
      showEqGrid: false,
      showGalGrid: false,
      showGalaxy: galaxy,
      showInfo: false,
    },
    styles: { background: "black", width: "100%", height: "100%", "border-radius": "50%" },
  };

  return (
    <Sky
      ref={skyRef}
      $styledId={skyId}
      $styledFull={full}
      style={{
        backgroundColor: bg,
      }}
    >
      <AnimatePresence initial={true}>{!full ? <VirtualSky skyId={skyId} skyConfig={config} /> : <Classic />}</AnimatePresence>
      <Svg />
    </Sky>
  );
};

export default Stars;
