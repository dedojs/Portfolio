import { CardCertificates } from "./CardCertificates";
import { dataCertificates } from "../data/dataCertificates";

export function Certificates() {
  return (
    <div className="border-emerald-400 border-2 p-2 m-2 rounded-md">
      <h1 className="text-white text-center font-black mt-4 text-4xl ">Certificados</h1>
      <div className="flex flex-wrap justify-center">
        {
          dataCertificates.map(({ title, date, url, school}) => 
            <CardCertificates
              key={url}
              title={title}
              date={date}
              url={url}
              school={school}            />
          )
        }
      </div>
    </div>
  )
} 