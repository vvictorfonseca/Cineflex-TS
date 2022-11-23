import { useState } from "react";
import { ISeatProps } from "../../../interfaces/ISeats";

import { message } from 'antd';

import { BoxSeat } from "./style";

export const seatBackgroundColor = {
  selected: "#8DD7CF",
  available: "#C3CFD9",
  unavailable: "#FBE192"
}

export const seatBorderColor = {
  selected: "1px solid #45BDB0",
  available: "1px solid #808F9D",
  unavailable: "1px solid #F7C52B"
}

export default function Seat(props: ISeatProps) {
  const [isSelected, setIsSelected] = useState<Boolean>(false)

  let index = props.selectedSeats.indexOf(props.id as never)

  function selectElement() {
    if (props.isAvailable == false) {

      return message.error("Esse assento não está disponível")

    } else if (isSelected == true) {
      setIsSelected(false)
      props.selectedSeats.splice(index, 1)
      

    } else if (isSelected == false) {
      setIsSelected(true)
      props.setSelectedSeats([...props.selectedSeats as any[], props.id])
    }
  }

  return (
    <BoxSeat
      onClick={() => selectElement()}
      backgroundColor={isSelected ? seatBackgroundColor.selected : props.isAvailable ? seatBackgroundColor.available : seatBackgroundColor.unavailable}
      borderColor={isSelected ? seatBorderColor.selected : props.isAvailable ? seatBorderColor.available : seatBorderColor.unavailable}
      >
      {props.name}
    </BoxSeat>
  )
}