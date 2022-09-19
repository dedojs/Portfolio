import { useState } from 'react';
import { StacksFrontEnd } from '../components/StacksFrontEnd';
import { StacksBackEnd } from '../components/StacksBackEnd';

export function Stacks() {
  const [ frontEnd, setFrontEnd ] = useState(true);
  const [ backEnd, setBackEnd ] = useState(true);
  // const [ allStacks, setallStacks ] = useState(true);


  return (
    <div>
      <div className='mt-8 text-white'>
        <h1 className= 'text-4xl font-black text-center'>Projetos</h1>
        <div className=' flex justify-center p-4'>
          <button
            type='button'
            onClick={ () => {
              setFrontEnd(true)
              setBackEnd(false)
              }
            }
            className='mr-8'
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
            className='mr-8'
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
            className='mr-8'
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

