import { IconImage } from "./IconImage";
import { frontStacksContent } from "../data/frontEndStacks";
import { CardProject } from "./CardProject";
import { projectsFrontEnd } from "../data/projectsFrontEnd";

export function StacksFrontEnd() {
  return (
    <div className="border-2 border-emerald-400 m-2 rounded-md text-center">
      <h1 className="text-white font-black mr-2 text-center text-4xl p-4">Front-End</h1>
      <p className="text-white mb-4 text-sm  "> * Clique no projeto para ser redirecionado para o site do projeto</p>
      <div className="flex p-1 items-center justify-around flex-wrap">
        {
          frontStacksContent.map(({ title, src }) => 
            <IconImage
              key = { title }
              title={ title }
              src= { src}
            />
          )
        }
      </div>
      <div className="flex flex-wrap justify-center ">
        {
          projectsFrontEnd.map((item) => 
            <CardProject
              key = {item.title}
              title={item.title}
              url={item.url}
              img={item.img}
              desc={item.desc}              
            />
          )
        }
      </div>
    </div>
  )
}