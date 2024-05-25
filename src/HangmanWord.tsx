import styles from "./HangmanWord.module.css";

const word = "test";
const guessedLetters = ["t"];

export function HangmanWord() {
  return (
    <div className={styles.hangmanWord}>
      {word.split("").map((letter, index) => (
        <span className={styles.wordSplit} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
            }}
          >
            {letter}
          </span> 
        </span>
      ))}
    </div>
  );
}
