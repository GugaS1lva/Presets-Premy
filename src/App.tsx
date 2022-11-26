import emy01 from './assets/images/emy01.jpeg'
import emy02 from './assets/images/emy02.jpeg'
import title1 from './assets/images/title1.png'
import title2left from './assets/images/title2left.png'
import title2right from './assets/images/title2right.png'
import title3 from './assets/images/title3.png'
import title4 from './assets/images/title4.png'

function App() {
  return (
    // w-screen h-screen
    <div className="flex flex-col items-center py-20 px-2 gap-20 bg-black text-white font-Bodoni">
      <section className="flex items-center justify-center flex-col text-center gap-5 px-5 sm:flex-col sm:text-start md:flex-col lg:flex-row">,
        <div className='flex flex-col gap-5 max-w-[390px] sm:max-w-[560px] md:max-w-[650px]'>
          <h2 className='flex flex-col items-center justify-center border-b-4 border-white'><img src={title1} alt="" /></h2>

          <p className='text-xl font-Bodoni2 font-bold leading-tight sm:text-4xl sm:text-center md:text-start'>Hey! Sou a Emily Abade, tenho 17 anos e sou a criadora dos Presets Premy, que ajudam milhares de pessoas a terem suas fotos mais bonitas, afinal, quem não quer postar as melhores fotos nas redes sociais, não é mesmo?</p>

          <strong className='self-center'>VENHA CONHECER O MEU PRODUTO!</strong>
        </div>

        <div>
          <img src={emy01} alt="" />
        </div>
      </section>

      <section className='flex flex-col items-center justify-center px-5 gap-10 md:gap-20 md:flex-col lg:flex-row'>
        <div className='flex flex-col items-center gap-7 max-w-[390px] sm:max-w-[560px] md:max-w-[650px]'>
          <h2 className='flex flex-col items-center justify-center sm:flex-row'>
            <img src={title2left} alt="" />
            <img className='w-[270px] ml-5 -mb-9 sm:ml-0' src={title2right} alt="" />
          </h2>
          <div className='border-b-4 border-white w-full mt-2 sm:-mt-8'></div>

          <p className='text-xl text-center font-Bodoni2 font-bold leading-tight max-w-[500px] sm:text-3xl'>Você quer melhorar a qualidade das suas fotos, não é girl?</p>

          <div className='flex flex-col gap-2 sm:flex-row'>
            <div className='flex flex-col items-center justify-center'>
              <img className='w-[230px] h-[340px]' src="" alt="" />
              <p><img src={title3} alt="" /></p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <img className='w-[230px] h-[340px]' src="" alt="" />
              <p><img src={title4} alt="" /></p>
            </div>
          </div>

          <button className='font-sans font-bold text-4xl w-[235px] h-[60px] rounded-xl text-[#00C2CB] bg-white hover:bg-zinc-900 hover:border-2 hover:border-white transition sm:text-5xl sm:w-[80%] sm:h-[90px]'>
            <a href="https://pay.kiwify.com.br/9hZC35j" target="_blank">EU QUERO!</a>
          </button>
        </div>

        <div>
          <img src={emy02} alt="" />
        </div>
      </section>

      <section className='flex flex-col items-center justify-center gap-10 text-center rounded'>
        <div className='w-[270px] h-[200px] rounded-3xl border-[1px] sm:rounded-[40px] sm:w-[560px] sm:h-[330px] md:w-[750px] md:h-[430px]'>
          <iframe className='w-full h-full rounded-[40px]' src="https://www.youtube.com/embed/Qil2r2g1q2g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <p className='text-2xl w-[300px] sm:w-[500px] sm:text-5xl'>assista ao vídeo para entender melhor</p>
      </section>

      <section className='w-[100px] h-[100px] bg-red-900 rounded'>
        <img src="" alt="" />

        <div>
          <div>
            Ao adquirir este produto na Black Friday, você terá acesso a: PRESETS PREMY + BÔNUS + 60% OFF + SUPORTE
          </div>

          <div>
            <img src="" alt="" />
          </div>
        </div>
      </section>

      <section className='w-[100px] h-[100px] bg-red-900 rounded'>
        <div></div>

        <div>
          <img src="" alt="" />
        </div>
      </section>

      <section className='w-[100px] h-[100px] bg-red-900 rounded'>
        <div><img src="" alt="" /></div>

        <div></div>
      </section>
    </div>
  )
}

export default App
