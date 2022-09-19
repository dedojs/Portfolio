import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconsContact } from './IconsContact';


export function Header() {
  const [contact, setContact] = useState(false)
  const viewContact = () => {
    setContact(!contact)
  }
  return (
    <div className="w-100 bg-violet-500 flex justify-between p-2 items-center border-b-2 border-emerald-400 pl-8 pr-8 text-white font-black flex-wrap">
      <h1 className="text-2xl">André Sousa</h1>
      <div className='flex-row justify-center'>
        { contact && <IconsContact />  }
      </div>
      <div className="flex flex-wrap">
        <Link className="mr-6" to={'/'}>Home</Link>
        <Link className="mr-6" to={'/curriculo'}>Currículo</Link>
        <Link className="mr-6" to={'/stacks'}>Projetos</Link>
        <button
          className="mr-6"
          onClick={ viewContact }
        >
          Contato
        </button>
      </div>
    </div>
  )
}