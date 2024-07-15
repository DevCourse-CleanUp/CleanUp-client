import { FaRecycle } from "react-icons/fa";
import styled from "styled-components";

// 쓰레기통 & 쓰레기 3색 
export const red = "rgb(255, 30, 30)";
export const green = "rgb(70, 200, 90)";
export const blue = "rgb(70, 70, 200)";

interface TrashCanProps {
    color: string;
    solved: boolean;
    cleaned: boolean;
    size?: number;
}

// cleaned == 쓰레기통과 쓰레기의 위치가 일치할 때 
// solved  == 스테이지가 클리어되어 다음 페이지로 이동할 때
const TrashCan = ({ color, solved, cleaned, size = 110 }: TrashCanProps) => {
    return (
        <TrashCanStyle $color={color} $solved={solved} $size={size} $cleaned={cleaned}>
            <svg className="trashcan" viewBox="0 0 100 100">
                <path id="body-white" d="M10 30 L 20 100 L 70 100 L 80 30 Z" />
                <path id="body" d="M10 30 L 20 100 L 70 100 L 80 30 Z" />
                <path className="cap" d="M10 20 L 10 30 L 80 30 L 80 20 Z" />
                <circle className="cap" cx={10} cy={25} r={5} />
                <circle className="cap" cx={80} cy={25} r={5} />
            </svg>
            <FaRecycle className="recycle"/>
        </TrashCanStyle>
    );
};

interface TrashCanStyleProps {
    $color: string;
    $solved: boolean;
    $cleaned: boolean;
    $size: number;
}

const TrashCanStyle = styled.div<TrashCanStyleProps>`
    transform-origin: 50% 50%;
    padding: 0;
    margin: 0;
    width: ${({ $size }) => $size}px;
    height: ${({ $size }) => $size}px;
    position: relative; /* position 속성 추가 */

    .trashcan {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -10%;
        left: 5%;        

        #body {
            fill: ${({ $color }) => $color.split(")") + "0.8)"};
        }

        #body-white {
            fill: white;    
        }

        .cap {
            fill: ${({ $color }) => $color};
        }
    }

    .recycle {
        position: absolute;
        transform-origin: 50% 50%;;
        z-index: 2;
        width: 40%;
        height: 40%;
        top: 35%;
        left: 30%;
        fill: white;
    }

    animation: ${({ $solved, $cleaned }) => $solved ? "bounce-up 1.5s .7s linear" : $cleaned ? "none" : "shake 1s .7s ease-in-out infinite"};

    @keyframes shake {
        0% { transform: rotateX(0) }
        4% { transform: rotateZ(-3deg) }
        8% { transform: rotateZ(3deg) }
        12% { transform: rotateZ(-3deg) }
        16% { transform: rotateZ(3deg) }
        20% { transform: rotateZ(-3deg) }
        24% { transform: rotateZ(3deg) }
        30% { transform: rotateX(0) }
        100% { transform: rotateX(0) }
    }

    @keyframes bounce-up {
        0% {transform: translateY(0px)}
        60% {transform: translateY(10px)}
        80% {
            opacity: 1;
            transform: translateY(-1000px);
        }
        100% {
            opacity: 0;
            transform: translateY(-1000px);
        }
    }
`;

export default TrashCan;
