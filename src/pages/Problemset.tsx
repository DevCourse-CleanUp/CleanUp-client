import styled from "styled-components";
import Button from "../components/common/Button";
import { FaCheck } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

const problemset = [
    {
        id: 1,
        title: "개울가에",
        content: {

        },
        answer: "",
        level: 1,
        score: 1,
        solved: true
    },
    {
        id: 2,
        title: "올챙이 한 마리",
        content: {

        },
        answer: "",
        level: 2,
        score: 2,
        solved: true
    },
    {
        id: 3,
        title: "꼬물꼬물",
        content: {

        },
        answer: "",
        level: 3,
        score: 3,
        solved: false
    },
    {
        id: 4,
        title: "헤엄치다",
        content: {

        },
        answer: "",
        level: 4,
        score: 4,
        solved: false
    },
    {
        id: 5,
        title: "뒷다리가 쑥",
        content: {

        },
        answer: "",
        level: 5,
        score: 5,
        solved: true
    },
]

function Problemset() {
    return (
        <ProblemsetStyle>
            <div className="filter-button">
                <button>필터</button>
            </div>
            <div>
                {/* 단계 선택 */}
            </div>
            <div>
                <table className="problemset">
                    <thead>
                        <tr>
                            <th id="id">No.</th>
                            <th id="title">Title</th>
                            <th id="level">Level</th>
                            <th id="score">Score</th>
                            <th id="solved">Solved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            problemset.map((problem) => (
                                <tr>
                                    <td className="td_id">{problem.id}</td>
                                    <td className="td_title">
                                        <Link to={`/problem/${problem.id}`} >
                                            {problem.title}
                                        </Link>
                                    </td>
                                    <td className="td_level">Lv.{problem.level}</td>
                                    <td className="td_score">{problem.score}</td>
                                    <td className="td_solved">
                                        {
                                            problem.solved ? <FaCheck id="check"/> 
                                            : <GoDotFill id="dot" />
                                        }
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </ProblemsetStyle>
    )
}

const ProblemsetStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    .filter-button {
        width: 100%;
        margin: 20px 13% 40px;
        display: flex;
        justify-content: start;
        gap: 12px;

        button {
            background: none;
            border: 0;
            font-size: 1.2rem;
        }
    }
    
    .problemset {
        width: 80%;
        text-align: center;
        margin: 0 10%;
        
        thead {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.color.text1};

            #id {
                width: 10%;
            }

            #title {
                width: 30%;
            }

            #level {
                width: 15%;
            }

            #score {
                width: 15%;
            }

            #solved {
                width: 10%;
            }
        }

        tbody {
            td {

            }
            
            tr {
                height: 5rem;
                &:hover {
                    a {
                        font-size: 2.2rem;
                    }
                }
            }
        }
        
        a {
            text-decoration: none;
            color: ${({ theme }) => theme.color.text2};
            font-size: 2rem;
            font-weight: 550;
        }
    }

    svg {
        #dot {
            color: ${({ theme }) => theme.color.game}
        }

        #check {
            color: aqua;
        }
    }
`;

export default Problemset;
