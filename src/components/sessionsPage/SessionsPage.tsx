import { useContext, useEffect, useState } from "react"
import axios from "axios";

import { Body, BoxH2 } from "../../styles/bodyStyle"

import { IMovie } from "../../interfaces/IMovies";
import { ISession } from "../../interfaces/ISession";

import MovieContext from "../../contexts/movieContext"

import Header from "../header/Header"
import Session from "../session/Session"

interface MovieContext {
  movie: IMovie
}

export default function SessionsPage() {
  const { movie }: MovieContext = useContext(MovieContext);

  const [sessions, setSessions] = useState<ISession>()
  console.log(sessions)

  useEffect(() => {
    getSessions()
  },[])

  function getSessions() {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movie.id}/showtimes`

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
        sessions?.days.map((item) => {
          return (
            <Session {...item} />
          )
        })
      }

    </Body>
  )
}