import React from 'react'

export default function Loader() {
  return (
    <>
    <div className='position-absolute w-100 h-75 d-flex' style={{zIndex:999,backgroundColor:'rgba(255,255,255,0.8)'}}>
        <div className='m-auto text-center loader-img'>
            <img className='w-25' src='/assets/img/mobilise-loader.gif' />
        </div>
    </div>
    </>
  )
}
