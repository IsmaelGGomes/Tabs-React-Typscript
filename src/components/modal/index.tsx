import React, { useRef, SetStateAction, useState } from 'react'
import { user, userRegister } from '../../types/user'

type Props = {
    setModaledit: React.Dispatch<SetStateAction<boolean>>
}

export const Modal = ({
    setModaledit, 
    cpf,
    nome,
    senha,
    id,
    }: userRegister) => {

    const [Nome,SetNome]=useState(nome);
    const [Cpf,SetCpf]=useState<Number|any>(cpf);
    const [Senha,SetSenha]=useState<Number|any>(senha);

    const modalref = useRef<HTMLDivElement>(null)
    const closeExit = () =>setModaledit(false)
    const closeModal = (e: any) => {
        modalref.current === e.target ? setModaledit(false) : null
    }
    return (
        <>
            <div ref={modalref} onClick={closeModal} className="z-10 fixed inset-0 bg-opacity-50 bg-gray-700 h-screen w-full overflow-y-auto">
                <div className="absolute md:left-[50%] left-1/2 md:top-[48%] top-1/2 
                md:translate-y-[-50%] md:translate-x-[-50%] w-[24em] h-[22em] translate-y-[-40%] translate-x-[-41%]">
                    <div className="w-96 rounded-xl shadow-2xl border-none h-[22rem] bg-white text-black">
                        <div className="flex flex-col gap-5 px-2 py-[1.4em]">
                            {/* inicio */}
                            <div className="container max-w-full mx-auto ">
                                <div className="max-w-sm mx-auto px-6">
                                    <div className="relative flex flex-wrap">
                                        <div className="w-full relative">
                                            <form action='' className="">
                                                <div className="mx-auto max-w-lg">
                                                    <div onClick={closeExit} className="cursor-pointer flex justify-end ">
                                                        <svg className='h-7 w-7 font-bold' aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <div className="mb-2 mt-4">
                                                        <span className="font-bold text-start inline-block w-full px-1 text-sm text-gray-600"
                                                        >Nome <span className='text-red-400 font-bold'> *</span>
                                                        </span>
                                                        <input
                                                            onChange={(e)=> SetNome(e.target.value)}
                                                            value={Nome} 
                                                            type="text"
                                                            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                                    </div>
                                                    <div className="mb-2">
                                                        <span className="font-bold text-start inline-block w-full px-1 text-sm text-gray-600"
                                                        >Cpf<span className='text-red-400 font-bold'> *</span></span>
                                                        <input
                                                            onChange={(e)=> SetCpf(e.target.value)} 
                                                            value={Cpf}
                                                            type="none"
                                                            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                                                    </div>
                                                    <div className="mb-2">
                                                        <span className="font-bold text-start inline-block w-full px-1 text-sm text-gray-600"
                                                        >Senha<span className='text-red-400 font-bold'> *</span></span>
                                                        <input
                                                            onChange={(e)=> SetSenha(e.target.value)} 
                                                            value={Senha}
                                                            type="none" 
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/*  */}
            </div >
        </>
    )
}
