import { forwardRef, useEffect, useImperativeHandle } from "react";
import confetti from "canvas-confetti";

const PopConfetti = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    fire() {
      confetti({
        particleCount: 100, //파티클 갯수
        spread: 70, //넓게 퍼지는 정도
        origin: { y: 0.7 }, //터지는 위치(높이)
      });
    },
  }));

  useEffect(() => {
    return () => {
      confetti.reset();
    };
  }, []);

  return null;
});

export default PopConfetti;
