import foto from '../assets/foto.jpeg'

export function About() {
  return (
    <div className="flex flex-wrap justify-evenly gap-4 p-8 mt-10 border-2 bg-black/40 border-emerald-400 m-2 rounded-md">
      <div className="text-white text-justify w-[800px]">
        <h1 className="text-2xl mb-2 font-black">Sobre:</h1>
        <div className="font-black">
          <h2 >Me chamo André Luis Sousa! Sou Desenvolvedor Web Full Stack e ciclista!</h2>
          <h2>Tenho 42 anos e moro em Vitória da Conquista - Bahia</h2>
        </div>
        <p className="text-sm mt-4">
          Este é o meu portfólio e aqui você conhecerá um pouco mais a respeito da minha trajetória e dos meus projetos!
        </p>
        <p className="text-sm mt-4">
          Nos últimos 20 anos, trabalhei como empresário, gerenciando uma empresa do setor de gêneros alimentícios. Um período de muita aprendizagem, onde pude desenvolver vários pontos, como: empatia, liderança, disciplina e foco.
        <p className="text-sm mt-4">
          Durante esse período, também me tornei ciclista! Um esporte que trago comigo até hoje, e que me ajudou muito a desenvolver ainda mais a disciplina, o foco, o gerenciamento de tempo, a paciência e a resiliência!
        </p>
        </p>
        <p className="text-sm mt-4">    
          Após decidir migrar de carreira, passei a me dedicar em tempo integral aos estudos.
        </p>
        <p className="text-sm mt-4">
          Passei a cursar Análise e desenvolvimento de sistemas, na Universidade Tiradentes, a estudar inglês e fazer cursos de programação pela internet. Em outubro de 2021 ingressei na Trybe, no curso de desenvolvimento full stack web, curso com duração de 1 ano, que aborda front-end, back-end, engenharia de software, metodologias ágeis e habilidades comportamentais.
        </p>
        <p className="text-sm mt-4">
          Foi um período muito intenso, de bastante estudo e de muitos projetos.
          Atualmente sou desenvolvedor web full stack, apaixonado pela programação e por codar! 
          Sou uma pessoa curiosa, determinada e sempre disposta a aprender!
        </p>
      </div>
      <div className="flex justify-center items-center ">
        <img
          className="w-[360px] rounded-md"
          src={ foto }
          alt="foto andre"
        />
      </div>
    </div>
  )
}