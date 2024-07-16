import React from 'react';
import styled from 'styled-components';

interface TrashProps {
  color: string;
  size?: number;
  cleaned: boolean;
}

const Trash = ({ color, size = 110, cleaned }: TrashProps) => {
  return (
    <TrashStyle $size={size} $cleaned={cleaned}>
      <svg viewBox="0 0 24 24">
        <g>
          <path fill="gray" d="M7 2.01h10c.55 0 1 .45 1 1V4H6v-.99c0-.56.45-1 1-1z" />
          <path fill={color} d="M6 5v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5H6z" />
          <line x1={16} x2={16} y1={5} y2={21} color='white' stroke='rgb(255, 255, 255, 0.3)' strokeWidth={1.8} />
        </g>
      </svg>
    </TrashStyle>
  );
};

interface TrashStyleProps {
    $size: number;
    $cleaned: boolean;
}

const TrashStyle = styled.div<TrashStyleProps>`
  display: inline-block;
  position: relative;

  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  animation: ${({$cleaned}) => $cleaned ? "none" : "bounce 1s 1s infinite"};

  opacity: ${({$cleaned}) => $cleaned ? 0 : 1};
  
  svg {
    width: 80%;
    height: 80%;
    margin-top: 10%;
    margin-left: 10%;
  }

  @keyframes bounce {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    10% {transform: scale(1.05)}
    20% {transform: scale(0.95)}
    30% {transform: scale(1.05)}
    40% {transform: scale(0.95)}
    50% {transform: scale(1)}
    100% {transform: scale(1)}
  }
`;

export default Trash;
