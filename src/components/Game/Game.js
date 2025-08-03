import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../Input";
import GuessList from "../GuessList/GuessList";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinBanner from "../WinBanner/WinBanner";
import LostBanner from "../LostBanner/LostBanner";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  const handleSubmitGuess = (guess) => {
    const guessStatus = checkGuess(guess, answer);
    const nextGuesses = [...guessList, guessStatus];
    setGuessList(nextGuesses);
    if (guess === answer) {
      setGameStatus("winner");
    }
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessList guesses={guessList} answer={answer} />
      <Input setGuessList={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === "winner" && <WinBanner num={guessList.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
