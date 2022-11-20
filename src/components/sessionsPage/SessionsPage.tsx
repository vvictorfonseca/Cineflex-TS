import { useContext, useEffect, useState } from "react"
import axios from "axios";

import { Body, BoxH2 } from "../../styles/bodyStyle"
import { BoxMovieInfo, BoxImg, H2 } from "../../styles/movieInfoStyle";

import { IMovie } from "../../interfaces/IMovies";
import { ISession } from "../../interfaces/ISession";

import MovieContext from "../../contexts/movieContext"

import Header from "../header/Header"
import Session from "../session/Session"
import { useParams } from "react-router-dom";

interface IMovieContext {
  movie: IMovie
}

export default function SessionsPage() {
  const movieId = useParams()

  const { movie } = useContext<IMovieContext>(MovieContext)

  const [sessions, setSessions] = useState<ISession>()

  useEffect(() => {
    getSessions()
  }, [])

  function getSessions() {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId.id}/showtimes`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setSessions(data)
    })
    promise.catch(err => {
      console.log(err)
    })
  }

  return (
    <Body>
      <Header />

      <BoxH2>
        <h2>Selecione o Horário</h2>
      </BoxH2>

      {
        sessions?.days.map((item, id) => {
          return (
            <Session {...item} key={id} />
          )
        })
      }

      <BoxMovieInfo>

        <BoxImg>
          <img src={movie.posterURL} alt="Cartaz do filme"></img>
        </BoxImg>

        <H2>{movie.title}</H2>

      </BoxMovieInfo>

    </Body>
  )
}