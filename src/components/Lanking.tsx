import { styled } from 'styled-components';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowButton from './common/ArrowButton';

function Lanking() {
  const settings = {
    // dots: true, //갯수 표시 점
    infinite: true, //무한 캐러셀
    speed: 100, //다음 컨텐츠까지의 속도
    slidesToShow: 1, //화면에 보이는 컨텐츠 수
    slidesToScroll: 1, //스크롤 시 넘어가는 컨텐츠 수
    centerMode: true, // 현재 컨텐츠 가운데 정렬
    centerPadding: '10px', // 중앙 컨텐츠 padding 값
    arrows: true,
    autoplay: true,
    prevArrow:<ArrowButton direction="prev" />,
    nextArrow:<ArrowButton direction="next" />,
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
          <Slider {...settings}>
            <div>
              <p>1위<ArrowButton direction="next"/></p>
            </div>
            <div>
              <p>2위<ArrowButton direction="next"/></p>
            </div>
            <div>
              <p>3위<ArrowButton direction="next"/></p>
            </div>
          </Slider>
        </SliderWrapper>
      </LankingStyle>
    </>
  );
}

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
//       <GoChevronLeft />
//     </div>
//   );
// };

// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <div className={className} style={{ ...style, display: "block" }} onClick={onClick}>
//       <GoChevronRight />
//     </div>
//   );
// };

const LankingStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: pink;
  width: 100%;
  height: 300px;
  max-width: 300px;
  margin: auto;

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  .slick-prev,
  .slick-next {
  visibility: visible;
   opacity: 1;
    &:before {
      display: none;
    }
  }

  .slick-prev {
    left: -50px; 
  }

  .slick-next {
    right: -50px;
`; 


export default Lanking;
