import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  padding: 30px 20px;
  border-radius: 20px;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.45),
    5px 5px 9px rgba(94, 104, 121, 0.3);
  input {
    width: 250px;
    padding: 10px 5px;
    border-radius: 10px;
  }
  select {
    position: relative;
    width: 250px;
    padding: 10px 5px;
    border-radius: 10px;
  }
`;
