import React from "react";

function Input({ setGuessList, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(e) => {
          e.preventDefault();
          setGuessList(tentativeGuess);
          setTentativeGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          disabled={gameStatus !== "running"}
          value={tentativeGuess}
          onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
          minLength={5}
          pattern="[A-Za-z]{5}"
          title="5 letter word"
        />
      </form>
    </>
  );
}

export default Input;
