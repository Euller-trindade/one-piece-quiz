import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";
import { Welcome } from "./components/Welcome";
import { Question } from "./components/Question";
import GameOver from "./components/GameOver";

import capa from "./img/capa7.jfif";
import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REODER_QUESTIONS" });
  }, []);
  return (
    <div className="App">
      <img src={capa}></img>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}
export default App;
