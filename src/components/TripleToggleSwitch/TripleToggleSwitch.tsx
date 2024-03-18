import React, { useState } from "react";

import { SwitchContainer } from "./TripleToggleSwitch.styled";

interface Label {
  title: string;
  value: string | number | boolean;
}

interface TripleToggleSwitchProps {
  labels?: {
    left: Label;
    center?: Label;
    right: Label;
  };
  onChange: (value: string) => void;
}

const TripleToggleSwitch: React.FC<TripleToggleSwitchProps> = ({
  labels = {
    left: { title: "left", value: "left" },
    right: { title: "right", value: "right" },
  },
  onChange,
}) => {
  const [switchPosition, setSwitchPosition] = useState<string>("left");
  const [animation, setAnimation] = useState<string | null>(null);

  const getSwitchAnimation = (value: string) => {
    let animation: string | null = null;
    if (value === "center" && switchPosition === "left") {
      animation = "left-to-center";
    } else if (value === "right" && switchPosition === "center") {
      animation = "center-to-right";
    } else if (value === "center" && switchPosition === "right") {
      animation = "right-to-center";
    } else if (value === "left" && switchPosition === "center") {
      animation = "center-to-left";
    } else if (value === "right" && switchPosition === "left") {
      animation = "left-to-right";
    } else if (value === "left" && switchPosition === "right") {
      animation = "right-to-left";
    }
    onChange(value);
    setSwitchPosition(value);
    setAnimation(animation);
  };

  return (
    <SwitchContainer className="switch-container">
      <div className="main-container">
        <div className={`switch ${animation} ${switchPosition}-position`}></div>
        <input
          defaultChecked
          onChange={(e) => getSwitchAnimation(e.target.value)}
          name="map-switch"
          id="left"
          type="radio"
          value="left"
        />
        <label
          className={`left-label ${switchPosition === "left" && "black-font"}`}
          htmlFor="left"
        >
          <h4>{labels.left.title}</h4>
        </label>

        <input
          onChange={(e) => getSwitchAnimation(e.target.value)}
          name="map-switch"
          id="center"
          type="radio"
          value="center"
        />
        {/* {labels.center && (
          <>
            <input
              onChange={(e) => getSwitchAnimation(e.target.value)}
              name="map-switch"
              id="center"
              type="radio"
              value="center"
            />
            <label
              className={`center-label ${
                switchPosition === "center" && "black-font"
              }`}
              htmlFor="center"
            >
              <h4>{labels.center.title}</h4>
            </label>
          </>
        )} */}

        <input
          onChange={(e) => getSwitchAnimation(e.target.value)}
          name="map-switch"
          id="right"
          type="radio"
          value="right"
        />
        <label
          className={`right-label ${
            switchPosition === "right" && "black-font"
          }`}
          htmlFor="right"
        >
          <h4>{labels.right.title}</h4>
        </label>
      </div>
    </SwitchContainer>
  );
};

export default TripleToggleSwitch;
