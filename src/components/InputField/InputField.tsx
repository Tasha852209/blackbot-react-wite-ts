import React from "react";
import { StyledInputContainer } from "./InputField.styled";

interface InputFieldProps {
  onEthAmountChange: (amount: number) => void;
}

const InputField: React.FC<InputFieldProps> = ({ onEthAmountChange }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(event.target.value);

    onEthAmountChange(amount);
  };

  return (
    <StyledInputContainer>
      <label>
        <p>Enter ETH amount:</p>
        <input type="number" min="0" onChange={handleInputChange} />
      </label>
    </StyledInputContainer>
  );
};

export default InputField;
