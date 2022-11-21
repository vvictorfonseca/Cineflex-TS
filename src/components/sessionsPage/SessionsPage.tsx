import { useContext, useEffect, useState } from "react"
import axios from "axios";

import { Spin } from 'antd';

import { Body, BoxH2, BoxLoading } from "../../styles/bodyStyle"
import { BoxMovieInfo, BoxImg, H2, BoxInfo } from "../../styles/movieInfoStyle";

import { ISession } from "../../interfaces/ISession";

import Header from "../header/Header"
import Session from "./session/Session"
import { useParams } from "react-router-dom";

export default function SessionsPage() {
  const movieId = useParams()

  const [sessions, setSessions] = useState<ISession>()
  const [isLoading, setIsLoading] = useState<Boolean>(true)

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

            <BoxMovieInfo>

              <BoxImg>
                <img src={sessions?.posterURL} alt="Cartaz do filme"></img>
              </BoxImg>

              <BoxInfo>
                <H2>{sessions?.title}</H2>
              </BoxInfo>

            </BoxMovieInfo>
          </>
        )
      }

    </Body>
  )
}