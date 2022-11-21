import { IDays } from "../../../interfaces/ISession";
import { BoxSession, BoxHours } from "./style";

import Hours from "../hours/Hours";

export default function Session(props: IDays) {
  return (
    <BoxSession>

      <span>{props.weekday} - {props.date}</span>

      <BoxHours>
        {
          props.showtimes.map((item) => {
            return (<Hours {...item} key={item.id} />)
          })
        }
      </BoxHours>

    </BoxSession>
  )
}