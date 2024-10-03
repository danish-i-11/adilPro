import React, {useState} from 'react'
import { Explore } from './explore'
import { Services } from './services'

export const Content = () => {
  
  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)

  const click1 = ()=>{
    setShow1(true)
    setShow2(false)
    setShow3(false)
  }
  const click2 = ()=>{
    setShow1(false)
    setShow2(true)
    setShow3(false)
    
  }
  const click3 = ()=>{
    setShow1(false)
    setShow2(false)
    setShow3(true)

  }
  

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

      <div className="bg-gray-300 w-full my-10 min-h-96 p-5">

        <div className="flex w-full">

        <div onClick={click1} className="flex w-full h-fit hover:cursor-pointer">
          <div className={`w-10 h-10 border-8 ${show1 ? 'border-gray-700 text-gray-700' : 'border-gray-400 text-gray-400'}  rounded-full  font-bold`}>1</div>
          <div className={`h-3 ${show1 ? 'bg-gray-700' : 'bg-gray-400'} -ml-1 my-auto w-full`}></div>
        </div>

        <div onClick={click2} className="flex w-full h-fit hover:cursor-pointer">
          <div className={`w-10 h-10 border-8 ${show2 ? 'border-gray-700 text-gray-700' : 'border-gray-400 text-gray-400'}  rounded-full  font-bold`}>2</div>
          <div className={`h-3 ${show2 ? 'bg-gray-700' : 'bg-gray-400'} -ml-1 my-auto w-full`}></div>
        </div>

        <div onClick={click3} className="flex w-full h-fit hover:cursor-pointer">
          <div className={`w-10 h-10 border-8 ${show3 ? 'border-gray-700 text-gray-700' : 'border-gray-400 text-gray-400'}  rounded-full  font-bold`}>3</div>
          <div className={`h-3 ${show3 ? 'bg-gray-700' : 'bg-gray-400'} -ml-1 my-auto w-full`}></div>
        </div>

        </div>
        
        {show1 &&
         <div className="bg-blue-300 w-full h-80 my-3">okkkkkk1</div>
        }

        {show2 &&
        <div className="bg-green-300 w-full h-80 my-3">okkkkkk2</div>
        }
        {show3 &&
        <div className="bg-yellow-300 w-full h-80 my-3">okkkkkk3</div>
        }

      </div>

      


    </div>
  )
}
