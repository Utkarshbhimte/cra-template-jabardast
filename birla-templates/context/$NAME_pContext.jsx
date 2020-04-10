import React, { useState, useContext } from "react";

const $NAME_pContext = React.createContext(null);

export const $NAME_pContextProvider = props => {
  const [$NAME_s, set$NAME_p] = useState(null);

  return (
    <$NAME_pContext.Provider value={{ $NAME_s, set$NAME_p }}>
      {props.children}
    </$NAME_pContext.Provider>
  );
};

export const use$NAME_p = () => {
  const { $NAME_s } = useContext($NAME_pContext);
  return { $NAME_s };
};
