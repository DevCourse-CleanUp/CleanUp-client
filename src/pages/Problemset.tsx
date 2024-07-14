import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { GoDotFill, GoTriangleRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FilterButton from "../components/problems/filter/LevelFilterButton";
import NotSolvedOnlyFilterButton from "../components/problems/filter/NotSolvedOnlyFilterButton";

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
    {
        id: 6,
        title: "앞다리가 쑥",
        content: {

        },
        answer: "",
        level: 6,
        score: 6,
        solved: true
    }
]

const Problemset = () => {
    // 레벨별 필터 기능 위해 레벨 배열 추출
    let problemLevel = problemset.map((problem) => problem.level);
    problemLevel = problemLevel.filter((level, idx) => problemLevel.indexOf(level) === idx).sort((a, b) => a - b);

    // 필터 기능 열고 닫기(필터 버튼)
    const [toggleFilter, setToggleFilter] = useState(false);
    // 필터링 위한 배열(전체 버튼, 각 레벨 버튼)
    const [showFilter, setShowFilter] = useState<number[]>(problemLevel);

    const [notSolvedOnly, setNotSolvedOnly] = useState<boolean>(false);

    const handleAllFilter = () => {
        setShowFilter(problemLevel);
        setNotSolvedOnly(false);
    }

    const handleAddFilter = (level: number) => {
        setShowFilter([...showFilter, level]);
    }

    const handleDeleteFilter = (level: number) => {
        setShowFilter(showFilter.filter((num) => num !== level));
    }

    const handleNotSolvedOnlyFilter = () => {
        setNotSolvedOnly(!notSolvedOnly);
    }

    return (
        <ProblemsetStyle $toggleFilter={toggleFilter} $allFilter={showFilter.length===problemLevel.length}>
            <div className="filter">
                <div className="filter-toggle">
                    <button  onClick={() => setToggleFilter(!toggleFilter)}>
                        <GoTriangleRight /> 필터
                    </button>
                </div>
                {   
                    toggleFilter && (
                        <div className="filter-div">
                            <div className="filter-all">
                                <button onClick={handleAllFilter}>전체</button>
                            </div>
                            <div className="filter-grid">
                                <div className="filter-level">
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
                                <div className="filter-not-solved">
                                    <NotSolvedOnlyFilterButton notSolvedOnly={notSolvedOnly} onClick={handleNotSolvedOnlyFilter} />              
                                </div>
                            </div>
                        </div>
                    )
                }
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
                            problemset.map((problem) => showFilter.includes(problem.level) && (notSolvedOnly ? !problem.solved : true) && (
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

interface ProblemsetStyleProps {
    $toggleFilter: boolean;
    $allFilter: boolean;
}

const ProblemsetStyle = styled.div<ProblemsetStyleProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .filter-div {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .filter {
        /* border-bottom: 5px solid ${({ theme }) => theme.color.thirdary}; */
        margin: 10px 13%;
    }

    .filter-toggle {
        button {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.color.text2};
            font-weight: 600;
            background: none;
            border: none;
            margin-bottom: 12px;
            cursor: pointer;
    
            svg {
                transform: ${({ $toggleFilter }) => $toggleFilter ? "rotate(90deg)" : "rotate(0deg)"};
            }
        }
    }

    .filter-grid {
        
        width: 90%;
        
        button {
            margin-bottom: 20px;
        }

        .filter-level {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
        }
    }

    .filter-all {
        width: 10%;
        button {
            font-size: 1.6rem;
            color: ${({ theme, $allFilter }) => $allFilter ? theme.color.text2 : theme.color.text1};
            font-weight: 600;
            background: none;
            border: none;
            cursor: pointer;
        }
    }
    
    .problemset {
        width: 80%;
        text-align: center;
        margin: 0 10%;

        table {
            border-radius: 10px;
        }
        
        thead {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.color.text1};
            background-color: ${({ theme }) => theme.color.thirdary};

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
            font-size: 1.4rem;
            color: ${({ theme }) => theme.color.text2};
            background-color: white;
            
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
