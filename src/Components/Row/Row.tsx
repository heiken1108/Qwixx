import React, { useState } from "react";
import Tile from "../Tile/Tile";
import "./Row.css";

interface RowProps {
    direction: string,
    color: string,
    allPossibleMoves: string[]
}

export default function Row( {direction, color, allPossibleMoves}:RowProps) {
    const [tilesState, setTilesState] = useState(Array(11).fill(false))
    const [lockedState, setLockedState] = useState(Array(11).fill(false))

    function handleClick(i: number) {
        console.log("Clicked tile " + i + " with value " + tiles[i]);
        console.log(allPossibleMoves);
        for (let j = 0; j < allPossibleMoves.length; j++) {
            const [moveColor, moveValue] = allPossibleMoves[j].split(",");
            if (Number(moveValue) === tiles[i]) {
                if (lockedState[i] == false) {
                    const newTilesState = [...tilesState];
                    newTilesState[i] = true;
                    setTilesState(newTilesState);
                    const newlockedState = [...lockedState];
                    for (let j = 0; j <= i; j++) { 
                        newlockedState[j] = true;
                    }
                    setLockedState(newlockedState);
                }
            }
        }
    }

    const containerStyle = {
        backgroundColor: color
    };

    const tiles: number[] = [];

    if (direction === 'asc') {
        for (let i = 2; i <= 12; i++) {
        tiles.push(i);
        }
    } else if (direction === 'desc') {
        for (let i = 12; i >= 2; i--) {
        tiles.push(i);
        }
    }

    return (
        <>
            <div 
             className="mainRow">
                {tiles.map((value, index) => (
                    <Tile key={index} color={color} value={value} isCrossed={tilesState[index]} isLocked={lockedState[index]} onClick={() => handleClick(index)} />
                ))}
            </div>
        </>
    )
}