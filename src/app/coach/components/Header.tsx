'use client'
import Image from "next/image"
import logo from "@/public/LogoBlanco.png"
import Link from "next/link"
import { FaUserCircle } from "react-icons/fa"
import { useRouter } from "next/navigation"
import { logoutCoach } from "@/auth"


const Header = () => {
  const router = useRouter()
  async function logout () {
   await logoutCoach()
    router.replace("/")
  }
  
  return (
    <header className="w-screen top-0 z-50 flex justify-between items-center sticky bg-baltic-sea-950/70 pr-2">
      <figure className="text-white p-3 cursor-pointer">
        <Link href={'/'}>
          <Image src={logo} alt="Club App logo" height={60} />
        </Link>
      </figure>
      <div className="flex items-center gap-5">
        <button className="bg-primary-500 text-sm text-baltic-sea-800 rounded-md py-2 px-3" onClick={logout} >CERRAR SESIÓN</button>
        <div className="flex flex-col items-center text-white">
          <FaUserCircle className="text-4xl" />
          <span>Sebastian</span>
        </div>
      </div>
    </header>
  )
}

export default Header