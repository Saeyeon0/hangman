import { useState } from "react";
import "./App.css";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setguessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  console.log(wordToGuess);

  return (
    <div className="text-container">
      <div className="text">Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
      <HangmanWord />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
