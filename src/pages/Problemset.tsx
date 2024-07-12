import styled from "styled-components";
import Button from "../components/common/Button";
import { FaCheck } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { useState } from "react";
import FilterButton from "../components/problems/FilterButton";

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
    }
]

const Problemset = () => {
    // 레벨별 필터 기능 위해 레벨 배열 추출
    let problemLevel = problemset.map((problem) => problem.level);
    problemLevel = problemLevel.filter((level, idx) => problemLevel.indexOf(level) === idx).sort((a, b) => a - b);

    // 필터 기능 열고 닫기(필터 버튼)
    const [exposedFilter, setExposedFilter] = useState(false);
    // 필터링 위한 배열(전체 버튼, 각 레벨 버튼)
    const [showFilter, setShowFilter] = useState<number[]>(problemLevel);

    const handleAllFilter = () => {
        setShowFilter(showFilter.length ? [] : problemLevel);
    }

    const handleAddFilter = (level: number) => {
        setShowFilter([...showFilter, level]);
    }

    const handleDeleteFilter = (level: number) => {
        setShowFilter(showFilter.filter((num) => num !== level));
    }


    return (
        <ProblemsetStyle>
            <div className="filter-button">
                <button onClick={() => setExposedFilter(!exposedFilter)}>필터</button>
            </div>
            {   
                exposedFilter && (
                    <div className="filter">
                        <button onClick={handleAllFilter}>전체</button>
                        {
                            problemLevel.map((level) => (
                                <>
                                    <FilterButton onClick={() => showFilter.includes(level) ? 
                                        handleDeleteFilter(level)
                                        : handleAddFilter(level)
                                    }
                                    buttonId={level}
                                    showFilter={showFilter}
                                    ></FilterButton>
                                </>
                            ))                             
                        }
                    </div>
                )
            }
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
                            problemset.map((problem) => (showFilter.length === 0 || showFilter.includes(problem.level)) && (
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

    .filter {
        display: flex;
        flex-direction: row;
        gap: 20px;
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
