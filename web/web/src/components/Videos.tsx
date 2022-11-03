import { projectsBackEnd } from "../data/projectsBackEnd"

export function Videos() {
  return (
    <section className="p-2 text-white min-h-[79vh] mt-10 border-emerald-400 border-2 m-2 rounded-md flex flex-col justify-center items-center">
      <h1 className="mb-4 text-center text-4xl font-semibold">Vídeos</h1>
      <section className="text-white flex flex-wrap items-center w-11/12 justify-around">
        <article className="w-[340px] max-w-screen-sd h-[750px] border-emerald-700 mt-4 pt-4 flex flex-col items-center border-2 rounded-md flex-wrap mb-4">
          <h1 className="mb-4">Projeto: Job Insights</h1>
          <iframe width="320" height="315" src="https://www.youtube.com/embed/W4Bu1DL9qk0?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <p className="w-[6] text-justify p-4 mt-4">{ projectsBackEnd[2].desc }</p>
        </article>
        <article className="w-[340px] max-w-screen-sd h-[750px] border-emerald-700 mt-4 pt-4 flex flex-col items-center border-2 rounded-md flex-wrap mb-4">
          <h1 className="mb-4">Projeto: Eleições Unit</h1>
          <iframe width="320" height="315" src="https://www.youtube.com/embed/HpI_Muuqt28?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <p className="w-[6] text-justify p-4 mt-4">{ projectsBackEnd[1].desc }</p>
        </article>
        <article className="w-[340px] max-w-screen-sd h-[750px] border-emerald-700 mt-4 pt-4 flex flex-col items-center border-2 rounded-md flex-wrap mb-4">
          <h1 className="mb-4">Projeto: App Delivery</h1>
          <iframe width="320" height="315" src="https://www.youtube.com/embed/Z0zONnLrn_E?rel=0" title="YouTube video player" allow="accelerometer; autoplay; encrypted-media;"></iframe>
          <p className="w-[6] text-justify p-4 mt-4">{ projectsBackEnd[0].desc }</p>
        </article>
      </section>
    </section>
  )
}