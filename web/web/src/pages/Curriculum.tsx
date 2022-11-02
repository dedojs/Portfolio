import { useState } from "react";
import { Academy } from "../components/Academy";
import { Certificates } from "../components/Certificates";
import { Professional } from "../components/Professional";

export function Curriculo() {

  const [prof, setProf] = useState(true)
  const [acad, setAcad] = useState(true)
  const [cert, setCert] = useState(true)

  return(
    <div>
      <div className="p-2 mt-10 text-white border-2 border-emerald-400 rounded-md m-2 min-h-[85vh]">
        <h1 className= 'text-4xl font-black text-center'>Currículo</h1>
        <div className='sm:grid sm:grid-cols-4 gap-2 justify-center m-2 grid grid-cols-2 text-sm mb-2'>
          <button
            type='button'
            onClick={ () => {
              setProf(true)
              setAcad(false)
              setCert(false)
              }
            }
            className=' border hover:bg-white hover:text-black rounded-md p-1 '
          >
            Experiência Profissional
          </button>
          <button
            type='button'
            onClick={ () => {
              setProf(false)
              setAcad(true)
              setCert(false)
              }
            }
            className='border hover:bg-white hover:text-black rounded-md p-1 '
          >
            Experiência Acadêmica
          </button>
          <button
            type='button'
            onClick={() => {
              setProf(false)
              setAcad(false)
              setCert(true)
              }
            }
            className=' border hover:bg-white hover:text-black rounded-md p-1 '
          > 
            Certificados
          </button>
          <button
            type='button'
            onClick={() => {
              setProf(true)
              setAcad(true)
              setCert(true)
              }
            }
            className=' border hover:bg-white hover:text-black rounded-md p-1 '
          > 
            All
          </button>
        </div>
        <div>
          {prof && <Professional />}
          {acad && <Academy />}
          {cert && <Certificates />}
        </div>
      </div>
    </div>
  )
}