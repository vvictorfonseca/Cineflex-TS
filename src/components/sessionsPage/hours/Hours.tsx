import { useNavigate } from "react-router-dom"

import { IHour } from "../../../interfaces/ISession"
import { BoxHour } from "./style"

export default function Hours(props: IHour) {
  const navigate = useNavigate()

  return (
    <BoxHour onClick={() => navigate(`/assentos/${props.id}`)}>{props.name}</BoxHour>
  )
}