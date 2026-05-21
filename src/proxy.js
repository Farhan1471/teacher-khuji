import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { auth } from './app/lib/auth'
 

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    })

    if (!session && !session?.user) {
        return NextResponse.redirect(new URL('/', request.url));
    }
    }
 
export const config = {
  matcher: ['/tutors/:id', '/add_tutor', '/my_tutors', '/my_booked_session'],
}