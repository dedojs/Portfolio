export function Carrousel() {
  const images = [
    '../src/assets/projectImage/appReceita.png',
    '../src/assets/projectImage/starWars.png',
    '../src/assets/projectImage/wallet.png',
    '../src/assets/projectImage/trivia.png',
    '../src/assets/projectImage/trunfoGenshin.png',
  ]
  return (
    <div >
      <h1>Carrousel</h1>
      <div className="w-100% border-emerald-700 p-4 flex bg-pink-600">
        {
          images.map((item) => 
          <img
            src={ item }
            alt=""
            className=" w-[300px] "
          />
          )
        }
      </div>
    </div>
  )
}