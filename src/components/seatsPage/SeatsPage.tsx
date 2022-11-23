import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Spin } from 'antd';

import { Body, BoxH2, BoxLoading } from "../../styles/bodyStyle";
import { BoxMovieInfo, BoxImg, BoxInfo, H2, Span } from "../../styles/movieInfoStyle";
import { BoxSeats, Button } from "./style";

import { ISeats, ISeatInput, IDay } from "../../interfaces/ISeats";
import { IMovie } from "../../interfaces/IMovies";

import Header from "../header/Header";
import Seat from "./seat/Seat";
import SeatsExample from "./seatsExample/SeatsExample";
import Inputs from "./inputs/Inputs";
import Footer from "../footer/Footer";

const initalValue = {
  day: {
    weekday: "",
    date: ""
  },
  
  movie: {
    id: 0,
    overview: "",
    posterURL: "",
    releaseDate: "",
    title: ""
  }
}

export default function SeatsPage() {
  const [seats, setSeats] = useState<ISeats[]>()
  const [day, setDay] = useState<IDay>(initalValue.day)
  const [movie, setMovie] = useState<IMovie>(initalValue.movie)
  
  const [selectedSeats, setSelectedSeats] = useState<number[] | null[]>([])
  
  const [inputInfo, setInputInfo] = useState<ISeatInput>({name: "", cpf: ""})

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
      setSeats(data.seats)
      setDay(data.day)
      setMovie(data.movie)
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
              seats?.map((item, id) => {
                return (<Seat {...item} key={id} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />)
              })
            }
          </BoxSeats>

          <SeatsExample />

          <Inputs inputInfo={inputInfo} setInputInfo={setInputInfo}  />

          <Button>Reservar assento(s)</Button>
          
          <Footer day={day} movie={movie} />
          
          </>
        )
      }
    </Body>
  )
}