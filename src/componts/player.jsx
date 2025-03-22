import { useState } from "react";
export default function Player({ name, symbol, isActive }) {
  const [playerN, setPN] = useState(name);
  const [isE, setIsE] = useState(false);
  function handEC() {
    setIsE((edt) => !edt);
  }
  function handCN(event) {
    setPN(event.target.value);
  }
  let playername = <span className="player-name">{playerN} </span>;
  if (isE) {
    playername = (
      <input type="text" required value={playerN} onChange={handCN} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handEC}>{isE ? "Save" : "Edit"}</button>
    </li>
  );
}
