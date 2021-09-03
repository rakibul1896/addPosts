import React from 'react'

const LogIn = ({setIsLoggedIn}) => {
    return (
        <div className='h-screen relative'>
            <button 
            className='border-2 border-black px-10 py-2 hover:bg-signIn-btn absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2' 
            onClick={()=> {setIsLoggedIn(true)}}
            >
                Log In
            </button>
        </div>
    )
}

export default LogIn
