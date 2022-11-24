import { ISeatsReservation } from "./ISeats";

export interface ISucess {
  objReservation: ISeatsReservation;
  selectedSeatNumbers: string[] | null[];
  title: String;
  hour: String;
  date: String;
}