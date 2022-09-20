import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconsContact } from './IconsContact';


export function NavBar() {
  const [contact, setContact] = useState(false)
  const viewContact = () => {
    setContact(!contact)
  }
  return (
    <nav className=''>
      <div className="hidden md:flex">
        <Link className="mr-6" to={'/'}>Home</Link>
        <Link className="mr-6" to={'/curriculo'}>Currículo</Link>
        <Link className="mr-6" to={'/stacks'}>Projetos</Link>
      </div>
        <button className='block md:hidden py-2 px-2 mx-1 rounded-md focus:outline-none hover:bg-white/50 group'>
          <div className='w-5 h-1 bg-white mb-1 rounded-md'></div>
          <div className='w-5 h-1 bg-white mb-1 rounded-md'></div>
          <div className='w-5 h-1 bg-white rounded-md'></div>
          <div className='absolute mt-1 top-[55px] right-[30px] opacity-0 transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300 '>
            <ul className='flex items-center text-base pt-2'>
              <Link className="hover:bg-black/50 mr-4 w-full" to={'/'}>Home</Link>
              <Link className="hover:bg-black/50 mr-4 w-full" to={'/curriculo'}>Currículo</Link>
              <Link className="hover:bg-black/50 mr-1 w-full" to={'/stacks'}>Projetos</Link>
            </ul>
          </div>
        </button>
    </nav>
  )
}