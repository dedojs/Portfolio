import { NavBar } from './NavBar';


export function Header() {
 
  return (
    <div className="w-100 bg-violet-500 flex justify-between p-2 items-center border-b-2 border-emerald-400 pl-8 pr-8 text-white font-black flex-wrap">
      <h1 className="text-2xl">André Sousa</h1>
      <NavBar />
    </div>
  )
}