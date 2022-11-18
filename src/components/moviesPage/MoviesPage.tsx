import { useEffect, useState } from "react"
import axios from "axios"

import { Body, BoxH2 } from "../../styles/bodyStyle"
import { BoxMovies } from "./style"

import Header from "../header/Header"
import { Movie } from "../movie/Movie"

export default function MoviesPage() {

  interface Movies {
    id: Number;
    overview: String;
    posterURL: string;
    releaseDate: String;
    tittle: String
  }

  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    getMovies()
  }, [])

  function getMovies() {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setMovies(data)
    })
  }

  return (
    <Body>
      <Header />
      <BoxH2>
        <h2>Selecione o Filme</h2>
      </BoxH2>
      <BoxMovies>
        {
          movies.map((item, id) => {
            return (
              <Movie {...item} key={id} />
            )
          })
        }
      </BoxMovies>
    </Body>
  )
}