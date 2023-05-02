import { SetStateAction } from "react"

export type userRegister = {
    id: number,
    nome: string,
    cpf: number,
    senha: number,
    setModaledit: React.Dispatch<SetStateAction<boolean>>,
}

export type user = {
    nome:string,
    userRegister: {
        id: number,
        nome: string,
        cpf: number,
        senha: number,
    },
}