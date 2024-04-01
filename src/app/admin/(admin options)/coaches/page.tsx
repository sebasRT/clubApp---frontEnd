import { NextResponse } from "next/server"
import dynamic from "next/dynamic";


const apiBaseURL = process.env.API_BASE_URL

const getPlayers = async () => {
  try {
    const data = await fetch(`${apiBaseURL}/coaches/list`, { method: 'GET' })
    if (!data.ok) return NextResponse.json({ error: data.statusText }, { status: data.status })

    return NextResponse.json(await data.json() as Coach[], { status: data.status })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

const CoachesList = dynamic(() => import('./components/CoachesList'), { ssr: false })

import React from 'react'
import { unstable_noStore } from "next/cache";
import { Coach } from "@/models/admin.model";
import CreateDT from "@/app/admin/components/forms/CreateDT";

const page = async () => {
  unstable_noStore()
  const data = await getPlayers()

  const coaches: Coach[] = data.ok ? await data.json() as Coach[] : [
    {
      coachNumber: 0,
      userName: "sebas",
      userLastname: "rt",
      userDni: "1007",
      userEmail: "rt@example.com",
      userAddress: "address",
      userPassword: "password",
      categoryId: 0,
      roleId: 3,
      clubId: 1
    }
  ]


  return (
    <>
      <h1 className="font-bauhs text-4xl text-center mb-4">GESTIÓN DE ENTRENADORES</h1>
      <div className="grid md:grid-cols-5 gap-10 md:gap-0">
        <div className="w-full min-w-72 h-full col-span-3 ">
          <CoachesList coaches={coaches} />
        </div>
        <div className="w-full h-full col-span-3 md:col-span-2">
          <CreateDT />
        </div>
      </div>
    </>
  )
}

export default page