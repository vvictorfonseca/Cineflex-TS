import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { Spin, message } from 'antd';

import { Body, BoxH2, BoxLoading } from "../../styles/bodyStyle";
import { BoxSeats, Button } from "./style";

import { ISeats, ISeatInput, IDay, ISeatsReservation } from "../../interfaces/ISeats";
import { IMovie } from "../../interfaces/IMovies";

import Header from "../header/Header";
import Seat from "./seat/Seat";
import SeatsExample from "./seatsExample/SeatsExample";
import Inputs from "./inputs/Inputs";
import Footer from "../footer/Footer";

import { initalValueSeatsPage } from "../../initalValues/initialValues";

import SucessContext, { ISucessContext } from "../../contexts/sucessContext";
import { ISucess } from "../../interfaces/ISucess";

export default function SeatsPage() {
  const [seats, setSeats] = useState<ISeats[]>()
  const [day, setDay] = useState<IDay>(initalValueSeatsPage.day)
  const [movie, setMovie] = useState<IMovie>(initalValueSeatsPage.movie)
  const [hour, setHour] = useState<string>("")
  
  const [selectedSeats, setSelectedSeats] = useState<number[]>([])
  const [selectedSeatNumbers, setSelectedSeatNumbers] = useState<string[]>([])
  
  const [inputInfo, setInputInfo] = useState<ISeatInput>({name: "", cpf: ""})

  const [isLoading, setIsLoading] = useState<Boolean>(true)

  const { setSucessPageInfo } = useContext<ISucessContext>(SucessContext)
  
  const sessionId = useParams()
  const navigate = useNavigate()

  const objReservation: ISeatsReservation = {
    ids: selectedSeats,
    name: inputInfo.name,
    cpf: inputInfo.cpf
  }

  const objSucess : ISucess = {
    objReservation,
    selectedSeatNumbers: selectedSeatNumbers,
    title: movie.title,
    hour: hour,
    date: day.date
  }

  useEffect(() => {
    getSeats()
  }, [])

  function getSeats() {
    setIsLoading(true)

    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId.id}/seats`
    const promise = axios.get(URL)
    promise.then(response => {
      const { data } = response
      setHour(data.name)
      setSeats(data.seats)
      setDay(data.day)
      setMovie(data.movie)
      setIsLoading(false)
    })
    promise.catch(err => {
      console.log(err)
    })
  }

  function reserve() {
    setIsLoading(true)
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many"

    if(objReservation.ids.length == 0) {
      setIsLoading(false)
      return message.error("Precisa Selecionar Pelo menos 1 assento")
    } else if(objReservation.name.length < 3) {
      setIsLoading(false)
      return message.error("Insira um noma válido (Pelo menos 3 caractéres)")
    } else if(objReservation.cpf.length !== 11) {
      setIsLoading(false)
      return message.error("Informa um CPF válido (Apenas números)")
    }

    const promise = axios.post(URL, objReservation)
    promise.then(() => {
      setSucessPageInfo(objSucess)
      setIsLoading(false)
      navigate("/sucesso")
    })
    promise.catch(err => {
      setIsLoading(false)
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
                return (<Seat {...item} key={id} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} selectedSeatNumbers={selectedSeatNumbers} setSelectedSeatNumbers={setSelectedSeatNumbers} />)
              })
            }
          </BoxSeats>

          <SeatsExample />

          <Inputs inputInfo={inputInfo} setInputInfo={setInputInfo}  />

          <Button onClick={() => reserve()} >Reservar assento(s)</Button>
          
          <Footer day={day} movie={movie} />
          
          </>
        )
      }
    </Body>
  )
}