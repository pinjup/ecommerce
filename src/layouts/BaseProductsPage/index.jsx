import { contextC } from '@/components/Context'
import Image from 'next/image'
import { useContext, useEffect } from 'react'

export default function BaseProductsPage({ typeProduct }) {

    const { products } = useContext(contextC)

    let productsFilter = []

    productsFilter = products.filter(product => product.type === typeProduct || typeProduct == true)
    

    
    return (
        <main className='pt-40 pb-12'>
            
            <div className="grid grid-cols-[250px] gap-10 sm:grid-cols-[250px_250px] lg:grid-cols-[250px_250px_250px] min-[1440px]:grid-cols-[250px_250px_250px_250px] justify-center">

                {productsFilter.map(product => (

                    <div key={product.id} className="flex flex-col w-full h-auto items-center border border-black cursor-pointer ">
                        <Image alt={product.type} src={product.urlImage} width='250' height='200' className='h-[372px]' loading='lazy' />

                        <div className='w-full flex flex-col items-center text-center gap-1 p-1 bg-gray-400'>
                            <span className="text-lg text-white break-normal">{product.name}</span>
                            <span className="font-black">${product.price}</span>
                        </div>
                    </div>

                ))}

            </div>

        </main>
    )
}
