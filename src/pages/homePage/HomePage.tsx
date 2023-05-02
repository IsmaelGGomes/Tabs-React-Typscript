import React, { useState } from 'react'
import { index } from '../../data/index';
import { Table } from '../../components/table/index';
import { ModalCreate } from '../../components/modal/modalCreate/modalCreate';

export default function HomePage() {

  const data = index;

  const selectedUser = (event: string) => {
    const novoArray = data.filter(item => item.nome == event)
    return novoArray
  }

  const selectId = (user: string) => {
    setSelectData(selectedUser(user))
  }

  const [selectData, setSelectData] = useState(selectedUser('adm'))

  const verifySelectd = selectData
    .map((index) => index.nome)
    .filter((value, index, self) => self.indexOf(value) === index);

  const unique = index
    .map((data) => data.nome)
    .filter((value, index, self) => self.indexOf(value) === index);

  const [modalCreate,setModalCreate] = useState(false)
  return (
    <>
      <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800">
        <aside className="sidebar w-48 -translate-x-full transform bg-white p-4 transition-transform duration-150 ease-in md:translate-x-0 md:shadow-md">
          <div className="my-4 w-full border-b-4 border-indigo-100 text-center">
            <span className="font-mono text-xl font-bold tracking-widest"> <span className="text-indigo-600">HELLO</span> DEV </span>
          </div>
          <div className="my-4"></div>
        </aside>
        <main className="main -ml-48 flex flex-grow flex-col p-4 transition-all duration-150 ease-in md:ml-0">
          <div className="flex h-full items-center justify-center bg-white text-center font-bold shadow-md">

            <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center bg-gray-100 font-sans overflow-hidden">
              <div className="flex justify-end w-5/6 gap-4">
                {unique.map((unique, i) => (
                  <div
                    key={i}
                    onClick={() => selectId(unique)}
                    className={`${unique == verifySelectd ? 'bg-gray-400' : 'bg-gray-300'} flex gap-2 px-2 py-2 w-48 h-12 justify-start text-[20px] text-center text-white font-semibold cursor-pointer rounded-t-xl`}>
                    <span>
                      <svg className='h-10 w-10' aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" fillRule="evenodd"></path>
                      </svg>
                    </span>
                    <p className='mb-10'>{unique}</p>
                  </div>
                ))}
              </div>
              <div className="flex rounded-tl-xl flex justify-between gap-4 w-5/6 h-20 bg-gray-400 py-4 px-0">
                <div className="ml-4 pt-2 relative text-gray-600">
                  <input type="text" className='border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none'
                    placeholder="Pesquisa"
                  />
                  <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                    <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                      version="1.1" x="0px" y="0px"
                      viewBox="0 0 56.966 56.966"
                      width="512px" height="512px">
                      <path
                        d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </button>
                </div>
                <div className="flex pt-2">
                  <div className="rounded-l-xl bg-blue-400 px-1 py-1 w-12 h-9">
                    <svg className='w-6 h-6 ml-2' aria-hidden="true" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
                    </svg>
                  </div>
                  <button
                  onClick={() => setModalCreate(!modalCreate)} 
                  className="bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring focus:ring-blue-400 w-24 flex flex-col h-9  justify-center">
                    Novo
                  </button>
                  {modalCreate && 
                    <ModalCreate
                    setModalCreate={setModalCreate}
                    />
                  }
                </div>
              </div>
              <div className="w-full lg:w-5/6">
                <div className="bg-white shadow-md rounded">
                  <table className="min-w-max w-full">
                    <thead>
                      <tr className="bg-gray-200 text-gray-600 uppercase text-sm ">
                        <th className="py-1 px-6 text-left">ID</th>
                        <th className="py-1 px-6 text-left">NOME</th>
                        <th className="py-1 px-6 text-center">CPF</th>
                        <th className="py-1 px-6 text-center">SENHA</th>
                        <th className="py-1 px-6 text-center">AÇÕES</th>
                      </tr>
                    </thead>

                    <tbody className="text-gray-600 text-sm font-light">

                      {selectData.map((index, i) => (
                        <Table
                          key={i}
                          cpf={index.userRegister.cpf}
                          id={index.userRegister.id}
                          nome={index.userRegister.nome}
                          senha={index.userRegister.senha}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

    </>
  )
}
