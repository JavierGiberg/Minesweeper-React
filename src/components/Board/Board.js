import React, { useEffect, useState } from "react";
import "./Board.css";
import Cell from "../Cell/Cell";
const Board = (props) => {
  const board = [];
  const handleLeftClick = (rowIndex, colIndex, type, setCell) => {
    console.log(`Type: ${type}, Cell: ${rowIndex}-${colIndex}`);
  };

  const handleRightClick = (event, rowIndex, colIndex, type) => {
    console.log(type);
    event.preventDefault();
  };
  const types = ["E", "E", "E", "E", "E", "E", "E", "B"];
  const initialBoard = [];
  for (let i = 0; i < props.width; i++) {
    const row = [];
    for (let j = 0; j < props.height; j++) {
      const type = types[Math.floor(Math.random() * 8)];
      row.push(
        <Cell
          key={`${i}-${j}`}
          i={i}
          j={j}
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
          type={type}
          board={board}
        />
      );
    }
    board.push(row);
  }

  return (
    <div className="">
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} id={`${rowIndex}-${cellIndex}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Board;
