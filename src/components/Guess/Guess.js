import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span
            key={num}
            className={word ? `cell ${word[num].status}` : "cell"}
          >
            {word ? word[num].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
