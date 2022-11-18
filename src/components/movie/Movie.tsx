import { BoxImg } from "./style"

type movieProps = {
  id: Number;
  overview: String;
  posterURL: string;
  releaseDate: String;
  tittle: String
}

export const Movie = ({ posterURL }: movieProps) => {

  return (
    <BoxImg>
      <img src={ posterURL } alt="Cartaz do filme"></img>
    </BoxImg>
  )
}