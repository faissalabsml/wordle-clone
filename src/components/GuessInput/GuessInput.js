import React from "react";

function GuessInput({ handleGuessesResults, gameStatus }) {
  const [tempGuess, setTempGuess] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    handleGuessesResults(tempGuess);
    setTempGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tempGuess}
        onChange={(e) => {
          const value = e.target.value.toUpperCase();
          setTempGuess(value);
        }}
      />
    </form>
  );
}

export default GuessInput;
