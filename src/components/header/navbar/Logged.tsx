import Payment from "@/app/(user)/components/Payment"
import { logoutUser } from "@/lib/user.actions"
import { useRouter } from "next/navigation"

const Logged = async () => {
const router = useRouter()
  const closeUserSession = async() => {
     await logoutUser()
      router.replace("/")
  }

  return (
    <div className="flex gap-x-5 items-center">
      <Payment/>
      <button className="group bg-primary-500 font-squada rounded-[5px] p-1 px-2  text-baltic-sea-900" onClick={closeUserSession}>
        <p className="group-active:scale-95">Cerrar Sesión</p>
      </button>
    </div>
  )
}

export default Logged