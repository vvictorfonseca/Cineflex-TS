import styled from "styled-components";

export const BoxMovieInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 117px;
  border-top: 2px gray;
  background-color: #DFE6ED;
`
export const BoxImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 89px;
  margin-left: 10px;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  img {
    width: 48px;
  }
`
export const H2 = styled.h2`
  font-size: 26px;
  font-weight: 400;
  color: #293845;
  margin-left: 14px;
`