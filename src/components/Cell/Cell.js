import { useState } from "react";
import "./Cell.css";

var cellType;
const Cell = (props) => {
  const [cell, setCell] = useState(props.type);
  cellType = props.type;
  return (
    <div className="cell-container">
      <Button
        handleLeftClick={props.handleLeftClick}
        handleRightClick={props.handleRightClick}
        i={props.i}
        j={props.j}
        type={props.type}
        cell={cell}
        setCell={setCell}
        board={props.board}
      />
    </div>
  );
};

const Button = (props) => {
  const test = () => {
    const btnContainer = document.getElementById("1-0");
    const btn = btnContainer.querySelector("button");
    btn.click();
  };
  return (
    <div className="btn-cell-container">
      <button
        className="btn-cell"
        onClick={() => {
          props.setCell("X");
          test();
          props.handleLeftClick(props.i, props.j, props.cell);
        }}
        onContextMenu={(event) => {
          event.preventDefault();
          if (props.cell !== "F") {
            props.setCell("F");
          } else {
            props.setCell("F");
          }
          props.handleRightClick(event, props.i, props.j, props.cell);
        }}
      >
        {props.cell !== "X" ? "" : cellType}
      </button>
    </div>
  );
};

export default Cell;
