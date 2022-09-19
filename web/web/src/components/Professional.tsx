export function Professional() {
  return (
    <div className="border-emerald-400 border-2 p-2 m-2 mb-4 rounded-md ">
      <h1 className="text-white text-center font-black mt-4 text-4xl ">Experiência Profissional</h1>
      <div className="flex flex-wrap text-white ml-8">
        <ol className="list-decimal">

          <li><span className='font-black'>Empresa:</span> Delicatessen Dinani</li>
          <ul className="mb-4">
            <li><span className='font-black'>Cargo:</span> Empresário - sócio-grenete</li>
            <li><span className='font-black'>Período:</span> dezembro de 2021 - fevereiro de 2022. 20 anos 3 meses</li>
            <ul className="list-disc"><span className='font-black'>Competências:</span>
              <li className="ml-8">Gerenciamento comercial - realizando compra de mercadorias para produção e comercialização no varejo. Atendimento a forncedores</li>
              <li className="ml-8">Gerenciamento pessoaç - realizando contratação, treinamento, reuniões e desligamento de colaboradores</li>
              <li className="ml-8">Gerenciamento administrativo - realizando a análise de fluxo de caixa, compensações bancárias, cálculo de margem de lucro, etc</li>
            </ul>
            <li><span className='font-black'>Local:</span> Vitória da Conquista - Bahia</li>
          </ul>

          <li><span className='font-black'>Empresa:</span> Trybe</li>
          <ul>
            <li><span className='font-black'>Cargo:</span> Estudante</li>
            <li><span className='font-black'>Período:</span> outubro de 2021 - atualmente. 1 ano</li>
            <ul className="list-disc"><span className='font-black'>Competências:</span>
              <li className="ml-8">Atividades diárias, seguindo metodologias ágeis, onde são definidas as metas e momentos do dia. </li>
              <li className="ml-8">Desenvolvimento do estudo e das atividades diárias, intercalando momentos síncronos e assíncronos</li>
              <li className="ml-8">Desenvolvimento semanal de projetos, individuias e em grupos, utilizando metodologias ágeis para seu desenvolvimento</li>
              <li className="ml-8">A Trybe, apesar de ser um escola, o ensino praticado nela é tratado como uma rotina de trabalho de um desenvolvedor. Agregando muita experiência, tanto profissional quanto pessoal, abordando tanto as hard skills quanto as softs skills.</li>
            </ul>
            <li><span className='font-black'>Local:</span> Remoto</li>
          </ul>

        </ol>
      </div>
    </div>
  )
}