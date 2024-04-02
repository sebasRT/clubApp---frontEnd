import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest,  res: NextResponse) {
  const response = NextResponse.next()
  const hasDNI = request.cookies.has("dni")
  const userAuth = request.cookies.has("userAuth")
  const validOTP = request.cookies.has("validOTP")
  const coachAuth = request.cookies.has("coachAuth")

  if (!hasDNI && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url))
  }

  if(!userAuth && request.nextUrl.pathname === "/user"){
    return NextResponse.redirect(new URL("/", request.url))
  }

  if(!coachAuth && request.nextUrl.pathname === "/coach"){
    return NextResponse.redirect(new URL("/coach/login", request.url))
  }

  if(!validOTP && request.nextUrl.pathname === "/changePassword"){
    return NextResponse.redirect(new URL("/", request.url))
  }
  
  return  response
}


export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}