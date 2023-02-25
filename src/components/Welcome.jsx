import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./welcome.css";

export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h1>Bem-vindo Pirata!</h1>
      <p>Clique no botão abaixo pra iniciar</p>
      <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
        Iniciar
      </button>
    </div>
  );
};
