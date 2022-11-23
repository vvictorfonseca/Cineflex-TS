import { IMovie } from "./IMovies"

export interface ISeats {
  id: Number,
  name: String,
  isAvailable: Boolean,
}

export interface ISeat {
  id: Number,
  name: String,
  isAvailable: Boolean,
  selectedSeats: number[] | null[];
  setSelectedSeats: (newState: number[]) => void;
}

export interface IDay {
  weekday: String;
  date: String;
}

export interface ISeatInput {
  name: string;
  cpf: string;
}

export interface IseatInputProps {
  inputInfo: ISeatInput;
  setInputInfo: (newState: ISeatInput) => void
}