import instagram from '@/public/instagram.png'
import email from '@/public/email.webp'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={` lg:absolute bottom-0 bg-baltic-sea-950 text-baltic-sea-50 p-3 flex flex-col md:flex-row items-center justify-between w-screen`}>
      <div className={`flex gap-2 md:gap-8 mb-4 md:mb-0`}>
        <section>2024 ClubAPP</section>
        <section className={`flex gap-2 md:gap-8`}>
          <p className={`cursor-pointer hover:underline`}>Privacidad</p>
          <p className={`cursor-pointer hover:underline`}>Términos</p>
        </section>
      </div>
      <div className={`flex gap-5`}>
        <a href="https://www.instagram.com/clubappdh/" target='_blank' className='cursor-pointer'><Image src={instagram} width="30" height="30" alt='instagram'/></a>
        <a href="mailto:clubappdh@gmail.com" target='_blank'><Image src={email} width="32" height="32" alt='instagram' /></a>
      </div>
    </footer>
  )
}
export default Footer