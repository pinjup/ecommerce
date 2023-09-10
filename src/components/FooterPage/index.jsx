import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function FooterPage() {
    const apps = [
        {
            name: "IOS",
            url: "https://i.ibb.co/1GTHtxM/ios.png",
            width: "123",
            link: 'https://www.apple.com/app-store/'
        },
        {
            name: "ANDROID",
            url: "https://i.ibb.co/KzLGf13/android.png",
            width: "140",
            link: ''
        }
    ]

    const help_list = ['Frequent questions', 'Status of my shipment', 'How to return', 'Process return', 'Shipments']

    const payments_list = ['Visa', 'Mastercard', 'Efecty', 'PSE']

    const [statusList, setStatusList] = useState({
        help: false,
        payments: false
    }) 

    return (
        <footer className='w-full border-t-2 [&>div]:border-b-2 [&>div]:border-black [&>div]:p-4 border-black bg-white text-black'>

            <div className='flex flex-col gap-3'>

                <div onClick={() => setStatusList({...statusList, help:!statusList.help})} className='flex justify-between items-center cursor-pointer'>
                    <span className='font-black'>Help</span>

                    { statusList.help ? (
                        <svg class="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                        </svg>
                    ) : (<svg class="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                    </svg>)}
                </div>

                { statusList.help ? (<ul className='flex flex-col gap-2 list-disc pl-9'>
                    {help_list.map(item => (
                        <li className='font-black italic hover:text-[#00cc00] cursor-pointer' key={item}>{item}</li>
                    ))}

                </ul>) : <></>}

            </div>

            <div className='flex flex-col gap-3'>

                <span className='font-black'>Our app</span>

                <ul className='flex gap-4 items-center'>

                    {apps.map(app => (
                        <li key={app.name}>
                            <Link href={app.link}>
                                <Image src={app.url} alt={app.name} width={app.width} height="42"></Image>
                            </Link>
                        </li>
                    ))}

                </ul>

            </div>


            <div className='flex flex-col gap-3'>

                <div onClick={() => setStatusList({...statusList, payments:!statusList.payments})} className='flex justify-between items-center cursor-pointer'>
                    <span className='font-black'>Payment methods</span>

                    { statusList.payments ? (
                        <svg class="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                        </svg>
                    ) : (<svg class="w-3 h-3 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                    </svg>)}
                </div>

                { statusList.payments ? (<ul className='flex flex-col gap-2 list-disc pl-9'>
                    {payments_list.map(item => (
                        <li className='font-black italic' key={item}>{item}</li>
                    ))}

                </ul>) : <></>}

            </div>

            <div className='h-40 bg-gray-600 flex justify-center items-center'>

                <Link href="https://github.com/pinjup">
                    <svg class="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                    </svg>
                </Link>

            </div>

            

        </footer>
    )
}
