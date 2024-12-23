/** @format */

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useAppContext } from "../../context/state";
import { AppCom } from "./styles";

import Content from "../Content";
import Popup from "../Popup";
import Preloader from "../Preloader";

const App = () => {
  const { appRef, activePopup } = useAppContext();

  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => setHide(true), 500);

    return () => setHide(false);
  }, []);

  return (
    <AppCom ref={appRef}>
      <Content />
      <AnimatePresence initial={false}>{activePopup && <Popup />}</AnimatePresence>
      <AnimatePresence initial={false}>{!hide && <Preloader />}</AnimatePresence>
    </AppCom>
  );
};

export default App;
