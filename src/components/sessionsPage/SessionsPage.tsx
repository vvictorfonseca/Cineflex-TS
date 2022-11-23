import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

import { Spin } from 'antd';

import { Body, BoxH2, BoxLoading } from "../../styles/bodyStyle"

import { ISession } from "../../interfaces/ISession";

import Header from "../header/Header"
import Session from "./session/Session"
import Footer from "../footer/Footer";
import { IMovie } from "../../interfaces/IMovies";

import { initalValueSessionPage } from "../../initalValues/initialValues";
import { initalValueSeatsPage } from "../../initalValues/initialValues";

export default function SessionsPage() {
  const movieId = useParams()

  const [sessions, setSessions] = useState<ISession>(initalValueSessionPage)
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  const movieInfos: IMovie = {
    id: sessions.id,
    overview: sessions.overview,
    posterURL: sessions.posterURL,
    releaseDate: sessions.releaseDate,
    title: sessions.title
  }

  useEffect(() => {
    getSessions()
  }, [])

  function getSessions() {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId.id}/showtimes`

    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setSessions(data)
      setIsLoading(false)
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
        isLoading ? (
          
          <BoxLoading>
            <Spin />
          </BoxLoading>

        ) : (
          <>
            {
              sessions?.days.map((item, id) => {
                return (
                  <Session {...item} key={id} />
                )
              })
            }

            <Footer day={initalValueSeatsPage.day} movie={movieInfos} />
          </>
        )
      }

    </Body>
  )
}