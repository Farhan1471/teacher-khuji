"use client"

import React from 'react'
import Image from 'next/image'
import { useSession } from '@/app/lib/auth-client'

export default function Profile() {
  const { data: session, isPending } = useSession()

  const user = session?.user

  if (isPending) return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div>Loading...</div>
    </div>
  )

  if (!user) return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-sm text-slate-600">You are not logged in.</p>
      </div>
    </div>
  )

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg p-4 shadow">
        <div className="flex items-center gap-4">
          <Image
            src={user.image || "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"}
            alt={user.name || 'User avatar'}
            width={96}
            height={96}
            className="rounded-full object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-sm text-slate-600">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  )
}