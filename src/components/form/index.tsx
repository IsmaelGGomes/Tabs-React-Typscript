import React from 'react';

type Props = {}

const Form = (props: Props) => {
    return (
        <>
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
                            onChange={(e) => SetNome(e.target.value)}
                            value={Nome}
                            type="text"
                            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                    </div>
                    <div className="mb-2">
                        <span className="font-bold text-start inline-block w-full px-1 text-sm text-gray-600"
                        >Cpf<span className='text-red-400 font-bold'> *</span></span>
                        <input
                            onChange={(e) => SetCpf(e.target.value)}
                            value={Cpf}
                            type="none"
                            className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                    </div>
                    <div className="mb-2">
                        <span className="font-bold text-start inline-block w-full px-1 text-sm text-gray-600"
                        >Senha<span className='text-red-400 font-bold'> *</span></span>
                        <input
                            onChange={(e) => SetSenha(e.target.value)}
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
        </>
    )
}