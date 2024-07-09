import { styled } from 'styled-components';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

interface Props {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  direction: 'prev' | 'next';
}

function ArrowButton({ className, style, onClick, direction }: Props) {
  return (
    <ArrowButtonStyle className={className} style={style} onClick={onClick}>
      {direction === 'prev' ? <GoChevronLeft /> : <GoChevronRight />}
    </ArrowButtonStyle>
  );
}

const ArrowButtonStyle = styled.button`
  width: 50px;
  height: 50px;

  color: grey;
  background: transparent;
  border: none;
  cursor: pointer;
  svg {
    width: 50px;
    height: 50px;
  }
`;

export default ArrowButton;
