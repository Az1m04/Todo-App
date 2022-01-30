import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [list, setList] = useState([])
  const [message, setMessage] = useState('')
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(null)


  const handelSubmit = (e) => {
    e.preventDefault()

    if (message !== '')
      if (edit) {
        let newList = list
        newList[id] = message
        setList(newList)
        setEdit(false)
      } else {
        setList((preList) => [...preList, message])
      }

    setMessage('')
  }
  const handelDelete = (index) => {
    const newArr = list?.filter((val, idx) => idx !== index)
    setList(newArr)
  }
  const handelUpdate = (val, index) => {
    setEdit(true)
    setId(index)
    setMessage(val)
  }
  return (
    <div className=" mt-20 min-h-screen ">
      <Head>
        <title>Todo App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mx-auto   flex w-2/3 justify-center ">
        <div className="text-center">
          <h1 className="text-6xl font-bold uppercase ">
            Welcome to{' '}
            <div className="text-8xl font-extrabold uppercase text-blue-600">
              Todo App
            </div>
          </h1>
          <div
            className="w-3/54 mt-10  rounded-md shadow-md p-5"
            style={{ height: '50vh' }}
          >
            <form onSubmit={handelSubmit}>
              <div className='flex mx-5 mt-5'>
                <div className='w-full  '>
                <input className='bg-zinc-100 border px-2 py-1 rounded-md h-10 w-full'
                value={message}
                placeholder='Add item...'
                onChange={(e) => {
                  setMessage(e.target.value)
                }}
                type="text"
              />
              
                </div>
                <div className='ml-2'>
                <button className='px-4 rounded-md py-1  text-white bg-blue-600 h-10 w-20' type="submit"> {edit ? 'Update' : 'Add'} </button>

                </div>
              </div>
            </form>
            {list?.map((val, index) => {
              return (
                <div key={index} className=' flex justify-between mx-5 mt-5 rounded-md shadow-md border h-14 items-center  text-left
                px-2 text-base'>
                 {index+ 1}. {val}{' '}
                  <div className='flex'>
                  <div >
                    <button className='px-4 rounded-md py-1  border bg-white ' onClick={() => handelUpdate(val, index)}>
                      Edit
                    </button>
                  </div>{' '}
                  <div>
                    <button className='px-4 ml-2 rounded-md py-1  border bg-red-500 text-white ' onClick={() => handelDelete(index)}>Delete</button>
                  </div>

                    </div>
                                    </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
