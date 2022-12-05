import { RiPinterestLine, RiInstagramLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center w-full bg-[#FFEDDE]'>
      <div className='flex items-center justify-center gap-5 pt-10 left-0 text-5xl'>
        <a href="https://br.pinterest.com/emilyabade/?invite_code=c398fef5763a462b84eea1ff08e0d788&sender=641270571849682981" target={'_blank'}>
          <RiPinterestLine className='hover:scale-110 transition' />
        </a>

        <a href="https://www.instagram.com/emily_abadee/" target={'_blank'}>
          <RiInstagramLine className='hover:scale-110 transition' />
        </a>
      </div>

      <p className='text-2xl p-10 text-center'><span className='text-2xl font-Bodoni font-semibold '>~</span> Emily Abade. <br /> Me siga nas minhas redes sociais!</p>
    </footer>
  )
}

export default Footer