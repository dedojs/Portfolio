import { BuildingLibraryIcon, CalendarIcon } from '@heroicons/react/24/solid';

interface IcertificadosProps {
  title: string;
  date: string;
  url: string;
  school: string;
}

export function CardCertificates(props: IcertificadosProps) {
  return (
    <div className="border-black border-4 p-4 m-4 w-[400px] h-[290px] rounded-md bg-white flex flex-col">
      <div className='border-4 h-[380px] p-1'>
        <a href={props.url} target='_blank'>
        <div className='flex justify-center self-end'>
          <img
            src='../src/assets/icons/golden.png'
            alt="medalha de ouro"
            className='w-16'
          />
        </div>
        <div className=''>
          <h1 className="font-black text-center text-sm">{ props.title }</h1>
          <div className='flex p-1'>
            <BuildingLibraryIcon className='w-4 mr-1'/>
            <h2>Escola: { props.school }</h2>
          </div>
          <div className='flex p-1'>
            <CalendarIcon className='w-4 mr-1'/>
            <h3>Data: { props.date }</h3>
          </div>
        </div>
        </a>
      </div>
    </div>
  )
}

/*
example do use
      <Certificados
        title='Teste de Certificado'
        date='20/09/222'
        url="https://www.w3schools.com"
      />
*/