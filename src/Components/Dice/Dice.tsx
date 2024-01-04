import React from "react";
import "./Dice.css";

interface DiceProps {
    value: number,
    color: string
}


export default function Dice({value, color}: DiceProps) {
    return (
        <button style={{backgroundColor: color}} className="DiceButton">
            <img src={`Dice/dice-${value}.png`} alt={`Dice with value ${value}`} />
        </button>
    )
}