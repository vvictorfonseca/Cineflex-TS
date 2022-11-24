import { BoxInputs, BoxInput, H1, Input } from "./style"

import { IseatInputProps } from "../../../interfaces/ISeats"

export default function Inputs(props: IseatInputProps) {

  return (
    <BoxInputs>
      <BoxInput>
        <H1>Nome do comprador:</H1>
        <Input type={"text"} placeholder={"Digite seu nome..."} value={props.inputInfo.name} onChange={(e) => props.setInputInfo({...props.inputInfo, name: e.target.value})}/>
      </BoxInput>

      <BoxInput>
        <H1>CPF do comprador:</H1>
        <Input type={"text"} placeholder={"Digite seu CPF..."} value={props.inputInfo.cpf} onChange={(e) => props.setInputInfo({...props.inputInfo, cpf: e.target.value})} />
      </BoxInput>
    </BoxInputs>
  )
}