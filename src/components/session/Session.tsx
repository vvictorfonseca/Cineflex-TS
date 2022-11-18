import { IDays, ISession } from "../../interfaces/ISession";

export default function Session( props: any) {
  const showTimes = props.showtimes
  console.log(showTimes)
  return (
    <span>{props.weekday} - {props.date}</span>
    
  )
}