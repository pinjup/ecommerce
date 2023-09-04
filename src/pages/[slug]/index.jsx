import { contextC } from '@/components/Context'
import Error from 'next/error'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'

export default function JacketsPage() {
    const { products } = useContext(contextC)

    

    let typeProduct

    const router = useRouter()
    const slug = router.query.slug

    if (slug === 'jackets') {
        typeProduct = 'jackets'

    } else if (slug === 't-shirts') {
        typeProduct = 't-shirt'

    } else if (slug === 'bermuda') {
        typeProduct = 'bermuda'

    } else if (slug === 'jeans-pants') {
        typeProduct = 'jeans_pants'
        
    } else if (slug === 'shirts') {
        typeProduct = 'shirts'
        
    } else if (slug === 'sneakers') {
        typeProduct = 'sneakers'
        
    } else {
        return <Error statusCode={404} />
    }

    const productsFilter = products.filter(product => product.type === typeProduct)


    

    return (
        <main className='pt-40 pb-12'>
            
            <div className="grid grid-cols-[250px] gap-10 justify-center">

                {productsFilter.map(product => (

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
