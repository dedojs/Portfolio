import { IconImage } from "./IconImage";
import { backStacksContent } from "../data/backEndStacks";
import { projectsBackEnd } from "../data/projectsBackEnd";
import { CardProject } from "./CardProject";

export function StacksBackEnd() {
  return (
    <div className="border-2 border-emerald-400 m-2 rounded-md text-center">
      <h1 className="text-white font-black text-center text-4xl p-4">Back-End</h1>
      <p className="text-white mb-4 text-sm"> * Clique no projeto para ser redirecionado para o repositório no Git Hub</p>
      <div className="flex py-1 justify-around items-center flex-wrap ">
        {
          backStacksContent.map(({ title, src }) => 
            <IconImage
              key = { title } 
              title={ title }
              src= { src }
              background='on'
            />
          )
        }
      </div>
      <div className="flex flex-wrap justify-center">
        {
          projectsBackEnd.map((item) => 
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

