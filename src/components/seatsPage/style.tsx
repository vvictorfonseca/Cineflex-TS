import styled from "styled-components";

export const BoxSeats = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 42px;
  margin: 0 auto 30px auto;
  font-size: 16px;
  font-weight: 400;
  color: white;
  background-color: #E8833A;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  :last-child {
    margin-bottom: 100px;
    margin-top: 25px;
  }
`