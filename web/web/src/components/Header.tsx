import { NavBar } from './NavBar';
import andreCartoon from '../assets/andreCartoon.jpeg';

export function Header() {
 
  return (
    <section className="w-100 bg-violet-500 flex justify-between p-2 items-center border-b-2 border-emerald-400 pl-8 pr-8 text-white font-black flex-wrap">
      <article className='flex items-center w-[250px] justify-around'>
        <img src={ andreCartoon } alt="imagem andre" className='w-[64px] rounded-full'/>
        <h1 className="text-2xl">André Sousa</h1>
      </article>
      <NavBar />
    </section>
  )
}