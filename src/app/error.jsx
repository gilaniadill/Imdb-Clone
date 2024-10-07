'use client'

import React from 'react'
import { useEffect } from 'react'

const error = ({error, reset}) => {
    useEffect(()=>{
        console.log(error);
    },[error])
  return (
    <>
        <div className='text-center mt-10'>  
            <h1>Something went wrong, Please</h1>
            <button className='hover:text-amber-600'>Try Again</button>
        </div>
    </>
  )
}

export default error