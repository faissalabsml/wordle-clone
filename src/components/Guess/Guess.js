import React from "react";

import { range } from "../../utils";

function Cell({ letter, status }) {
  return <span className={status ? `cell ${status}` : "cell"}>{letter}</span>;
}

function Guess({ currWord }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          letter={currWord ? currWord[num].letter : undefined}
          status={currWord ? currWord[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
