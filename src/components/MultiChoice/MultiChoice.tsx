import { FC, useEffect, useState } from "react";
import Question from "../../types/Question";
import { Option, Toggle } from "../Toggle";
import { Title, Wrapper } from "./MultiChoice.styles";

interface ThemeBase {
  background: string;
  activeStyle: {
    background: string;
    fontColor: string;
  };
}

export interface Theme {
  primary: ThemeBase;
  secondary: ThemeBase;
  tertiary: ThemeBase;
  quaternary: ThemeBase;
}
interface Props {
  question: Question;
  theme: Theme;
}

const MultiChoice: FC<Props> = ({ question, theme }: Props) => {
  const { toggles, title } = question;
  const [currentTheme, setCurrentTheme] = useState(theme.primary);
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
  }

  useEffect(() => {
    const totalCorrect = selectedAnswers.filter((item) => item.isCorrect);
    if (totalCorrect.length === toggles.length) {
      setAllCorrect(true);
    }
    const percCorrect = (totalCorrect.length / toggles.length) * 100;
    if (percCorrect <= 25) {
      setCurrentTheme(theme.primary);
    } else if (percCorrect <= 50) {
      setCurrentTheme(theme.secondary);
    } else if (percCorrect <= 75) {
      setCurrentTheme(theme.tertiary);
    } else if (percCorrect === 100) {
      setCurrentTheme(theme.quaternary);
    }
  }, [selectedAnswers, toggles, theme]);
  return (
    <Wrapper backgroundColor={currentTheme.background}>
      <Title>{title}</Title>
      {toggles.map((t, index) => (
        <Toggle
          activeStyle={{
            backgroundColor: currentTheme.activeStyle.background,
            fontColor: currentTheme.activeStyle.fontColor,
          }}
          disabled={allCorrect}
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
