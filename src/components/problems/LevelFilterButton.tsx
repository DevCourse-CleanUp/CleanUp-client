import styled from "styled-components";
import {MdOutlineCheck, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank} from "react-icons/md"; 

interface LevelFilterButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    onClick: () => void;
    buttonId: number;
    showFilter: number[];
}

const LevelFilterButton = ({buttonId, showFilter, onClick}: LevelFilterButtonProps) => {
    const show = showFilter.includes(buttonId)

    return (
        <LevelFilterButtonStyle $show={show}>
            <button onClick={onClick}>
                {
                    show ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />
                }
                Lv.{buttonId}
            </button>
        </LevelFilterButtonStyle>
    )
}

interface ILevelFilterButtonStyleProps {
    $show: boolean;
}

export const LevelFilterButtonStyle = styled.div<ILevelFilterButtonStyleProps>`

button {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        background: none;
        border: 0;
        gap: 8px;
        width: 100px;
        
        color: ${({ theme, $show }) => $show ? theme.color.text2 : theme.color.text1};
        font-weight: ${({ $show }) => $show ? 700 : 100};
        
        svg {
            width: 32px;
            height: 32px;
        }
        cursor: pointer;
    }
`;

export default LevelFilterButton;
