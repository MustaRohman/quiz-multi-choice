import "./App.css";
import { Toggle, Option } from "./components/Toggle";
import { useState } from "react";
import MultiChoice from "./components/MultiChoice";
import Question from "./types/Question";

function App() {
  const [switchValue, setSwitchValue] = useState("test");
  const question1: Question = {
    title: "What are the ideal conditions inside an office?",
    toggles: [
      [
        {
          text: "good pay",
          isCorrect: true,
        },
        {
          text: "bad pay",
          isCorrect: false,
        },
      ],
      [
        {
          text: "lot of meetings",
          isCorrect: false,
        },
        {
          text: "less meetings",
          isCorrect: true,
        },
      ],
      [
        {
          text: "free coffee",
          isCorrect: true,
        },
        {
          text: "expensive coffee",
          isCorrect: false,
        },
      ],
      [
        {
          text: "bear in office",
          isCorrect: false,
        },
        {
          text: "dog in office",
          isCorrect: true,
        },
      ],
    ],
  };
  return (
    <div className="App">
      <MultiChoice question={question1} />
    </div>
  );
}

export default App;
