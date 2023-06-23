import React from 'react';
import './Cell.css';

interface CellProps {
  status: 'free' | 'occupied' | 'destroyed';
  shotFired: boolean;
}

const Cell: React.FC<CellProps> = ({ status, shotFired }) => {
  let cellClassName = '';

  if (status === 'free') {
    cellClassName = 'cell-free';
  } else if (status === 'occupied') {
    cellClassName = 'cell-occupied';
  } else if (status === 'destroyed') {
    cellClassName = 'cell-destroyed';
  }

  if (status === 'free' && shotFired === true) {
    cellClassName = 'cell-fired'
  }


  return <div className={`cell ${cellClassName}`} />;
};

export default Cell;
