import { IMovie } from "./IMovies"

export interface ISeats {
  id: Number,
  name: String,
  day: {
    id: Number,
    weekday: String,
    date: String,
  },
  
  movie: IMovie,
  
  seats: [
    {
      id: Number,
      name: String,
      isAvailable: Boolean,
    },
  ]
}

export interface ISeat {
  id: Number,
  name: String,
  isAvailable: Boolean,
  selectedSeats: number[] | null[];
  setSelectedSeats: (newState: number[]) => void;
}