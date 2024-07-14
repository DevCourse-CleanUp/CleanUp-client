import { styled } from "styled-components";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoChevronLeft, GoChevronRight, GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
import Button from "../common/Button";

const Lanking = () => {
  const settings = {
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    infinite: true, //무한 캐러셀
    centerPadding: "10px", // 중앙 컨텐츠 padding 값
    slidesToShow: 1, //화면에 보이는 컨텐츠 수
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true, //마우스 올리면 정지
  };

  let sliderRef = useRef<Slider | null>(null);
  const next = () => {
    sliderRef.current?.slickNext();
  };

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <>
      <LankingTitleStyle>
        <div>
          <h2>Lanking</h2>
        </div>
      </LankingTitleStyle>

      <LankingStyle>
        <SliderWrapper>
          <Slider ref={sliderRef} {...settings}>
            <div key={1}>
              <p>1위</p>
            </div>
            <div key={2}>
              <p>2위</p>
            </div>
            <div key={3}>
              <p>3위</p>
            </div>
          </Slider>
        </SliderWrapper>
      </LankingStyle>
      <ButtonStyle>
        <Button
          size="medium"
          scheme="abled"
          className="prev"
          onClick={previous}
        >
          <GoChevronLeft />
        </Button>
        <Button size="medium" scheme="abled" className="next" onClick={next}>
          <GoChevronRight />
        </Button>
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

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    font-size: 1.5em;
  }
`;

const LankingTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0 20px 0;
`;

const SliderWrapper = styled.div`
  position: relative;
  .slick-prev,
  .slick-next {
    /* display: block;
    width: 30px;
    height: 30px;
    z-index: 1; */

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
