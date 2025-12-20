import React, { useRef } from "react";
import Header from "./Components/Header";
import {SideBar} from "./Components/SideBar";
import "./App.css";
// import { Hero } from "./Components/SideBar";
import Snowfall from 'react-snowfall'
import Loader from "./Components/Loader";

function App() {
  const sideBar = useRef(null);

  const showSideBar = () => {
    sideBar.current.style.left = '0'
  };

  const hideSideBar = () => {
    console.log("Hide sidebar is running");
    sideBar.current.style.left = '-100%';
  };

  const loader = useRef("");
  const showLoader = () =>{
    loader.current.style.display = "block";
    console.log("Show-Loader is working.");
  };

  const hideLoader = () => {
    loader.current.style.display = "";
  };

  return (
    <>
    <Snowfall snowflakeCount={20} color="skyblue" />
      <Header onClickFunction={showSideBar} />
      <div className="app-container">
        <SideBar hideLoader={hideLoader} showOnClick={showLoader} hideOnClick={hideSideBar} ref={sideBar} />
      </div>
      <Loader refrence={loader}/>
    </>
  );
}

export default App;
