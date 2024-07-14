import { FaFire } from "react-icons/fa";
import { CreateTypes } from "canvas-confetti";
import { Component } from "react";
import ReactCanvasConfetti from "../Lanking/CanvasConfetti";

export default class PopConfetti extends Component {
  private isAnimationEnabled: boolean;
  private animationInstance: CreateTypes | null = null;

  constructor(props: {}) {
    super(props);
    this.isAnimationEnabled = false;
    this.fire = this.fire.bind(this);
  }

  makeShot(particleRatio: number, opts: object) {
    this.animationInstance &&
      this.animationInstance({
        ...opts,
        origin: { y: 0.8 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }

  // 이 부분에서 사용하고 싶은 설정을 하면 된다.
  fire() {
    this.makeShot(0.25, {
      spread: 25,
      startVelocity: 55,
    });
  }

  handlerFire = () => {
    if (!this.isAnimationEnabled) {
      this.isAnimationEnabled = true;
    }
    requestAnimationFrame(this.fire);
  };

  getInstance = (instance: CreateTypes | null) => {
    this.animationInstance = instance;
  };

  render() {
    return (
      <div onClick={this.handlerFire}>
        <FaFire />
        <ReactCanvasConfetti
          refConfetti={this.getInstance}
          className="canvas"
        />
      </div>
    );
  }
}