export interface ISession {
  id: Number,
  overview: String,
  posterURL: string,
  releaseDate: String,
  tittle: String,
  days: [
    {
      id: Number,
      weekday: string,
      date: string,
      showTimes: [
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
  showTimes: [
    {
      name: string,
      id: number
    }
  ]
}