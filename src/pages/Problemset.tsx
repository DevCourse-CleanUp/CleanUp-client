import styled from "styled-components";
import { useState } from "react";
import ProblemRow from "../components/problems/table/ProblemRow";
import ProblemHead from "../components/problems/table/ProblemHead";
import FilterBox from "../components/problems/filter/FilterBox";

const problemset = [
    {
        id: 1,
        title: "개울가에",
        level: 1,
        score: 1,
        solved: true
    },
    {
        id: 2,
        title: "올챙이 한 마리",
        level: 2,
        score: 2,
        solved: true
    },
    {
        id: 3,
        title: "꼬물꼬물",
        level: 3,
        score: 3,
        solved: false
    },
    {
        id: 4,
        title: "헤엄치다",
        level: 4,
        score: 4,
        solved: false
    },
    {
        id: 5,
        title: "뒷다리가 쑥",
        level: 5,
        score: 5,
        solved: true
    },
    {
        id: 6,
        title: "앞다리가 쑥",
        level: 6,
        score: 6,
        solved: true
    }
]

const Problemset = () => {
    // 레벨별 필터 기능 위해 레벨 배열 추출
    let problemLevel = problemset.map((problem) => problem.level);
    problemLevel = problemLevel.filter((level, idx) => problemLevel.indexOf(level) === idx).sort((a, b) => a - b);

    // 필터링 위한 배열(전체 버튼, 각 레벨 버튼)
    const [showFilter, setShowFilter] = useState<number[]>(problemLevel);

    const [notSolvedOnly, setNotSolvedOnly] = useState<boolean>(false);

    return (
        <ProblemsetStyle>
            <div className="filter">
                <FilterBox setShowFilter={setShowFilter} setNotSolvedOnly={setNotSolvedOnly} showFilter={showFilter} notSolvedOnly={notSolvedOnly} problemLevel={problemLevel}/>
            </div>
            <div className="problems">
                <ProblemHead />
                {   
                    problemset.map((problem) => showFilter.includes(problem.level) && (notSolvedOnly ? !problem.solved : true) && (
                        <ProblemRow id={problem.id} title={problem.title} level={problem.level} score={problem.score} solved={problem.solved} />
                    ))
                }
            </div>
        </ProblemsetStyle>
    )
}


const ProblemsetStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .filter {
        width: 80%;
        margin-left: 10%;
    }

    .problems {
        display: flex;
        flex-direction: column;
        width: 80%;
        gap : 10px;
        margin-left: 10%;
    }
`;


export default Problemset;
