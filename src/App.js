import "./style.css";
import FactList from "./Components/FactList";
import CategoryFilter from "./Components/CategoryFilter";
import { useState } from "react";
import Header from "./Components/Header";

function App() {
  //Define state
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

function NewFactForm() {
  return <form className="fact-form">Fact Form</form>;
}

export default App;
