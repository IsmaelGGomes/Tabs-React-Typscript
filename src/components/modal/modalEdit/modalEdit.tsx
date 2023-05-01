import React, { useRef, SetStateAction, useState } from 'react';
import { user, userRegister } from '../../../types/user';
import { Form } from '../../form/index';

export const ModalEdit = ({
    setModaledit,
    cpf,
    nome,
    senha,
    id,
}: userRegister) => {

    const [Nome, SetNome] = useState<String | any>(nome);
    const [Cpf, SetCpf] = useState<Number | any>(cpf);
    const [Senha, SetSenha] = useState<Number | any>(senha);

    const modalref = useRef<HTMLDivElement>(null)
    const closeExit = () => setModaledit(false)
    const closeModal = (e: any) => {
        modalref.current === e.target ? setModaledit(false) : null
    }
    return (
        <>
            <div ref={modalref} onClick={closeModal} className="z-10 fixed inset-0 bg-opacity-50 bg-gray-700 h-screen w-full overflow-y-auto">
                <div className="absolute md:left-[50%] left-1/2 md:top-[48%] top-1/2 
                md:translate-y-[-50%] md:translate-x-[-50%] w-[24em] h-[22em] translate-y-[-40%] translate-x-[-41%]">
                    <div className="w-96 rounded-xl shadow-2xl border-none h-[22rem] bg-white text-black">
                        <div className="flex justify-end w-full">
                            <svg onClick={() => { setModaledit(false) }} className='cursor-pointer h-7 w-7 font-bold' aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                        <div className="flex flex-col gap-5 px-2 py-[1.4em]">
                            {/* inicio */}
                            <div className="container max-w-full mx-auto ">
                                <div className="max-w-sm mx-auto px-6">
                                    <div className="relative flex flex-wrap">
                                        <div className="w-full relative">
                                            <Form
                                                closeExit={closeExit}
                                                setNome={SetNome}
                                                setCpf={SetCpf}
                                                setSenha={SetSenha}
                                                arrayItems={[Nome, Cpf, Senha]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
