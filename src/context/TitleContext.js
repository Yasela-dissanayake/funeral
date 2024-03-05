import React, { createContext, useState } from "react";

export const TitleContext = React.createContext();

const TitleContextProvider = ({ children }) => {
  const [title, setTitle] = useState("");

  const updateTitle = (path) => {
    setTitle(path);
  };

  return (
    <TitleContext.Provider value={{ title, updateTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleContextProvider;
