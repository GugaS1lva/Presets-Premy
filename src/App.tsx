import emy01 from './assets/images/emy01.jpeg'
import emy02 from './assets/images/emy02.jpeg'
import emy03 from './assets/images/emy03.jpeg'
import title1 from './assets/images/title1.png'
import title2left from './assets/images/title2left.png'
import title2right from './assets/images/title2right.png'
import title3 from './assets/images/title3.png'
import title4 from './assets/images/title4.png'
import title5 from './assets/images/title5.png'
import title6 from './assets/images/title6.png'
import title7 from './assets/images/title7.png'
import pinkCloud from './assets/images/pinkCloud.jpeg'
import phone1 from './assets/images/phone1.jpeg'
import girlOff from './assets/images/girlOff.jpeg'
import gifzinho from './assets/images/gifzinho.gif'
import videozinho from './assets/images/videozinho.mp4'

function App() {
  return (
    // w-screen h-screen
    <div className="flex flex-col items-center py-20 px-2 gap-20 bg-black text-white font-Bodoni">
      <section className="flex items-center justify-center flex-col text-center gap-5 px-5 sm:flex-col sm:text-start md:flex-col lg:flex-row">,
        <div className='flex flex-col gap-5 max-w-[390px] sm:max-w-[560px] md:max-w-[650px]'>
          <h2 className='flex flex-col items-center justify-center border-b-4 border-white'><img src={title1} alt="" /></h2>

          <p className='text-xl font-Bodoni2 font-bold leading-tight sm:text-4xl sm:text-center md:text-start'>Hey! Sou a Emily Abade, tenho 17 anos e sou a criadora dos Presets Premy, que ajudam milhares de pessoas a terem suas fotos mais bonitas, afinal, quem não quer postar as melhores fotos nas redes sociais, não é mesmo?</p>

          <div className='flex flex-col items-center justify-center'>
            <img src={title5} alt="" />

            <div className='flex flex-col items-center justify-center sm:flex-row'>
              <img className='mt-0 sm:mt-3' src={title6} alt="" />
              <img className='' src={title7} alt="" />
            </div>
          </div>
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
              <img className='w-[230px] h-[340px] bg-antes bg-cover bg-center bg-no-repeat rounded' alt="" />
              <p><img src={title3} alt="" /></p>
            </div>

            <div className='flex flex-col items-center justify-center'>
              <img className='w-[230px] h-[340px] bg-depois bg-cover bg-center bg-no-repeat rounded' alt="" />
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

      <section className='w-full relative'>
        <img className='absolute left-0 top-0 hidden md:block' src={pinkCloud} alt="" />

        <div className='flex flex-col items-center justify-center relative z-10 md:flex-row'>
          <p className='text-3xl text-center leading-snug md:text-2xl md:ml-5 max-w-[350px] sm:max-w-[500px] md:max-w-[300px] lg:max-w-[500px] lg:text-4xl'>
            Ao adquirir este produto na Black Friday, você terá acesso a: PRESETS PREMY + BÔNUS + 60% OFF + SUPORTE
          </p>

          <div>
            <img src={phone1} alt="" />
          </div>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center text-center md:flex-row '>
        <div className='flex flex-col items-center justify-center sm:-mb-5 md:mb-0'>
          <h2 className='text-4xl max-w-[200px] relative sm:py-5 lg:max-w-[100%]'>OS BÔNUS SERÃO DE:</h2>

          <p className='max-w-[400px] text-2xl leading-7 tracking-wider p-5 md:max-w-[500px] sm:leading-normal lg:text-3xl lg:max-w-[650px]'>1 encontro comigo pelo zoom ensinando a usar os presets e o app Lightroom (se não puder ir na aula, não se preocupe! Ficará gravado! Com acesso pelo gdrive vitalício) Acesso à minha pasta particular no Pinterest, uma coletânea com mais de 300 fotos que será atualizada frequentemente e é vitalícia.</p>
        </div>

        <div className='max-w-[400px] relative '>
          <img src={emy03} alt="" />
        </div>
      </section>

      <section className='bg-red-900 flex flex-col items-center justify-center rounded sm:flex-row'>
        <div>
          {/* <video className='w-[500px] h-[500px]' src={gifzinho}></video> */}
          <img src={gifzinho} alt="" />
        </div>

        <div>
          {/* <img src={gifzinho} alt="" /> */}
          <video src={videozinho} autoPlay loop controls></video>
        </div>

        {/* <div className=''>
          <p className='text-3xl font-Bodoni2'>Hey girl, fala sério! Está muito barato! Seu Instagram irá bombar! E nunca mais terá problemas com fotos na sua vida!! Parece até pegadinha não é?</p>

          <p className='text-3xl font-Bodoni2'>Vai perder? Promoção de 30 reais a vista ou 6x de 5,54 no cartão! O valor de um lanche e olhe lá!</p>

          <span className='text-lg'>Lembrando que após chegar dezembro, irei aumentar o preço e nunca mais farei esta promoção!</span>
        </div> */}
      </section>

      <section>
        <div>
          <h2>PROMOÇÃO</h2>

          <strong>80% OFF</strong>

          <p>Faça como outras mulheres já fizeram e brilhe seu Instagram!</p>
        </div>

        <div>
          <img src={girlOff} alt="" />
        </div>
      </section>
    </div>
  )
}

export default App
