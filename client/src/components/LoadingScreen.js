import React from "react";
import ReactLoading from "react-loading";
import "../css/LoadingScreen.css";
const LoadingScreen = () => {
  return (
    <div className="App">
      <ReactLoading type={"bars"} color={"#03fc4e"} height={100} width={100} />
    </div>
  );
};

export default LoadingScreen;