import React from 'react'

export const Form = () => {
    return (
        <>
            <form action='' className="">
                <div className="mx-auto max-w-lg">
                    
                </div>
            </form>
        </>
    )
}

export const FieldInput = ({ nome }:String|any) => {
    return (
            <div className="mb-2">
                <span className="font-bold text-start inline-block w-full px-1 text-sm text-gray-600"
                >{ nome }<span className='text-red-400 font-bold'> *</span>
                </span>
            </div>
    );
}

export const Input = () => {
  return <input
    type="none"
    className="text-md block px-3 py-2 rounded-lg w-full
    bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
  />
}

