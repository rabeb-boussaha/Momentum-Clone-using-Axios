import React from "react";
import Date from "./componets/Date";
import Quote from "./componets/Quote";
import Time from "./componets/Time";
import Weather from "./componets/Weather";

const App = () => {
  return (
    <>
      <Weather />
      <Time />
      <Date />
      <Quote />
    </>
  );
};

export default App;
