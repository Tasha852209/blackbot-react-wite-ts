import React from "react";
import { StyledInputContainer } from "../InputField/InputField.styled";

interface ActionSelectorProps {
  onActionChange: (action: "Buy" | "Sell" | "Select action") => void;
}

const ActionSelector: React.FC<ActionSelectorProps> = ({ onActionChange }) => {
  const handleActionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const action = event.target.value as "Buy" | "Sell" | "Select action";
    onActionChange(action);
  };

  return (
    <StyledInputContainer>
      <label>
        <p>Select action:</p>
        <select onChange={handleActionChange}>
          <option value="Select action"></option>
          <option value="Buy">Buy</option>
          <option value="Sell">Sell</option>
        </select>
      </label>
    </StyledInputContainer>
  );
};

export default ActionSelector;
