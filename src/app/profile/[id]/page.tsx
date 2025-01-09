import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GetProfile = ({params} : any) => {
  return (
    <div className='flex justify-center flex-col items-center h-screen'>
          <h1 className='text-3xl'>Profile</h1>
          <h3 className='mt-3'>Profile Page <span className='ml-2 text-2xl border-2 border-orange-400 bg-orange-800'>{params.id}</span></h3>
    </div>
  )
}

export default GetProfile
