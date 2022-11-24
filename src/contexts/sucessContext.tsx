import { createContext, ReactNode, useState } from "react";
import { ISucess } from "../interfaces/ISucess";

export interface ISucessContext {
  sucessPageInfo: ISucess | null;
  setSucessPageInfo: (newState: ISucess) => void;
}

const initialValue: ISucessContext = {
  sucessPageInfo: null,
  setSucessPageInfo: () => {}
}

const SucessContext = createContext<ISucessContext>(initialValue)
export default SucessContext

export interface IProps {
  children: ReactNode
}

export function SucessProvider({ children }: IProps) {
  const [sucessPageInfo, setSucessPageInfo] = useState<ISucess | null>(initialValue.sucessPageInfo)

  return (
    <SucessContext.Provider value={{ sucessPageInfo, setSucessPageInfo }}>
      { children }
    </SucessContext.Provider>
  )
}