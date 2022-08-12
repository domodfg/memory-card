import "./App.css";
import React, { useState } from "react";
import {
  Sns,
  Bow,
  Db,
  Gs,
  Hammer,
  Hbg,
  HH,
  Ig,
  Lance,
  Lbg,
  Ls,
  Sa,
} from "./components/weapon.js";

const App = () => {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [card, setCard] = useState({
    Sns: "unClicked",
    Bow: "unClicked",
    Db: "unClicked",
    Gs: "unClicked",
    Hammer: "unClicked",
    Hbg: "unClicked",
    HH: "unClicked",
    Ig: "unClicked",
    Lance: "unClicked",
    Lbg: "unClicked",
    Ls: "unClicked",
    Sa: "unClicked",
  });

  const addHighestScore = () => {
    if (score >= highestScore) {
      setHighestScore(score + 1);
    }
  };

  const addScore = (e) => {
    if (card[e.currentTarget.id] === "unClicked") {
      setCard({ ...card, [e.currentTarget.id]: "Clicked" });
      setScore(score + 1);
      addHighestScore();
    } else {
      setScore(0);
      Object.keys(card).forEach((i) => (card[i] = "unClicked"));
    }
  };

  return (
    <div className="App">
      <h1>Memory card</h1>
      <p className="score">Score: {score}</p>
      <p className="highestScore">Highest Score: {highestScore}</p>
      <div className="cardContainer">
        <Sns onCardClicked={addScore} />
        <Bow onCardClicked={addScore} />
        <Db onCardClicked={addScore} />
        <Gs onCardClicked={addScore} />
        <Hammer onCardClicked={addScore} />
        <Hbg onCardClicked={addScore} />
        <HH onCardClicked={addScore} />
        <Ig onCardClicked={addScore} />
        <Lance onCardClicked={addScore} />
        <Lbg onCardClicked={addScore} />
        <Ls onCardClicked={addScore} />
        <Sa onCardClicked={addScore} />
      </div>
    </div>
  );
};

export default App;
