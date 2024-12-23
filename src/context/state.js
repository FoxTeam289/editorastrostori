/** @format */

import { createContext, useContext, useState, useRef } from "react";

const AppContext = createContext();

const AppWrapper = ({ children }) => {
  const appRef = useRef(null);
  const skyRef = useRef(null);

  const [activePopup, setActivePopup] = useState(false);
  const [eventError, setEventError] = useState(false);
  const [showSelect, setShowSelect] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [full, setFull] = useState(false);
  const [onlyMin, setOnlyMin] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [creating, setCreating] = useState(false);
  const [done, setDone] = useState(false);
  const [total, setTotal] = useState(0);
  const [file, setFile] = useState(false);
  const [error, setError] = useState(false);

  const [dataSky, setDataSky] = useState({
    design: "black",
    coords: {
      lat: 0,
      lon: 0,
    },
    language: "ru",
  });

  const [resetTextarea, setResetTextarea] = useState({
    active: false,
    text: "",
  });

  const [events, setEvents] = useState([]);

  return (
    <AppContext.Provider
      value={{
        appRef,
        skyRef,
        dataSky,
        setDataSky,
        activePopup,
        setActivePopup,
        eventError,
        setEventError,
        showSelect,
        setShowSelect,
        resetTextarea,
        setResetTextarea,
        events,
        setEvents,
        showEvents,
        setShowEvents,
        full,
        setFull,
        onlyMin,
        setOnlyMin,
        creating,
        setCreating,
        done,
        setDone,
        total,
        setTotal,
        showTime,
        setShowTime,
        file,
        setFile,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppWrapper;
