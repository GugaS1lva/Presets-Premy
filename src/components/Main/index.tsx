import mockup01 from '../../assets/images/mockup01.png'
import mockup02 from '../../assets/images/mockup02.png'
import mockup03 from '../../assets/images/mockup03.png'
import mockup04 from '../../assets/images/mockup04.png'
import antes from '../../assets/images/antes.jpeg'
import depois from '../../assets/images/depois.jpeg'
import title01 from '../../assets/images/title01.png'
import logo from '../../assets/images/logo.png'

import { BsStars } from "react-icons/bs";

const Main = () => {
  return (
    <div className="bg-[#FFEDDE] w-full h-full flex flex-col items-center justify-center p-5 pt-20 font-Bodoni2 font-semibold text-[#8B6042] text-center leading-normal text-2xl sm:text-3xl">
      <section className='flex flex-col items-center justify-center relative'>
        <p className='text-4xl'>Hey girl!</p>
        <p className='max-w-[340px] pt-5 pb-3 leading-normal'>CANSADA DE NÃO TER AS MELHORES</p>
        <img className='max-w-[220px] sm:max-w-none' src={title01} alt="" />

        <img className='-mt-16' src={mockup01} alt="" />

        <BsStars className='absolute rotate-6 -top-3 left-9 sm:left-20' />
        <BsStars className='absolute -rotate-12 top-72 -left-3 text-5xl sm:top-80 sm:left-4' />
        <BsStars className='absolute rotate-12 bottom-14 right-1 text-3xl sm:bottom-20 sm:right-10' />
      </section>

      <section className='uppercase max-w-[400px] -mt-10 relative'>
        <p>E se eu lhe disser que você pode nunca mais ter esse problema?</p>

        <img className='scale-110 my-5' src={mockup02} alt="" />

        <p>E se eu lhe disser que seu feed do instagram pode ser assim?</p>

        <BsStars className='absolute text-4xl rotate-2 -bottom-2 right-3' />
      </section>

      <section className='uppercase pt-24 max-w-[400px]'>
        <p>Você quer melhorar suas fotos não é grl?</p>

        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col items-center justify-center gap-x-5 sm:flex-row'>
            <img className='rounded-lg scale-75' src={antes} alt="" />
            <strong className='font-Lato drop-shadow-strong'>ANTES</strong>
          </div>

          <div className='flex flex-col items-center justify-center gap-x-5 sm:flex-row-reverse sm:-mt-14'>
            <img className='rounded-lg scale-75' src={depois} alt="" />
            <strong className='font-Lato drop-shadow-strong'>DEPOIS</strong>
          </div>
        </div>

        <a href="https://pay.kiwify.com.br/8HVmsmf" target={'_blank'}><button className='p-5 bg-[#422511] rounded-[20px] font-bold font-sans text-[#FFEDDE] hover:scale-110 transition text-4xl sm:text-5xl my-20'>EU QUERO!</button></a>
      </section>

      <section className='flex flex-col items-center justify-center'>
        <div className='w-[270px] h-[200px] rounded-3xl border-[1px] sm:rounded-[40px] sm:w-[560px] sm:h-[330px] md:w-[750px] md:h-[430px]'>
          <iframe className='w-full h-full rounded-[20px] sm:rounded-[40px]' src="https://www.youtube.com/embed/Qil2r2g1q2g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <p className=' font-sans text-black text-center leading-none max-w-[300px] py-14 border-b-2 border-black'>Assista o vídeo para entender melhor!</p>
      </section>

      <section className='flex flex-col items-center justify-center mt-20'>
        <div className='uppercase text-black max-w-[680px]'>
          <p>Ao adquirir este produto, você terá acesso a 300 presets premy + 2 bônus</p>

          <ul className='list-disc text-start my-10 ml-10'>
            <li>Aulas de como usar</li>
            <li>Acesso a uma pasta no pinterest para ideias de fotos</li>
          </ul>
        </div>
      </section>

      <section className='flex flex-col items-center justify-center'>
        <img src={mockup03} alt="" />

        <p className='uppercase max-w-[420px] -mt-12'>Vale para fotógrafos também! Edite sua foto com apenas um clique!</p>
      </section>

      <section className='flex flex-col items-center justify-center relative'>
        <img src={mockup04} alt="" />

        <a href="https://pay.kiwify.com.br/8HVmsmf" target={'_blank'}><button className='p-5 bg-[#422511] rounded-[20px] font-bold font-sans text-[#FFEDDE] hover:scale-110 transition text-4xl sm:text-5xl'>EU QUERO!</button></a>

        <BsStars className='absolute text-5xl rotate-[170deg] top-10 right-6 sm:top-12 sm:right-10' />
        <BsStars className='absolute text-2xl rotate-6 top-52 right-2 sm:right-0' />
        <BsStars className='absolute text-4xl -rotate-12 top-[19rem] left-5 sm:left-0 sm:top-80' />
      </section>

      <section className='uppercase flex flex-col items-center justify-center -mt-10'>
        <img src={logo} alt="" />

        <div className='w-full flex flex-col items-center justify-center gap-14 -mt-14'>
          <strong>Aviso importante</strong>
          <p className='max-w-[750px]'>A Empresa MeTA não tem qualquer meio de vinculação  com  este  produto.</p>
          <strong>Pirataria é crime</strong>
          <p className='max-w-[870px] border-b-2 border-black pb-16'>A venda dOs presets Premy só pode ser realizada através deste site. Qualquer outro site onde você encontre esTe produto é uma FALSIFICAÇÃO e vai contra as leis. Evite falsificações e recuse conteúdos ilegais ou pirateados. NÃO adquira Presets Premy parecidos e que não são baseados em anos de estudo. Não nos responsabilizamos por compras realizadas em outros sites.</p>
        </div>
      </section>
    </div>
  )
}

export default Main