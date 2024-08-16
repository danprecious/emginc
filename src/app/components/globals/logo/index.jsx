import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='font-bold text-[1.2rem]'>
        Vista<span className='text-secondary'>Vibe</span>
    </Link>
  )
}

export default Logo