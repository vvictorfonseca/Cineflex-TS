import { ISession } from "../interfaces/ISession"
import { IFotterProps } from "../components/footer/Footer"

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