import Link from 'next/link'
import React from 'react'
import { FaAngry, FaNode, FaSadCry } from 'react-icons/fa'

const Custom404 = ({href, subText}) => {
  return (
    <section className='flex justify-center items-center h-[80vh] p-4'>
        <div className='text-center'>
            <div className='flex justify-center '>
                <FaSadCry className='lg:text-[7rem]  text-[4rem]'/>
                </div>
            <h1 className='md:text-[5em] font-bold text-[3em] text-gradient'>Aw, Apologies...</h1>
               <p className='text-sm py-7 line-through  font-bold'>
                <Link href={href}>{subText}</Link>
                </p> 
        </div>
    </section>
  )
}

export default Custom404