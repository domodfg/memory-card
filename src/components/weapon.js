import React, { useState } from "react";

const Sns = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Sns">
      <img src={require("../images/sns.png")} />
      <p>Sword and shield</p>
    </div>
  );
};

const Bow = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Bow">
      <img src={require("../images/bow.png")} />
      <p>Bow</p>
    </div>
  );
};

const Db = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Db">
      <img src={require("../images/db.png")} />
      <p>Dual blades</p>
    </div>
  );
};

const Gs = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Gs">
      <img src={require("../images/GS.png")} />
      <p>Great sword</p>
    </div>
  );
};

const Hammer = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Hammer">
      <img src={require("../images/hammer.png")} />
      <p>Hammer</p>
    </div>
  );
};

const Hbg = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Hbg">
      <img src={require("../images/hbg.png")} />
      <p>Heavy bow gun</p>
    </div>
  );
};

const HH = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="HH">
      <img src={require("../images/HH.png")} />
      <p>Hunting horn</p>
    </div>
  );
};

const Ig = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Ig">
      <img src={require("../images/ig.png")} />
      <p>Insect glaive</p>
    </div>
  );
};

const Lance = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Lance">
      <img src={require("../images/lance.png")} />
      <p>Lance</p>
    </div>
  );
};

const Lbg = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Lbg">
      <img src={require("../images/lbg.png")} />
      <p>Light bow gun</p>
    </div>
  );
};

const Ls = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Ls">
      <img src={require("../images/longsword.png")} />
      <p>Long Sword</p>
    </div>
  );
};

const Sa = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Sa">
      <img src={require("../images/Switch_Axe.png")} />
      <p>Switch Axe</p>
    </div>
  );
};
export { Sns, Bow, Db, Gs, Hammer, Hbg, HH, Ig, Lance, Lbg, Ls, Sa };
