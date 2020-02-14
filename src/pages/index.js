import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBars, faBed, faToilet, faCar } from '@fortawesome/free-solid-svg-icons'
import Helmet from 'react-helmet'
import './styles.css'
import imgHome from '../assets/home.jpg'

import Header from '../components/Header'
import Logo from '../components/Logo'

const Footer = () => {
    return (
        <div className="bg-indigo-800 inset-x-0 bottom-0 text-white p-4">
            <h5 className='font-bold'>Imóveis Online</h5>
            <p className='text-xs'>Rua José Exemplo, n 123, Bairro Centro</p>
        </div>
    )
}

const Index = () => {

    const houses = [1,2,3,4]

    return (
        <div className="bg-gray-200 inset-0">
            <Helmet>
                <title>Imóveis Online</title>
            </Helmet>

            <Header>
                <Logo />
                <div className=''>
                    <button className='px-5 -mr-5 hover:opacity-75 focus:outline-none'>
                        <FontAwesomeIcon icon={faBars} className='text-white text-4xl' />
                    </button>
                </div>
            </Header>

            <div className='flex flex-col sm:flex-row sm:flex-wrap justify-between sm:justify-start pb-4 pr-4 overflow-auto'>
                {
                    houses.map(() => {
                        return (
                            <div className='pl-4 pt-4'>
                                <div className='bg-white shadow-md rounded-lg overflow-hidden sm:w-64 hover:opacity-75 cursor-pointer '>
                                    <img className='h-40 w-full object-cover' src={imgHome} alt="Casa 1" />
                                    <div className='p-3'>
                                        <h3 className='text-lg font-bold'>Lorem ipsum dolor sit amet</h3>
                                        <div className='flex flex-row justify-between'>
                                            <div className='text-sm text-black'>R$ 999.999,99</div>
                                            <div className='text-xs text-gray-600 uppercase text-right font-bold'>
                                                <span class='mr-3'><FontAwesomeIcon icon={faBed} /> 3</span>
                                                <span class='mr-3'><FontAwesomeIcon icon={faToilet} /> 2 </span>
                                                <span><FontAwesomeIcon icon={faCar} /> 2</span>
                                            </div>
                                        </div>
                                        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut nunc nec sem ultricies lacinia a id dui.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <Footer />
        </div>
    )
}

export default Index 