import React from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from "jquery";
import AppRouter from "./AppRouter";

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
