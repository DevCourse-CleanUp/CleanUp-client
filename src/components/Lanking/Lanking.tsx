import { styled } from "styled-components";
import Slider, { CustomArrowProps } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoChevronLeft, GoChevronRight, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import { FaCrown } from "react-icons/fa";
import {
  TbHexagonNumber1Filled,
  TbHexagonNumber2Filled,
  TbHexagonNumber3Filled,
} from "react-icons/tb";
import PopConfetti from "./PopConfetti";
import { useRef, useState } from "react";

const users = [
  {
    lanking: "1",
    medal: TbHexagonNumber1Filled,
    nickname: "김세모",
    total_score: 5889,
  },
  {
    lanking: "2",
    medal: TbHexagonNumber2Filled,
    nickname: "이네모",
    total_score: 4683,
  },
  {
    lanking: "3",
    medal: TbHexagonNumber3Filled,
    nickname: "박동그라미",
    total_score: 2889,
  },
];

const Lanking = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const confettiRef = useRef<{ fire: () => void }>(null);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,

    afterChange: (current: number) => setCurrentSlide(current),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  function PrevArrow(props: CustomArrowProps) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <GoChevronLeft style={{ fontSize: "40px", color: "#97cf9d" }} />
      </div>
    );
  }

  function NextArrow(props: CustomArrowProps) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <GoChevronRight style={{ fontSize: "40px", color: "#97cf9d" }} />
      </div>
    );
  }

  const handleButtonClick = () => {
    if (confettiRef.current) {
      confettiRef.current.fire();
    }
  };

  return (
    <>
      <LankingTitleStyle>
        <div>
          <h2>
            <FaCrown />
            Lanking
            <FaCrown />
          </h2>
        </div>
      </LankingTitleStyle>

      <LankingStyle>
        <Slider {...settings}>
          {users.map((user) => (
            <div key={user.lanking}>
              <p>
                <user.medal />
              </p>
              <p>{user.nickname}</p>
              <p>{user.total_score}점</p>
            </div>
          ))}
        </Slider>
      </LankingStyle>
      <ButtonStyle>
        <Link to="/problem">
          <Button
            size="long"
            scheme="abled"
            borderRadius="round"
            onMouseOver={handleButtonClick}
            className="goProblemBtn"
          >
            문제 풀러가기
            <GoArrowRight />
          </Button>
        </Link>
      </ButtonStyle>
      <PopConfetti ref={confettiRef} />
    </>
  );
};

const LankingStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  width: 300px;
  height: 300px;
  margin: auto;
  border-radius: 30%;
  background: pink;

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6px;

    font-size: 1.5em;
  }

  .slick-prev,
  .slick-next {
    &:before {
      display: none;
    }
  }

  .slick-prev {
    left: -80px;
  }

  .slick-next {
    right: -50px;
  }

  svg {
    width: 50px;
    height: 50px;
    color: #ff4f4f;
  }
`;

const LankingTitleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0 20px 0;

  font-family: cursive;
  color: ${({ theme }) => theme.headerText.default.color};
  font-size: 25px;
  font-weight: ${({ theme }) => theme.headerText.default.fontWeight};
  text-shadow: ${({ theme }) => theme.headerText.default.textShadow};

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  svg {
    color: #ffe282;
    width: 40px;
    height: 40px;
  }
`;

const ButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  
  a {
    text-decoration: none;
  }

  svg {
    margin-left: 6px;
  }
`;

export default Lanking;
