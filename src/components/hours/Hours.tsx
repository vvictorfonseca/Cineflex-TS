import { IHour } from "../../interfaces/ISession"
import { BoxHour } from "./style"

export default function Hours(props: IHour) {
  return (
    <BoxHour>{props.name}</BoxHour>
  )
}