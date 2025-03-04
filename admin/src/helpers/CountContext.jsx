import { createContext, useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket.on("update_count", (newCount) => {
      setCount(newCount);
    });

    return () => {
      socket.off("update_count");
    };
  }, []);

  return (
    <CountContext.Provider value={{ count }}>
      {children}
    </CountContext.Provider>
  );
};

export const useCount = () => useContext(CountContext);
