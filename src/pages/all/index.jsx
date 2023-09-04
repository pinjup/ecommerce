import { contextC } from '@/components/Context'
import Image from 'next/image'
import { useContext } from 'react'

export default function JacketsPage() {
    const { products } = useContext(contextC)

    return (
        <main className='pt-40 pb-12'>
            
            <div className="grid grid-cols-[250px] gap-10 justify-center">

                {products.map(product => (

                    <div key={product.type} className="flex flex-col items-center border border-black cursor-pointer">
                        <Image alt={product.type} src={product.urlImage} width='250' height='200' />
                        <div className='w-full flex flex-col items-center text-center gap-1 p-1 bg-gray-400'>
                            <span className=" text-lg text-white break-normal">{product.name}</span>
                            <span className="font-black">${product.price}</span>
                        </div>
                    </div>

                ))}

            </div>

        </main>
    )
}
