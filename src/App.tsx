import React, { useState, useEffect } from "react";
import InputField from "./components/InputField/InputField";
import ActionSelector from "./components/ActionSelector/ActionSelector";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";
import { StyledAppContainer } from "./App.styled";

const App: React.FC = () => {
  const [ethAmount, setEthAmount] = useState<number>(0);
  const [action, setAction] = useState<"Buy" | "Sell">("Buy");
  const [usdtPrice, setUsdtPrice] = useState<number>(0);

  useEffect(() => {
    const ws = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setUsdtPrice(parseFloat(data.p));
    };

    return () => {
      ws.close();
    };
  }, []);

  const handleEthAmountChange = (amount: number) => {
    setEthAmount(amount);
  };

  const handleActionChange = (selectedAction: "Buy" | "Sell") => {
    setAction(selectedAction);
  };

  const calculateUsdtAmount = (): number => {
    if (action) {
      return Number((ethAmount * usdtPrice).toFixed(2));
    }
    return 0;
  };

  return (
    <StyledAppContainer>
      <p>Price ETH/USDT: {Number(usdtPrice.toFixed(2))}</p>
      <InputField onEthAmountChange={handleEthAmountChange} />
      <ResultDisplay usdtAmount={calculateUsdtAmount()} />
      <ActionSelector onActionChange={handleActionChange} />
    </StyledAppContainer>
  );
};

export default App;
