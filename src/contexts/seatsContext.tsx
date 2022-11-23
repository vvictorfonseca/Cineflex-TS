import { createContext, useState } from "react";
import { IProps } from "./movieContext";

export interface ISeatsContext {
  seats: number[] | null;
  setSeats: (newState: number[]) => void;
}

const initialValue = {
  seats: null,
  setSeats: () => {}
}

const SeatsContext = createContext<ISeatsContext>(initialValue)
export default SeatsContext

export function SeatsProvider({ children }: IProps) {
  const [seats, setSeats] = useState<number[] | null>(initialValue.seats)

  return (
    <SeatsContext.Provider value={{ seats, setSeats }}>
      { children }
    </SeatsContext.Provider>
  )
}

