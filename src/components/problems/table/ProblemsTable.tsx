import styled from "styled-components";
import ProblemHead, { HEIGHT } from "./ProblemHead";
import ProblemRow from "./ProblemRow";
import { Problem } from "../../../models/problem.api";
import { useRecoilState } from "recoil";
import { filterHeightState, footerHeightState, headerHeightState } from "../../../atoms/heightAtom";

interface ProblemsTableProps {
    problemset: Problem[];
    showFilter: number[];
    notSolvedOnly: boolean;
    toggleFilter: boolean;
}

const ProblemsTable = ({problemset, showFilter, notSolvedOnly, toggleFilter}: ProblemsTableProps) => {
    const [headerHeight] = useRecoilState(headerHeightState);
    const [footerHeight] = useRecoilState(footerHeightState);
    const [filterHeight] = useRecoilState(filterHeightState);

    console.log(headerHeight, footerHeight, filterHeight);

    return (
        <ProblemsTableStyle $toggleFilter={toggleFilter} $headerHeight={headerHeight} $footerHeight={footerHeight} $filterHeight={filterHeight}>
            <div className="head">
                <ProblemHead />
            </div>
            <div className="body">
                {   
                    problemset.map((problem) => showFilter.includes(problem.level) && (notSolvedOnly ? !problem.solved : true) && (
                        <ProblemRow id={problem.id} title={problem.title} level={problem.level} score={problem.score} solved={problem.solved} />
                    ))
                }
            </div>
        </ProblemsTableStyle>
    )
}

interface ProblemsTableStyleProps {
    $toggleFilter: boolean;
    $headerHeight: number;
    $footerHeight: number;
    $filterHeight: number;
}

const ProblemsTableStyle = styled.div<ProblemsTableStyleProps>`
    display: flex;
    flex-direction: column;
    gap : 10px;

    .body {
        display: flex;
        flex-direction: column;
        gap : 10px;
        max-height: ${({$headerHeight, $filterHeight, $footerHeight}) => window.innerHeight - $headerHeight - $filterHeight - $footerHeight - HEIGHT -20}px;
        overflow-y: scroll;  
        border-radius: ${({ theme }) => theme.borderRadius.default};
    }

    .body::-webkit-scrollbar {
        width: 3px;
    }
`;

export default ProblemsTable;
