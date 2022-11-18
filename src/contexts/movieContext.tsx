import { createContext, ReactNode, useState } from "react";
import { IMovie } from "../interfaces/IMovies";

const MovieContext = createContext<any>(null);
export default MovieContext

interface IProps {
  children: ReactNode
}

export function MovieProvider({ children }: IProps) {
  const [movie, setMovie] = useState<IMovie>()

  return (
    <MovieContext.Provider value={{movie, setMovie}}>
      { children }
    </MovieContext.Provider>
  )
}