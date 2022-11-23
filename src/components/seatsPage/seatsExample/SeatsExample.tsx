import { seatBackgroundColor, seatBorderColor } from "../seat/Seat"

import { BoxExamples, BoxExample, BoxCircle, P } from "./style"

export default function SeatsExample() {
  return (
    <BoxExamples>
      <BoxExample>
        <BoxCircle backgroundColor={seatBackgroundColor.selected} borderColor={seatBorderColor.selected} />
        <P>Selecionado</P>
      </BoxExample>

      <BoxExample>
        <BoxCircle backgroundColor={seatBackgroundColor.available} borderColor={seatBorderColor.available} />
        <P>Disponível</P>
      </BoxExample>

      <BoxExample>
        <BoxCircle backgroundColor={seatBackgroundColor.unavailable} borderColor={seatBorderColor.unavailable} />
        <P>Indisponível</P>
      </BoxExample>
    </BoxExamples>
  )
}