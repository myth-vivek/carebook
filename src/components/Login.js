import { Button } from '@mui/material'
import React from 'react'
import "./Login.css"

function Login() {
    const signIn = () => {

    };
  return (
    <div className='login'>
        <div className='login__logo'>
            <img 
                src='https://scontent-man2-1.xx.fbcdn.net/v/t39.30808-6/348422670_631443691848106_142827159485571731_n.png?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=Kwh0bV3sBVQAX-0BLfj&_nc_ht=scontent-man2-1.xx&oh=00_AfCHu_KNiBCBWLmEayiB12TMPzkth-eDcI-TD6TyFwG5iw&oe=65758C87'
                alt=''
            />
            <img 
                src=''
                alt=''
            />
        </div>
        <Button type='submit' onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}

export default Login