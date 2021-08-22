import { FC, useState } from "react";
import Question from "../../types/Question";
import { Option, Toggle } from "../Toggle";
import { Title, Wrapper } from "./MultiChoice.styles";

interface ThemeBase {
  background: string;
  text: string;
  highlight: {
    background: string;
    text: string;
  };
}

interface Props {
  question: Question;
  theme?: {
    primary: ThemeBase;
    secondary: ThemeBase;
    tertiary: ThemeBase;
  };
}

const MultiChoice: FC<Props> = ({ question, theme }: Props) => {
  const { toggles, title } = question;
  const [allCorrect, setAllCorrect] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<
    { text: string; isCorrect: boolean }[]
  >(toggles.map((toggle) => toggle[0]));

  function onToggleChange(
    toggleIndex: number,
    value: { text: string; isCorrect: boolean }
  ) {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[toggleIndex] = value;
    setSelectedAnswers(updatedAnswers);
    if (updatedAnswers.every((item) => item && item.isCorrect)) {
      setAllCorrect(true);
    }
  }
  console.log(selectedAnswers);
  return (
    <Wrapper>
      <Title>{title}</Title>
      {toggles.map((t, index) => (
        <Toggle
          key={index}
          value={selectedAnswers[index]}
          onChange={(value) => onToggleChange(index, value)}
        >
          {t.map((option, index) => (
            <Option key={index} value={option}>
              {option.text}
            </Option>
          ))}
        </Toggle>
      ))}
      {allCorrect && <p>CONGRATSSS!!!</p>}
    </Wrapper>
  );
};

export default MultiChoice;
