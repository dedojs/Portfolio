import { useState } from 'react';
import { StacksFrontEnd } from '../components/StacksFrontEnd';
import { StacksBackEnd } from '../components/StacksBackEnd';

export function Stacks() {
  const [ frontEnd, setFrontEnd ] = useState(true);
  const [ backEnd, setBackEnd ] = useState(true);


  return (
    <div className='p-2 mt-10 text-white border-2 border-emerald-400 rounded-md m-2'>
      <div className=''>
        <h1 className= 'text-4xl font-black text-center'>Projetos</h1>
        <div className=' sm:grid sm:grid-cols-3 gap-2 justify-center m-2 grid grid-cols-3 text-sm'>
          <button
            type='button'
            onClick={ () => {
              setFrontEnd(true)
              setBackEnd(false)
              }
            }
            className=' border hover:bg-white hover:text-black rounded-md p-1 '
          >
            Front End
          </button>
          <button
            type='button'
            onClick={ () => {
              setFrontEnd(false)
              setBackEnd(true)
              }
            }
            className='border hover:bg-white hover:text-black rounded-md p-1 '
          >
            Back End
          </button>
          <button
            type='button'
            onClick={() => {
              setBackEnd(true)
              setFrontEnd(true)
              }
            }
            className=' border hover:bg-white hover:text-black rounded-md p-1 '
          > 
            All
          </button>
        </div>
      </div>
      <div>
        {
          frontEnd ? <StacksFrontEnd /> : ''
        }
        {
          backEnd ? <StacksBackEnd /> : ''
        }
      </div>
    </div>
  )
}

