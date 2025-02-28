//import { useState } from "react";
import React from "react";
//import NewFactForm from "./NewFactForm";
//import { useEffect } from "react";

export default function Header({ showForm, setShowForm }) {
  /* 
 Testing the state toggle function
 useEffect(() => {
    console.log("Current state:", showForm);
  });*/

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="Today I Learned Logo" />
          <h1>Today I Learned!</h1>
        </div>

        <button
          className="btn btn-large btn-open"
          //Update state

          onClick={() => setShowForm(showForm ? false : true)}
        >
          {showForm ? "Close" : "Share A Fact!"}
        </button>
      </header>
    </>
  );
}
