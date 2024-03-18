import styled from "styled-components";

export const StyledAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 50px auto;
  gap: 20px;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  background-color: #7fc4e6;
  padding: 30px 30px;
  border-radius: 20px;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);
  p {
    font-weight: 600;
  }
`;
