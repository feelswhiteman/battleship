import React, { useMemo, useState } from 'react';
import './Board.css'
import CellContainer from '../CellContainer/CellContainer';
import Cell from '../../types/Cell';

interface BoardProps {
    board: Cell[][];
    isOpponentsBoard: boolean;
}

const Board: React.FC<BoardProps> = ({ board }) => {

    const fire = (x: number, y: number) => {
        board[x][y].shotFired = true;
    };

    const boardContainer = useMemo(() => {
        return board.map((row, i) => (
            <div key={i} className="board-row">
                {row.map((cell, j) => (
                    <CellContainer key={`${i}-${j}`} status={cell.status} shotFired={cell.shotFired} />
                ))}
            </div>
        ));
    }, [board]);

    return (
        <div className="board">
            {boardContainer}
        </div>
    );
}

export default Board;