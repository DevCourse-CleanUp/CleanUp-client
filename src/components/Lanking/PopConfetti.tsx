import { CreateTypes } from "canvas-confetti";
import { ReactNode, useEffect, useRef } from "react";
import ReactCanvasConfetti from "../Lanking/CanvasConfetti";

interface Props {
  children?: React.ReactNode;
}

const PopConfetti: React.FC<Props> = ({ children }) => {
  const animationInstance = useRef<CreateTypes | null>(null);

  const makeShot = (particleRatio: number, opts: object) => {
    if (animationInstance.current) {
      animationInstance.current({
        ...opts,
        origin: { x: 0.8, y: 0.8 },
        particleCount: Math.floor(200 * particleRatio),
      });
    }
  };

  // 사용자 설정
  const fire = () => {
    makeShot(0.25, {
      spread: 20,
      startVelocity: 55,
    });
  };

  const handlerFire = () => {
    requestAnimationFrame(fire);
  };

  const getInstance = (instance: CreateTypes | null) => {
    animationInstance.current = instance;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      fire();
    }, 3000); //2.5초마다 실행

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 정리
  }, []);

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} className="canvas" />
      {children}
    </>
  );
};

export default PopConfetti;
