import { ISeatsReservation } from "./ISeats";

export interface ISucess {
  objReservation: ISeatsReservation;
  selectedSeatNumbers: string[] | null[];
  title: String;
  hour: String;
  date: String;
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

