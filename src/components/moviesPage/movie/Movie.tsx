import { useNavigate } from "react-router-dom";

import { BoxImg } from "./style"

import { IMovie } from "../../../interfaces/IMovies";
import { IMovieContext } from "../../../contexts/movieContext";

import MovieContext from "../../../contexts/movieContext";
import { useContext } from "react";

export const Movie = (props: IMovie) => {
  const navigate = useNavigate()

  const { setMovie } = useContext<IMovieContext>(MovieContext)

  return (
    <BoxImg onClick={() => {
      navigate(`/sessoes/${props.id}`)
      setMovie({
        id: props.id,
        overview: props.overview,
        posterURL: props.posterURL,
        releaseDate: props.releaseDate,
        title: props.title
      })
    }}>
      <img src={props.posterURL} alt="Cartaz do filme"></img>
    </BoxImg>
  )
}