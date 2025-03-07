import { useState } from "react";
import { CATEGORIES } from "./CategoryFilter";
import supabase from "../supabase";

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
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  async function handleSubmit(e) {
    //1. prevent browser reload
    e.preventDefault();
    //console.log(text, sourceText, category);

    //2. Check if data is valid. If so, create new fact.
    if (text && isValidHttpUrl(sourceText) && category && textLength <= 200)
      console.log("got a new fact!");
    {
      //3. Create new fact object
      // const newFact = {
      //   id: Math.round(Math.random() * 1000000),
      //   text,
      //   sourceText,
      //   category,
      //   votesInteresting: 0,
      //   votesMindblowing: 0,
      //   votesFalse: 0,
      //   createdIn: new Date().getFullYear(),
      // };

      //3. Create new fact, add it to Supabase and retrieve it to UI
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("Facts")
        //source is column heading, sourceText is the variable name I used in the app
        .insert([{ text, source: sourceText, category }])
        .select();
      console.log(newFact);
      setIsUploading(false);

      //4. Add new fact to UI: add fact to state
      if (!error) setFacts((facts) => [newFact[0], ...facts]);
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
        disabled={isUploading}
      />
      <span>{200 - textLength}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={sourceText}
        onChange={(e) => setSourceText(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}
