export interface ISeats {
  id: Number,
  name: String,
  isAvailable: Boolean,
}

export interface IDay {
  weekday: String;
  date: String;
}

export interface ISeatInput {
  name: string;
  cpf: string;
}

export interface ISeatsReservation {
  ids: number[] | null[];
  name: string;
  cpf: string
}

export interface ISeatProps {
  id: Number,
  name: String,
  isAvailable: Boolean,
  selectedSeats: number[] | null[];
  setSelectedSeats: (newState: number[]) => void;
}

export interface IseatInputProps {
  inputInfo: ISeatInput;
  setInputInfo: (newState: ISeatInput) => void
}