import React from 'react'

const Header = ({ children }) => {
    return (
        <div className='p-4 bg-indigo-800 flex flex-row justify-between'>
            {children}
        </div>
    )
}

export default Header