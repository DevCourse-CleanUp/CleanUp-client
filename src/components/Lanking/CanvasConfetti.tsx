import React, { useEffect, useRef } from 'react';
import canvasConfetti, { GlobalOptions, Options } from 'canvas-confetti';

interface Props extends Options{
  resize?: boolean;
  useWorker?: boolean;
  fire?: boolean;
  reset?: boolean;
  onFire?: () => void;
  onDecay?: () => void;
  onReset?: () => void;
  refConfetti?: (confetti: any) => void;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
}

const Confetti: React.FC<Props & Options> = ({
  resize = true,
  useWorker = true,
  fire,
  reset,
  onFire,
  onDecay,
  onReset,
  refConfetti,
  className,
  style,
  width,
  height,
  ...confettiProps
}) => {
  const refCanvas = useRef<HTMLCanvasElement>(null);
  const confettiInstance = useRef<any>(null);

  useEffect(() => {
    if (!refCanvas.current) return;

    const globalOptions: GlobalOptions = {
      resize,
      useWorker,
    };

    confettiInstance.current = canvasConfetti.create(refCanvas.current, globalOptions);
    if (refConfetti) refConfetti(confettiInstance.current);

    return () => {
      if (refConfetti) refConfetti(null);
    };
  }, [resize, useWorker, refConfetti]);

  useEffect(() => {
    if (fire) {
      fireConfetti();
    }
  }, [fire]);

  useEffect(() => {
    if (reset) {
      resetConfetti();
    }
  }, [reset]);

  const fireConfetti = () => {
    if (!confettiInstance.current) return;

    if (onFire) onFire();

    const promise = confettiInstance.current(confettiProps);

    if (promise) {
      promise.then(() => {
        if (onDecay) onDecay();
      });
    }
  };

  const resetConfetti = () => {
    if (!confettiInstance.current) return;

    confettiInstance.current.reset();

    if (onReset) onReset();
  };

  return (
    <canvas
      ref={refCanvas}
      className={className}
      style={{ 
        width: width || '100%',
        height: height || '100%',
        // position: "absolute",
        // position: "fixed",
        // top: 0,
        // left: 0,
        ...style 
      }}
    />
  );
};

export default Confetti;