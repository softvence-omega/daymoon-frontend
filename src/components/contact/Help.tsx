import React from 'react'
import SearchBar from '../SearchBar'

const Help = () => {
  return (
    <div className='pt-20'>
        <div className='flex flex-col items-center justify-center gap-y-5'>
            <p className='text-5xl font-semibold'>We’re here to help</p>
            <p className='text-xl font-normal text-gray-400'>Whether you have a question or need assistance, getting in touch with us is simple.</p>
        </div>
        <div className='pt-5'>
            <SearchBar/>
        </div>
    </div>
  )
}

export default Help