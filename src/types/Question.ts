type ToggleOptions = {
  text: string;
  isCorrect: boolean;
}[];

export default interface Question {
  title: string;
  toggles: ToggleOptions[];
}
