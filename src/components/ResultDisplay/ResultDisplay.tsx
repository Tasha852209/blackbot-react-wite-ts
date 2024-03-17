import React from "react";
import { StyledInputContainer } from "../InputField/InputField.styled";

interface ResultDisplayProps {
  usdtAmount: number;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ usdtAmount }) => {
  return (
    <StyledInputContainer>
      <label>
        <p>You will receive USDT:</p>
        <input value={usdtAmount} />
      </label>
    </StyledInputContainer>
  );
};

export default ResultDisplay;
