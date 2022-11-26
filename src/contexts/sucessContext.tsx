import { createContext, ReactNode, useState } from "react";
import { ISucess } from "../interfaces/ISucess";

import { initalValueSucessInfo } from "../initalValues/initialValues";

export interface ISucessContext {
  sucessPageInfo: ISucess;
  setSucessPageInfo: (newState: ISucess) => void;
}

const initialValue: ISucessContext = {
  sucessPageInfo: initalValueSucessInfo,
  setSucessPageInfo: () => {}
}

const SucessContext = createContext<ISucessContext>(initialValue)
export default SucessContext

export interface IProps {
  children: ReactNode
}

export function SucessProvider({ children }: IProps) {
  const [sucessPageInfo, setSucessPageInfo] = useState<ISucess>(initialValue.sucessPageInfo)

  return (
    <SucessContext.Provider value={{ sucessPageInfo, setSucessPageInfo }}>
      { children }
    </SucessContext.Provider>
  )
}