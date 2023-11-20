'use client'

import { SessionProvider } from 'next-auth/react'
import React, { Children } from 'react'

function Providers({ session, children }: any) {
  return (
    <SessionProvider session={session}>{children}</SessionProvider>
  )
}

export default Providers