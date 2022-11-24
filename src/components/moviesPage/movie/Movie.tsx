import { useNavigate } from "react-router-dom";

import { BoxImg } from "./style"

import { IMovie } from "../../../interfaces/IMovies";

export const Movie = (props: IMovie) => {
  const navigate = useNavigate()

  return (
    <BoxImg onClick={() => {
      navigate(`/sessoes/${props.id}`)
    }}>
      <img src={props.posterURL} alt="Cartaz do filme"></img>
    </BoxImg>
  )
}