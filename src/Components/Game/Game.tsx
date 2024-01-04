import React, { useEffect, useState } from "react";
import Board from "../Board/Board";
import Dice from "../Dice/Dice";
import "./Game.css";

/*
 Sette opp Board med 4 rows
 Logikken for spillet ligger i Game
 Hver Row har en farge, bestemt av prop
 Hver Row har 11 tiles, med økende eller synkende verdi. Verdi er en prop
 

*/ 

export default function Game() {
    const [diceState, setDiceState] = useState(Array(6).fill(1)) //Hvit, Hvit, Rød, Gul, Grønn, Blå
    const colors = ["white", "white", "red", "yellow", "green", "blue"] 

    const [allPossibleMoves, setAllPossibleMoves] = useState(Array(6).fill(""));
    //let allPossibleMoves: string[] = [];

    const rollDice = () => {
        const newDiceState = [...diceState];
        for (let i = 0; i < 6; i++) {
            newDiceState[i] = Math.floor(Math.random() * 6) + 1;
        }
        setDiceState(newDiceState);
    }

    useEffect (() => {
        calculateAllPossibleMoves();
    }, [diceState]);

    function calculateAllPossibleMoves() { 
        let tempAllPossibleMoves: string[] = [];
        for (let i = 1; i < 6; i++) {
            const moveString = colors[i] + "," + String(diceState[0] + diceState[i]);
            tempAllPossibleMoves.push(moveString);
        }
        for (let i = 2; i < 6; i++) {
            const moveString = colors[i] + "," + String(diceState[1] + diceState[i]);
            tempAllPossibleMoves.push(moveString);
        }
        //allPossibleMoves = Array.from(new Set(allPossibleMoves));
        setAllPossibleMoves(tempAllPossibleMoves);
        console.log("TempAll " + tempAllPossibleMoves);
        console.log(allPossibleMoves + " dette er allPossibleMoves");
    }

    return (
        <>
            <Board allPossibleMoves={allPossibleMoves} />
            <div className="DiceContainer">
            {diceState.map((value, index) => (
                <Dice key={index} value={value} color={colors[index]} />
            ))}
            <button onClick={rollDice}>Rull</button>
            </div>
        </>
    )
}