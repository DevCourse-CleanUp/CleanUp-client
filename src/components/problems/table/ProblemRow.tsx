import styled from "styled-components";
import { Problem } from "../../../models/problem.api";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import { FaCheck } from "react-icons/fa";



const ProblemRow = (problem: Problem) => {
    return (
        <ProblemRowStyle $solved={problem.solved}>
            <div className="id">{problem.id}</div>
            <div className="title">
                <Link to={`/problem/${problem.id}`} >
                    {problem.title}
                </Link>
            </div>
            <div className="level">Lv.{problem.level}</div>
            <div className="score">{problem.score}</div>
            <div className="solved">
                {
                    problem.solved ? <FaCheck id="check"/> 
                    : <GoDotFill id="dot" />
                }
            </div>
        </ProblemRowStyle>
    )
}

interface ProblemRowStyleProps {
    $solved: boolean;
}

const ProblemRowStyle = styled.div<ProblemRowStyleProps>`
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: center;
    align-items: center;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.color.text2};
    background-color: white;
            
    height: 5rem;
    border-radius: ${({ theme }) => theme.borderRadius.default};

    .id {
        width: 8%;
    }

    .title {
        width: 53%;
        a {
            text-decoration: none;
            color: ${({ theme }) => theme.color.text2};
            font-size: 2rem;
            font-weight: 550;
        }
    }

    .level {
        width: 13%;
    }

    .score {
        width: 13%;
    }

    .solved {
        width: 13%;
        color: ${({$solved, theme}) => $solved ? "Darkturquoise" : theme.color.text1 }
    }

    &:hover {
        .id, .level, .score, .solved { 
            font-size: 1.8rem;
        }

        .title {
            a {
                font-size: 2.5rem;
            }
        }
    }

    .title & :hover {
        font-size: 2.2rem;
    }
`;

export default ProblemRow;
