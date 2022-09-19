const materiasUnitCursadas = [
  'Lógica Matemática',
  'Banco de Dados 1',
  'Introdução a programação',
  'Engenharia de Software 1',
  'Qualidade de Software',
  'Programação Orientada a Objetos',
  'Engenharia de Software 2',
  'Linguagem de Programação',
  'Banco de Dados 2',
  'Estrutura de Dados'
]

export function Academy() {
  return (
    <div className="border-emerald-400 border-2 p-2 m-2 mb-4 rounded-md ">
      <h1 className="text-white text-center font-black mt-4 text-4xl ">Experiência Acadêmica</h1>
      <div className="flex flex-wrap text-white ml-8">
        <ol className="list-decimal">

          <li><span className='font-black'>Instituição:</span> Trybe</li>
          <ul className="mb-4">
            <li><span className='font-black'>Curso:</span> Desenvolvimento Web Full-Stack </li>
            <li><span className='font-black'>Período:</span> novembro de 2021 - novembro de 2022. 10 meses - em curso</li>
            <ul className="list-disc"><span className='font-black'>Descrição:</span>
              <li className="ml-8">A Trybe é uma escola de desenvolvimento web que tem comprometimento genuíno com o sucesso profissional das pessoas estudantes.
              São mais de 1500 horas de formação que aborda fundamentos de desenvolvimento web, desenvolvimento Front-end e Back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais.</li>
              <li className="ml-8">Foco no desenvolvimento web full stack, utilizando as principais ferramentas do mercado</li>
              <li className="ml-8">Ensino focado tanto em habilidades técnicas quanto habibilidades comportamentais</li>
              <li className="ml-8">Metodologias ágeis</li>
            </ul>
            <li><span className='font-black'>Local:</span> Remoto </li>
          </ul>

          <li><span className='font-black'>Instituição:</span> Unit - Universidade Tiradentes</li>
          <ul>
            <li><span className='font-black'>Curso:</span> Análise e Desenvolvimento de Sistemas</li>
            <li><span className='font-black'>Período:</span> agosto de 2021 - dezembro de 2023 - em curso</li>
            <ul className="list-disc"><span className='font-black'>Matérias Cursadas:</span>
              {
                materiasUnitCursadas.map((item) =>  <li className="ml-8" key={item}>{ item }</li>)
              }
            </ul>
            <li><span className='font-black'>Local</span> Remoto</li>
          </ul>

        </ol>
      </div>
    </div>
  )
}