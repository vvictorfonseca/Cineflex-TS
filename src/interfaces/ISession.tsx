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

export interface IDays {
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

export interface IHour {
  name: string,
  id: number
}