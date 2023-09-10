import { contextC } from '@/components/Context'
import FooterPage from '@/components/FooterPage'
import NavBar from '@/components/NavBar'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import React, { useContext } from 'react'

// const inter = Inter({ subsets: ['latin'] })

export default function Base({ children }) {

    const { ScrollStart, arrowValue, list_menu, router, menuStatus, setMenuStatus } = useContext(contextC)

    const itemFunction = (link) => {
        router.push(link)
        setMenuStatus(false)
    }

    return (
        <div className={`grid grid-cols-1 min-w-[375px]`}>

            <div className={`${menuStatus ? 'hidden' : ''}`}>
                <NavBar />

                {children}

                { arrowValue ? (<div onClick={ScrollStart} id="scrollArrow" className="fixed bottom-5 right-6 w-14 h-14 rounded-md bg-black cursor-pointer flex justify-center items-center">
                    <svg className="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                    </svg>
                </div>) : <></>}



                <FooterPage />
            </div>

            <div id='list-menu' className={`w-full h-full flex flex-col gap-2 bg-white ${menuStatus ? '' : 'hidden'}`}>

                <div id="close" className='self-end p-5 cursor-pointer'>
                    <svg onClick={() => setMenuStatus(false)} class="w-12 h-12 text-black hover:bg-gray-200 rounded-full p-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                </div>

                <div id='menu' className='flex flex-col gap-3'>

                    {list_menu.map(item => (
                        <div onClick={() => itemFunction(item.link)} key={item.text} className={`flex items-center text-center p-4 cursor-pointer hover:bg-gray-200 ${router.asPath === item.link ? 'bg-gray-200' : ''}`}>
                            <Image src={item.image} alt={item.text} width='150' height='150' className='w-[80px] h-[80px] rounded-lg' />
                            <span className='font-black text-xl mx-auto text-black'>{item.text}</span>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}
