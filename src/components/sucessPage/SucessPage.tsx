import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Body, BoxH2 } from "../../styles/bodyStyle"
import { BoxInfo, H1, H2, Span } from "./style"
import { Button } from "../seatsPage/style"

import { Spin, message } from 'antd';

import Header from "../header/Header"

import SeatNumber from "./seatNumber/SeatNumber"

import SucessContext, { ISucessContext } from "../../contexts/sucessContext"

export default function SucessPage() {
  const { sucessPageInfo } = useContext<ISucessContext>(SucessContext)
  
  const [formatCPF, setFormatCPF] = useState<string>("")
  const [isLoading, setIsLoading] = useState<Boolean>(true)

  const navigate = useNavigate()

  const cpf = sucessPageInfo.objReservation.cpf

  useEffect(() => {
    setIsLoading(true)
    let format = ""
    
    for (let i = 0; i < cpf.length; i++) {
      if (i < 3) {
        format = format + cpf[i]
      } else if (i == 3) {
        format = format + "." + cpf[i]
      } else if (i < 6) {
        format = format + cpf[i]
      } else if (i == 6) {
        format = format + "." + cpf[i]
      } else if (i < 9) {
        format = format + cpf[i]
      } else if (i == 9) {
        format = format + "-" + cpf[i]
      } else {
        format = format + cpf[i]
      }
    }

    setFormatCPF(format)
    setIsLoading(false)
  }, [])

  return (
    <Body>
      <Header />

      <BoxH2>
        <h1>Pedido feito com sucesso!</h1>
      </BoxH2>

      {
        isLoading ? (
          
          <Spin />
        
          ) : (
          <>
            <BoxInfo>
              <H1>Filme e sessão</H1>
              <H2>{sucessPageInfo?.title}</H2>
              <Span>{sucessPageInfo?.date} - {sucessPageInfo?.hour}</Span>
            </BoxInfo >

            <BoxInfo>
              <H1>Ingressos</H1>
              {
                sucessPageInfo.selectedSeatNumbers.map((name) => {
                  return (<SeatNumber name={name} key={name} />)
                })
              }
            </BoxInfo>

            <BoxInfo>
              <H1>Comprador</H1>
              <H2>{sucessPageInfo.objReservation.name}</H2>
              <H2>{formatCPF}</H2>
            </BoxInfo>
          </>
        )
      }

      <Button onClick={() => navigate("/")}>Voltar pra Home</Button>
    </Body >
  )
}