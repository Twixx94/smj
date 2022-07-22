import React from 'react'
import './Home.css';


export const Home = () => {
  return (
    <div>
      <div className='content'>
        <div className='content-row'>
            <a href='/prestataire' className='content-box box-1'><p>Prestation</p></a>
            <a href='/list' className='content-box box-2'><p>Inscription</p></a>
         </div>
         <div className='content-row'>
            <a href='' className='content-box box-3'>Meteo</a>
            <a href='' className='content-box box-4'>Note</a>
         </div>
      </div>
    </div>
  )
}
