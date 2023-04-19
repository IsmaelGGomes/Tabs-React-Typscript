import React, { useRef, SetStateAction } from 'react'
type Props = {
    setModaledit: React.Dispatch<SetStateAction<boolean>>
}

export const Modal = ({ setModaledit }: Props) => {
    const modalref = useRef<HTMLDivElement>(null)

    const closeModal = (e: any) => {
        modalref.current === e.target ? setModaledit(false) : null
    }
    return (
        <>
            <div ref={modalref} onClick={closeModal}  className="fixed inset-0 bg-opacity-50 bg-gray-700 h-screen w-full overflow-y-auto">
                <div className="absolute md:left-[50%] left-1/2 md:top-[48%] top-1/2 
                md:translate-y-[-50%] md:translate-x-[-50%] w-[24em] h-[22em] translate-y-[-40%] translate-x-[-41%]">
                    <div className="w-full rounded-xl shadow-2xl border-none h-full bg-white text-black">
                        item
                    </div>
                </div>
            </div>
        </>
    )
}
