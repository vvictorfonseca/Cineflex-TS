import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Spin } from 'antd';

import { Body, BoxH2, BoxLoading } from "../../styles/bodyStyle";
import { BoxMovieInfo, BoxImg, BoxInfo, H2, Span } from "../../styles/movieInfoStyle";
import { BoxSeats } from "./style";

import { ISeats } from "../../interfaces/ISeats";

import Header from "../header/Header";
import Seat from "./seat/Seat";
import SeatsExample from "./seatsExample/SeatsExample";

export default function SeatsPage() {
  const [seats, setSeats] = useState<ISeats>()
  const [selectedSeats, setSelectedSeats] = useState<number[] | null[]>([])
  console.log(selectedSeats)
  
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  const sessionId = useParams()

  useEffect(() => {
    getSeats()
  }, [])

  function getSeats() {
    setIsLoading(true)

    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId.id}/seats`
    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setSeats(data)
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
        <h2>Selecione o(s) assento(s)</h2>
      </BoxH2>

      {
        isLoading ? (
          
          <BoxLoading>
            <Spin />
          </BoxLoading>

        ) : (
          <>

          <BoxSeats>
            {
              seats?.seats.map((item, id) => {
                return (<Seat {...item} key={id} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />)
              })
            }
          </BoxSeats>

          <SeatsExample />
          
          <BoxMovieInfo>

            <BoxImg>
              <img src={seats?.movie.posterURL} alt="Cartaz do filme"></img>
            </BoxImg>

            <BoxInfo>
              <H2>{seats?.movie.title}</H2>
              <Span>{seats?.day.weekday} - {seats?.day.date}</Span>
            </BoxInfo>

          </BoxMovieInfo>
          </>
        )
      }
    </Body>
  )
}