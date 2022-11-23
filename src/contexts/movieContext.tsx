import { createContext, ReactNode, useState } from "react";
import { IMovie } from "../interfaces/IMovies";

export interface IMovieContext {
  movie: IMovie;
  setMovie: (newState: IMovie) => void;
}

const initialValue = {
  movie: {
    id: 0,
    overview: "",
    posterURL: "",
    releaseDate: "",
    title: "",
  },
  setMovie: () => {}
}

const MovieContext = createContext<IMovieContext>(initialValue);
export default MovieContext

export interface IProps {
  children: ReactNode
}

export function MovieProvider({ children }: IProps) {
  const [movie, setMovie] = useState<IMovie>(initialValue.movie)

  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {children}
    </MovieContext.Provider>
  )
}