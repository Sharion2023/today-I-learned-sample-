import { useState } from "react";
const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

export default function FactList({ facts }) {
  //  TEMPORARY WITH FAKE DATA

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact key={fact.id} props={fact} />
        ))}
      </ul>
    </section>
  );
}

//pass info from above
function Fact({ props }) {
  console.log(props);
  return (
    <li className="fact">
      <p>
        {props.text}
        <a className="source" href={props.source} target="_blank">
          (Source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === props.category)
            .color,
        }}
      >
        {props.category}
      </span>
      <div className="vote-buttons">
        <button>👍🏾{props.votesInteresting}</button>
        <button>🤯 {props.votesMindblowing}</button>
        <button>⛔️ {props.votesFalse}</button>
      </div>
    </li>
  );
}
