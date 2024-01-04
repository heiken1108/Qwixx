import React from "react";
import "./Tile.css";

interface TileProps {
    color: string,
    value: number,
    onClick: () => void,
    isCrossed: boolean,
    isLocked: boolean
}

export default function Tile({color, value, onClick, isCrossed, isLocked}: TileProps) {

    const styling = {
        backgroundColor: isCrossed ? "black" : isLocked ? "gray" : color
    }

    return (
        <div className="mainTile">
            <button onClick={onClick} style={styling}>{value}</button>
        </div>
    )
}