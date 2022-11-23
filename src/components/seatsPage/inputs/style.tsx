import styled from "styled-components";

export const BoxInputs = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 41px auto 57px auto;
  width: 90%;
`
export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const H1 = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: #293845;
`
export const Input = styled.input`
  width: 100%;
  height: 51px;
  border: 1px solid #D5D5D5;
  border-radius: 3px;
  padding-left: 17px;
  color: #293845;
  font-size: 16px;
  font-weight: 300;
  margin-top: 4px;
  margin-bottom: 10px;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  ::placeholder {
    font-weight: 300;
    font-size: 18px;
    font-style: italic;
    color: #AFAFAF;
  }
`