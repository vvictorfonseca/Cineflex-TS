import { ISession } from "../interfaces/ISession"
import { IFotterProps } from "../components/footer/Footer"
import { ISucess } from "../interfaces/ISucess"

export const initalValueSessionPage: ISession = {
  id: 0,
  overview: "",
  posterURL: "",
  releaseDate: "",
  title: "",
  days: [
    {
      id: 0,
      weekday: "",
      date: "",
      showtimes: [
        {
          name: "",
          id: 0
        }
      ]
    }
  ]
}

export const initalValueSeatsPage: IFotterProps = {
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

export const initalValueSucessInfo: ISucess = {
  objReservation: {
    ids: [0],
    name: "",
    cpf: ""
  },
  selectedSeatNumbers: [""],
  title: "",
  hour: "",
  date: "",
}