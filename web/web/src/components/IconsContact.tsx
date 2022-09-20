import logolinkedin from "../assets/icons/linkedin.png"
import logogmail from "../assets/icons/gmail-logo.png"
import logowhats from "../assets/icons/whatsapp.png"
import logogit from "../assets/icons/github-sign.png"

export function IconsContact() {
  return (
    <div className="flex justify-center gap-4 mt-2">
      <a href="https://www.linkedin.com/in/andre-luis-sousa/" target='_blank' className="w-6 bg-white rounded-md">
        <img src={logolinkedin} alt="linkedin" />
      </a>
      <a href="mailto:xandresousax@gmail.com" target='_blank' className="w-6 bg-white rounded-md ">
        <img src={logogmail} alt="gmail" />
      </a>
      <a href="https://whatsa.me/5577988020059" target='_blank' className="w-6  bg-white rounded-md">
        <img src={logowhats} alt="whatsapp" />
      </a>
      <a href="https://github.com/dedojs" target='_blank' className="w-6  bg-white rounded-md">
        <img src={logogit} alt="github" />
      </a>
    </div>
  )
}