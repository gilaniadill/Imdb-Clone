import React from 'react'
import Link from 'next/link'


const Menu = ({title, address, Icon}) => {
  return (
    <>
        <Link href={address} className='hover:text-amber-500'>
        <Icon className='text-2xl sm:hidden'/> 
        <p className='uppercase hidden sm:inline text-lg'>{title}</p>
        </Link>
    </>
  )
}

export default Menu