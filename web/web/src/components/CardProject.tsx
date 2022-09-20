interface ICardProjectProps {
  title: string;
  url: string;
  img?: string;
  desc?: string;
}

export function CardProject(props: ICardProjectProps) {
  
  return (
    <a href={ props.url} target='_blank'>
      <div className="w-[260px] h-[480px] bg-black text-white border-2 rounded-md border-emerald-700 m-4 overflow-auto">
        <h1 className="text-center p-2 font-black">{props.title}</h1>
        <img className="p-2 " src={ props.img } alt={props.title} />
        <div className="overflow-auto">
          <h2 className="font-black text-sm text-center mt-1">Tecnologias utilizadas:</h2>
          <p className="text-sm text-justify m-2">{props.desc}</p>
        </div>
      </div>
    </a>
  )
}