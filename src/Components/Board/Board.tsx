import React, { useEffect } from "react";
import "./Board.css";
import Row from "../Row/Row";



export default function Board({allPossibleMoves}: {allPossibleMoves: string[]}) {
    const colorsMap: {[key: string]: string} = {
        "red": "asc",
        "yellow": "asc",
        "green": "desc",
        "blue": "desc",
    }

    const playableMovesMap: {[key: string]: string[]} = {
        "red": [],
        "yellow": [],
        "green": [],
        "blue": [],
    }

    useEffect (() => {
        if (allPossibleMoves[0] !== "" ) {
            console.log("Det yeetes hit")
        console.log(allPossibleMoves);
        for (let i = 0; i < allPossibleMoves.length; i++) {
            const [moveColor, moveValue] = allPossibleMoves[i].split(",");
            if (moveColor === "white") {
                playableMovesMap["red"].push(allPossibleMoves[i]);
                playableMovesMap["yellow"].push(allPossibleMoves[i]);
                playableMovesMap["green"].push(allPossibleMoves[i]);
                playableMovesMap["blue"].push(allPossibleMoves[i]);
            } else {
                playableMovesMap[moveColor].push(allPossibleMoves[i]);
            }

        }
        console.log("Nå kommer playable moves")
        console.log(playableMovesMap);
        }
    }, [allPossibleMoves])

    return (
        <>
            <div className="mainBoard">
                {Object.entries(colorsMap).map(([color, direction]) => (
                    <Row key={color} direction={direction} color={color} allPossibleMoves={playableMovesMap[color]} />
                ))}
            </div>
        </>
    )
}