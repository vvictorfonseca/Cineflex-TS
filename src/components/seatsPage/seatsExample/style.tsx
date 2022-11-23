import styled from "styled-components";

import { ISeatColor } from "../seat/style";

export const BoxExamples = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: 54px;
  margin: 0px auto;
`
export const BoxExample = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 54px;
`
export const BoxCircle = styled.div.attrs<ISeatColor>(props => ({
  style: {
    backgroundColor: props.backgroundColor,
    border: props.borderColor
  }
})) <ISeatColor>`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-bottom: 10px;
`
export const P = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #4E5A65;
`