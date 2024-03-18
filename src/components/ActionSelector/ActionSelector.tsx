import React from "react";
import { StyledInputContainer } from "../InputField/InputField.styled";
import TripleToggleSwitch from "../TripleToggleSwitch/TripleToggleSwitch";

interface ActionSelectorProps {
  onActionChange: (action: "Buy" | "Sell") => void;
}

const ActionSelector: React.FC<ActionSelectorProps> = ({ onActionChange }) => {
  const handleActionChange = (value: string) => {
    onActionChange(value as "Buy" | "Sell");
  };

  return (
    <StyledInputContainer>
      <label>
        <p>Select action:</p>
        <TripleToggleSwitch
          onChange={handleActionChange}
          labels={{
            left: { title: "Buy", value: "Buy" },
            right: { title: "Sell", value: "Sell" },
          }}
        />
      </label>
    </StyledInputContainer>
  );
};

export default ActionSelector;
