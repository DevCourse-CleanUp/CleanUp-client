import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import FilterBox from "../components/problems/filter/FilterBox";
import ProblemsTable from "../components/problems/table/ProblemsTable";
import { useRecoilState, useSetRecoilState } from "recoil";
import { filterHeightState, footerHeightState, headerHeightState } from "../atoms/heightAtom";

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
        level: 2,
        score: 5,
        solved: true
    },
    {
        id: 7,
        title: "팔딱팔딱",
        level: 3,
        score: 4,
        solved: false
    },
    {
        id: 8,
        title: "개구리 됐네",
        level: 3,
        score: 8,
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

    const [toggleFilter, setToggleFilter] = useState<boolean>(false);

    const filterRef = useRef<HTMLDivElement>(null);
    const setFilterHeight = useSetRecoilState(filterHeightState);

    useEffect(() => {
        setFilterHeight(filterRef.current?.offsetHeight || 700);
    }, [toggleFilter])

    return (
        <ProblemsetStyle>
            <div className="filter" ref={filterRef}>
                <FilterBox setShowFilter={setShowFilter} setNotSolvedOnly={setNotSolvedOnly} showFilter={showFilter} notSolvedOnly={notSolvedOnly} problemLevel={problemLevel} toggleFilter={toggleFilter} setToggleFilter={setToggleFilter} />
            </div>
            <div className="table">
                <ProblemsTable showFilter={showFilter} notSolvedOnly={notSolvedOnly} problemset={problemset} toggleFilter={toggleFilter} />
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
        margin: 0 10%;
        padding: 30px 0 0 0;
    }

    .table {
        width: 80%;
        margin-left: 10%;
    }
`;


export default Problemset;
