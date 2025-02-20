import { useState } from "react";

export default function Header({ showForm, setShowForm }) {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Today I Learned Logo" />
        <h1>Today I Learned!</h1>
      </div>

      <button
        className="btn btn-large btn-open"
        //Update state
        onClick={() => setShowForm(setShowForm.showForm ? false : true)}
      >
        Share a fact
      </button>
    </header>
  );
}
