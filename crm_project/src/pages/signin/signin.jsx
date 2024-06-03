import React from 'react'
import './signin.css'

export default function signin() {
  return (
    <div className='signInCard'>
      <h1>Sign in</h1>

      <form>
      <div>

      <h6>
        Enter your email
      </h6>
      <input type="text" placeholder='Email' />

      </div>


     <div>
     <h6>
        Enter your password
      </h6>
      <input type="text" placeholder='Pasword'/>
     </div>

     <button className='signInButton'>Sign In</button>


      </form>

    </div>
  )
}
