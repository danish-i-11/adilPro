import React, {useState} from 'react'
import { Explore } from './explore'
import { Services } from './services'

export const Content = () => {
  

  return (
    <div className='bg-gray-50 w-[90%] p-5 text-center'>
      <div className="flex space-x-10">
        <div className="bg-blue-300 w-[50%] h-52">
          <Explore />
        </div>
        <div className="bg-green-300 w-[50%] h-52">
          <Services />
        </div>
      </div>

      


    </div>
  )
}
