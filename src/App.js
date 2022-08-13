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
  Gunlance,
  ChargeBlade,
} from "./components/weapon.js";
import uniqid from "uniqid";

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
    Gl: "unClicked",
    Cb: "unClicked",
  });
  const [cardOrder, setCardOrder] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
  ]);

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

  const shuffle = () => {
    let cardOrderCopy = [...cardOrder];
    let currentIndex = cardOrderCopy.length;
    let swap, i;

    while (currentIndex !== 0) {
      i = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      swap = cardOrderCopy[currentIndex];
      cardOrderCopy[currentIndex] = cardOrderCopy[i];
      cardOrderCopy[i] = swap;
    }
    return cardOrderCopy;
  };

  const cardClicked = (e) => {
    let newOrder = shuffle();
    setCardOrder(newOrder);
    addScore(e);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Memory card</h1>
      </div>
      <div className="scoreBoard">
          <p className="score">Score: {score}</p>
          <p className="highestScore">Highest Score: {highestScore}</p>
        </div>
      <div className="cardContainer">
        {cardOrder.map((card) => {
          if (card === 1) {
            return <Sns onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 2) {
            return <Bow onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 3) {
            return <Db onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 4) {
            return <Gs onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 5) {
            return <Hammer onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 6) {
            return <Hbg onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 7) {
            return <HH onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 8) {
            return <Ig onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 9) {
            return <Lance onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 10) {
            return <Lbg onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 11) {
            return <Ls onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 12) {
            return <Sa onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 13) {
            return <Gunlance onCardClicked={cardClicked} key={uniqid()} />;
          } else if (card === 14) {
            return <ChargeBlade onCardClicked={cardClicked} key={uniqid()} />;
          } else return {};
        })}
      </div>
    </div>
  );
};

export default App;
