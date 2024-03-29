import React, { FunctionComponent } from "react";
import "./IntroScreen.scss";
export interface IIntroScreen {
  handleStartGame: () => void;
}

export const IntroScreen: FunctionComponent<IIntroScreen> = (
  props: IIntroScreen
): JSX.Element => {
  const { handleStartGame } = props;
  return (
    <div className="IntroScreen">
      <h1>Welcome young trainer its time to begin your journey!</h1>
      <button onClick={handleStartGame}>Start Game</button>
      <br />
      <br />
      <br />
      <p>
        This is a W.I.P pack opener simulator created with React & framer-motion
      </p>
    </div>
  );
};
