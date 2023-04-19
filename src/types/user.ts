export type userRegister = {
    id: number,
    nome: string,
    cpf: number,
    senha: number,
}

export type user = {
    nome:string,
    userRegister: userRegister,
}