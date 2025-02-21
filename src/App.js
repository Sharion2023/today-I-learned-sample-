import "./style.css";
import FactList from "./Components/FactList";
import CategoryFilter from "./Components/CategoryFilter";
import { useState } from "react";
import Header from "./Components/Header";
import React from "react";
import NewFactForm from "./Components/NewFactForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <NewFactForm /> : null}

      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;
