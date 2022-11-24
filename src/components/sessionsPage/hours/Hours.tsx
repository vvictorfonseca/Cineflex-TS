import { useNavigate } from "react-router-dom"

import { IHourProps } from "../../../interfaces/ISession"
import { BoxHour } from "./style"

export default function Hours(props: IHourProps) {
  const navigate = useNavigate()

  return (
    <BoxHour onClick={() => navigate(`/assentos/${props.id}`)}>{props.name}</BoxHour>
  )
}