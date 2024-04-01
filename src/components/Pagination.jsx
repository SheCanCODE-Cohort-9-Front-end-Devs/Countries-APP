import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Pagination = () => {
  
  const getCountry = () =>{
    axios.get('https://restcountries.com/v3.1/independent?status=true')
    .then(response =>{
      console.log(response);
    })
    .catch(error =>{
      console.log(error)
    })
    useEffect(() =>{
      
    }, []);
  }

  return (
    <div className=' text-black flex gap-2 items-center'>
      <button className='border border-r-4'>1</button>
      <button className='border border-r-4'>2</button>
      <button className='border border-r-4'>3</button>
      <button className='border border-r-4'>4</button>
      <button className='border border-r-4'>5</button>
    </div>
  )
}

export default Pagination