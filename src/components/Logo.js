import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
    return (
        <div className='text-white flex flex-row items-center'>
            <FontAwesomeIcon icon={faHome} className='text-4xl mr-3' />
            <div>
                <h1 className="font-bold text-2xl leading-none">Imóveis</h1>
                <h2 className="text-xs leading-none">Online</h2>
            </div>
        </div>
    )
}

export default Logo