import Question from "../../types/Question";
import { Theme } from "./MultiChoice";

export const theme: Theme = {
  primary: {
    background: "linear-gradient(180deg, #F6B868 0%, #EE6B2D 100%)",
    activeStyle: {
      fontColor: "#9F938B",
      background: "#F8CAA3",
    },
  },
  secondary: {
    background: "linear-gradient(180deg, #76E0C2 0%, #59CADA 100%)",
    activeStyle: {
      fontColor: "#4CAD94",
      background: "#A5E7E2",
    },
  },
  tertiary: {
    background: "linear-gradient(180deg, #F1B496 0%, #EA806A 100%)",
    activeStyle: {
      fontColor: "#E47958",
      background: "#F2CBBD",
    },
  },
  quaternary: {
    background: "linear-gradient(180deg, #02ea11 0%, #01aa0c 100%)",
    activeStyle: {
      fontColor: "#30ad36",
      background: "#43ef4e",
    },
  },
};
export const question1: Question = {
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
