import { contextC } from "@/components/Context"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { useContext } from "react"

export default function Home() {
    const { dataContent } = useContext(contextC)


    const structureProduct = (pad, name, urlLand, altLand, urlDemo, altDemo, urlLink) => (
        <div key={name}>
            <div className={pad}>

                <div className="relative">
                    <Image src={urlLand} width="200" height="200" alt={altLand} className="w-full h-[520px]" />

                    <div className="text-white flex flex-col gap-2 items-center text-center w-full absolute top-[60%]">
                        <span className="text-2xl font-bold">{name}</span>
                        <Link href={urlLink} className="font-bold bg-[#ff9900] hover:bg-[#00cc00] gradientButton w-20 h-10 rounded-3xl cursor-pointer flex items-center justify-center">
                            <span>BUY</span>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="flex justify-center items-center h-72 cursor-pointer">
                <Image src={urlDemo} width="200" height="200" alt={altDemo} className="w-52 h-52 border-2 border-black" />
            </div>
        </div>
    )

    

    return (
        <main className="flex flex-col gap-3">

            {
                dataContent.map(item => (
                    item.type === "product" ? (structureProduct(item.pad, item.name, item.urlLand, item.altLand, item.urlDemo, item.altDemo, item.link)) : (item.content)
                ))
            }
            


        </main>
    )
}
