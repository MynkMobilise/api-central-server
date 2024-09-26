import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import AppRouter from "./AppRouter";
import axios from "axios";

const App = () => {
  return (
    <>
      <div className="main-wrapper-front">
        <main>
          <AppRouter />
        </main>
      </div>
    </>
  );
};

export default App;
