import { Academy } from "../components/Academy";
import { Certificates } from "../components/Certificates";
import { Professional } from "../components/Professional";

export function Curriculo() {
  return(
    <div>
      <Professional />
      <Academy />
      <Certificates />
    </div>
  )
}