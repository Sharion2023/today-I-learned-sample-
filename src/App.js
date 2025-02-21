import "./style.css";
import FactList from "./Components/FactList";
import CategoryFilter from "./Components/CategoryFilter";

import Header from "./Components/Header";
import React from "react";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;
