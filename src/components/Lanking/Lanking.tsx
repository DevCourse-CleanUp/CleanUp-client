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
  const settings = {
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    infinite: true, //무한 캐러셀
    centerPadding: "10px", // 중앙 컨텐츠 padding 값
    slidesToShow: 1, //화면에 보이는 컨텐츠 수
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true, //마우스 올리면 정지

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
        <SliderWrapper>
          <Slider {...settings}>
            {users.map((user) => (
                <div key={user.lanking}>
                <PopConfetti />
                <p>
                  <user.medal />
                </p>
                <p>{user.nickname}</p>
                <p>{user.total_score}점</p>
              </div>
            ))}
          </Slider>
        </SliderWrapper>
      </LankingStyle>
      <ButtonStyle>
        <Link to="/problem">
          <Button size="medium" scheme="abled">
            문제 풀러가기
            <GoArrowRight />
          </Button>
        </Link>
      </ButtonStyle>
    </>
  );
};

const LankingStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: pink;
  width: 300px;
  height: 300px;
  margin: auto;

  border-radius: 30%;

  p {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 6px;

    height: 100%;
    font-size: 1.5em;
  }
`;

const LankingTitleStyle = styled.div`
  display: flex;
  flex-direction: row;
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

const SliderWrapper = styled.div`
  position: relative;
  .slick-prev,
  .slick-next {
    &:before {
      display: none;
    }
  }

  .slick-prev {
    left: -50px;
  }

  .slick-next {
    right: -50px;
  }

  svg {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;

    width: 50px;
    height: 50px;
    color: #ff4f4f;
  }
`;

const ButtonStyle = styled.div`
  gap: 6px;
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
