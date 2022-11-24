export interface ISession {
  id: Number,
  overview: String,
  posterURL: string,
  releaseDate: String,
  title: String,
  days: [
    {
      id: Number,
      weekday: string,
      date: string,
      showtimes: [
        {
          name: string,
          id: number
        }
      ]
    }
  ]
}

export interface IDaysProps {
  id: Number,
  weekday: string,
  date: string,
  showtimes: [
    {
      name: string,
      id: number
    }
  ]
}

export interface IHourProps {
  name: string;
  id: number;
}