import { H2 } from "../style"

interface ISeatNumber {
  name: String | null,
}

export default function SeatNumber(props: ISeatNumber) {
  return (
    <H2>Assento {props.name}</H2>
  )
}