import { useHistory } from "react-router-dom";
import pasta from '../assets/icons/pngegg.png';

function Home() {
  const history = useHistory();

  return (
    <section className="flex flex-col items-center min-h-[79vh] flex-wrap justify-between p-1 mt-10 mb-4 border-2 bg-black/40 border-emerald-400 m-2 rounded-md bg-[url(/src/assets/welcome.jpg)] bg-no-repeat bg-cover bg-center">
      <article className="text-white text-center text-md rounded-md flex flex-col items-center justify-center p-2">
        <h1> <strong>Olá Pessoal!</strong></h1>
        <p>Meu nome é André Sousa, sou desenvolvedor Full-Stack.</p>
        <p>Sejam bem vindos ao meu portfólio!</p>
        <br />
      </article>
      <article className="text-white text-justify text-md backdrop-blur-sm rounded-md flex flex-col items-center justify-center mt-10 w-[320px] h-[100px]">
        <div className='flex mt-4 justify-around w-full h-[200px] items-center'>
          <button className='w-[70px] mt-1 cursor-pointer' onClick={() => { history.push('/curriculo')}}>
            <img src={ pasta } alt="" className='z-0 w-[70px] relative'/>
            <p className='z-10 relative bottom-8 text-sm font-semibold'>Currículo</p>
          </button>
          <button className='w-[70px] mt-1 cursor-pointer' onClick={() => { history.push('/stacks')}}>
            <img src={ pasta } alt="" className='z-0 w-[70px] relative '/>
            <p className='z-10 relative bottom-8 text-sm font-semibold'>Projetos</p>
          </button>
          <button className='w-[70px] mt-1 cursor-pointer' onClick={() => { history.push('/about')}}>
            <img src={ pasta } alt="" className='z-0 w-[70px] relative '/>
            <p className='z-10 relative bottom-8 text-sm font-semibold'>Sobre</p>
          </button>
        </div>
      </article>
        <div className='h-[300px] w-full mt-2'>

        </div>
      <article className="text-white text-justify text-md backdrop-blur-md rounded-md flex flex-col items-center justify-center p-4 self-end">
        <p></p>
      </article>
    </section>
  )
}

export default Home
