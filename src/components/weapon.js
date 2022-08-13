import React from "react";

const Sns = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Sns">
      <img src={require("../images/sns.png")} alt="Sword and shield" />
      <p>Sword and shield</p>
    </div>
  );
};

const Bow = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Bow">
      <img src={require("../images/bow.png")} alt="Bow" />
      <p>Bow</p>
    </div>
  );
};

const Db = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Db">
      <img src={require("../images/db.png")} alt="Dual blades" />
      <p>Dual blades</p>
    </div>
  );
};

const Gs = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Gs">
      <img src={require("../images/GS.png")} alt="Great sword" />
      <p>Great sword</p>
    </div>
  );
};

const Hammer = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Hammer">
      <img src={require("../images/hammer.png")} alt="Hammer" />
      <p>Hammer</p>
    </div>
  );
};

const Hbg = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Hbg">
      <img src={require("../images/hbg.png")} alt="Heavy bow gun" />
      <p>Heavy bow gun</p>
    </div>
  );
};

const HH = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="HH">
      <img src={require("../images/HH.png")} alt="Hunting horn" />
      <p>Hunting horn</p>
    </div>
  );
};

const Ig = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Ig">
      <img src={require("../images/ig.png")} alt="Insect glaive" />
      <p>Insect glaive</p>
    </div>
  );
};

const Lance = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Lance">
      <img src={require("../images/lance.png")} alt="Lance" />
      <p>Lance</p>
    </div>
  );
};

const Lbg = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Lbg">
      <img src={require("../images/lbg.png")} alt="Light bow gun" />
      <p>Light bow gun</p>
    </div>
  );
};

const Ls = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Ls">
      <img src={require("../images/longsword.png")} alt="Long sword" />
      <p>Long Sword</p>
    </div>
  );
};

const Sa = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Sa">
      <img src={require("../images/Switch_Axe.png")} alt="Switch axe" />
      <p>Switch Axe</p>
    </div>
  );
};

const Gunlance = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Gl">
      <img src={require("../images/gunlance.jpg")} alt="Gunlance" />
      <p>Gun lance</p>
    </div>
  );
};

const ChargeBlade = (props) => {
  return (
    <div className="card" onClick={props.onCardClicked} id="Cb">
      <img src={require("../images/chargeblade.jpg")} alt="charge blade" />
      <p>Charge blade</p>
    </div>
  );
};

export {
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
};
