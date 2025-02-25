import { useState } from "react";
import { CATEGORIES } from "./CategoryFilter";

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

export default function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [sourceText, setSourceText] = useState("http://example.com");
  const [category, setCategory] = useState("");
  const textLength = text.length;

  function handleSubmit(e) {
    //1. prevent browser reload
    e.preventDefault();
    //console.log(text, sourceText, category);

    //2. Check if data is valid. If so, create new fact.
    if (text && isValidHttpUrl(sourceText) && category && textLength <= 200)
      console.log("got a new fact!");
    {
      //3. Create new fact object
      const newFact = {
        id: Math.round(Math.random() * 1000000),
        text,
        sourceText,
        category,
        votesInteresting: 0,
        votesMindblowing: 0,
        votesFalse: 0,
        createdIn: new Date().getFullYear(),
      };
      console.log(newFact);
      //4. Add new fact to UI: add fact to state
      setFacts((facts) => [newFact, ...facts]);
      //5. Reset input fields
      setText("");
      setSourceText("");
      setCategory("");
      //6. Close the form
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Choose category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large">Post</button>
    </form>
  );
}
