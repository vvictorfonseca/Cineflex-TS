import styled from "styled-components";

export interface ISeatColor {
  backgroundColor: string;
  borderColor: string;
}

export const BoxSeat = styled.div.attrs<ISeatColor>(props => ({
  style: {
    backgroundColor: props.backgroundColor,
    border: props.borderColor
  }
})) <ISeatColor>`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  margin: 0px 3.5px 19px 3.5px;
  border: 1px solid #808F9D;
  border-radius: 50%;
  cursor: pointer;
`