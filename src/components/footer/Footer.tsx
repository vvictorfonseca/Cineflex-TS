import { BoxMovieInfo, BoxImg, BoxInfo, H2, Span } from "../../styles/movieInfoStyle";

import { IDay } from "../../interfaces/ISeats";
import { IMovie } from "../../interfaces/IMovies";

export interface IFotterProps {
  day: IDay;
  movie: IMovie;
}

export default function Footer(props: IFotterProps) {
  return (
    <BoxMovieInfo>

      <BoxImg>
        <img src={props.movie.posterURL} alt="Cartaz do filme"></img>
      </BoxImg>

      <BoxInfo>
        <H2>{props.movie.title}</H2>
        {props.day.weekday !== "" ? <Span>{props.day.weekday} - {props.day.date}</Span> : <></>}
      </BoxInfo>

    </BoxMovieInfo>
  )
}