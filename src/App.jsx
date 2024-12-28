import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router";
import Sidebar from "./component/Sidebar/Sidebar";
import { useSelector } from "react-redux";

function App() {

  const theme = useSelector((state)=> state.theme.theme);


  return (
    <>
      <div className={`w-full min-h-screen ${theme === 'light' ? ' bg-slate-200 text-black' : ' bg-slate-800 text-white'}`}>
        <Header />
        <div className="w-full flex">
          <Sidebar />

          <Outlet />
        </div>
        {/* <Footer/> */}
      </div>
    </>
  );
}

export default App;
