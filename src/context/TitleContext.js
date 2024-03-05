import React, { useState } from "react";

export const TitleContext = React.createContext();

const TitleContextProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("Home");

  const updateTitle = (title) => {
    setPageTitle(title);
  };

  return (
    <TitleContext.Provider value={{ pageTitle, updateTitle }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleContextProvider;
