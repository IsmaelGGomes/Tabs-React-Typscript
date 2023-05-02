import React, { SetStateAction, Dispatch, ChangeEvent } from 'react';
import * as F from '../form/structForm/structForm';

type Props = {
    closeExit: () => void
    setNome: Dispatch<SetStateAction<string>>,
    setCpf: Dispatch<SetStateAction<number | any>>,
    setSenha: Dispatch<SetStateAction<void | any>>,
    arrayItems?: [Nome: string, Cpf: Number | any, Senha: Number | any] | any
}

export const Form = (props: Props) => {
    const { closeExit, setNome, setCpf, setSenha, arrayItems } = props
    return (
        <>
            <form action='' className="">
                <div className="mx-auto max-w-lg">
                    <F.FieldInput
                    name="novo"
                    >
                        <F.Input>

                        </F.Input>
                        <input
                            onChange={(e) => setNome(e.target.value)}
                            value={arrayItems[0]}
                            type="none"
                            className="text-md block px-3 py-2 rounded-lg w-full
                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                    <F.FieldInput />
                        <div className="mb-2">
                            <span className="font-bold text-start inline-block w-full px-1 text-sm text-gray-600"
                            >Cpf<span className='text-red-400 font-bold'> *</span></span>
                            <input
                                onChange={(e) => setCpf(e.target.value)}
                                value={arrayItems[1]}
                                type="number"
                                className="text-md block px-3 py-2 rounded-lg w-full
                            bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                        </div>
                        <div className="mb-2">
                            <span className="font-bold text-start inline-block w-full px-1 text-sm text-gray-600"
                            >Senha<span className='text-red-400 font-bold'> *</span></span>
                            <input
                                onChange={(e) => setSenha(e.target.value)}
                                value={arrayItems[2]}
                                type="number"
                                className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                        </div>
                        <div className="flex justify-end mt-8">
                            <div className="">
                                <button onClick={closeExit} type='button' className='mr-6 bg-gray-600 border-none rounded-md px-3 py-[6px] text-white font-semibold'>Cancelar</button>
                                <button type='button' className='bg-blue-500 border-none rounded-md px-3 py-[6px] text-white font-semibold'>Salvar</button>
                            </div>
                        </div>
                </div>
            </form>
        </>
    )
}