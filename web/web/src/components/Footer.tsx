import { IconsContact } from "./IconsContact";

export function Footer() {
  return (
    <div className="w-'100%' bg-violet-500/50 flex flex-wrap justify-around p-2 items-center border-t-2 border-emerald-400 pl-8 pr-8 mt-auto mb-0">
      <div className="bottom-0 left-0 right-0 text-white">
        <p className="text-center">© Novembro - 2022 - André Sousa</p>
      </div>
      <div className="text-white">
        <p className="text-center">Tecnologias utilizadas: <strong>React - TypeScript - Tailwindcss</strong></p>
      </div>
      <div className="text-white text-sm">
        <IconsContact />
      </div>
    </div>
  )
}