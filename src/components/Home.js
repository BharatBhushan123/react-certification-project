import React from 'react'

import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div>
        <h1 id="b1" >Certificate Maker</h1>
        <h3>Please! choose any template from below </h3>
    <Link to='template-1'>
    <img className='thumbb' src={props.cert} alt='' />
    </Link>
    <Link to ='template-2'>
        <img className='thumbb' src={props.cert2} />
        </Link>
        <Link to='template-3'>
      <img className='thumbb' src={props.cert3} />
      </Link>
      <p className='copyright'>© Copyright 2023 Bharat Bhushan</p>
    </div>
  )
}

export default Home