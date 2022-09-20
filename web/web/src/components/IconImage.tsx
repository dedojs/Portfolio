interface IconImageProps {
  title: string;
  src: string;
  background?: string;
}

const classNameDefault = 'h-12 w-12 p-1'
const classNameBgWhite = 'h-12 w-12 p-1 bg-white rounded-md'

export function IconImage(props: IconImageProps) {

  return (
    <div className="w-[80px] flex flex-col items-center m-1">
      <img src={props.src} alt={props.title} className={ props.background ? classNameBgWhite : classNameDefault}/>
      <p className="text-white text-sm font-black " >{props.title}</p>
    </div>
  )
}