import Link from 'next/link';
import { useRouter } from 'next/router';
import { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const contextC = createContext()

function ContextProvider({ children }) {
    const [searcher, setSearcher] = useState(false)
    const [arrowValue, setArrowValue] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [menuStatus, setMenuStatus] = useState(false)

    const router = useRouter()
    
    // console.log(id)

    const ScrollStart = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const discountProducts = [
        {
            name:"T-SHIRTS",
            link: 't-shirts'
        },
        {
            name:"BERMUDA",
            link: 'bermuda'
        },
        {
            name:"JEANS AND PANTS",
            link: 'jeans-pants'
        },
        {
            name:"JACKETS",
            link: 'jackets'
        },
        {
            name:"SHIRTS",
            link: 'shirts'
        },
        {
            name:"SNEAKERS",
            link: 'sneakers'
        },
    ]

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            // console.log(scrollTop);

            // console.log(document.documentElement.scrollHeight)

            if (scrollTop == 0) {
                setSearcher(false)
                setArrowValue(false)
            } else {
                setSearcher(true)
                setArrowValue(true)
            }

            
        };

        document.addEventListener("scroll", handleScroll);
    
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const dataContent = [
        {
            type: "product",
            pad: "pt-[105px]",
            name: "JACKETS",
            urlLand: "https://i.ibb.co/T1wrXcP/pexels-lokman-sevim-16158165.jpg",
            altLand: "Female model wearing a jacket",
            urlDemo: "https://i.ibb.co/0QJw5VT/images.jpg",
            altDemo: "Jacket",
            link: 'jackets'
        },
        {
            type: "advertising",
            content: (<div key="price-shipping" className="w-full h-auto bg-black text-center p-4">
                <p className="text-xs text-white">Free delivery in store I Free home delivery for orders over 199,900 COP. This offer is not applicable to discounted items.</p>
            </div>)
        },
        {
            type: "product",
            pad: "",
            name: "T-SHIRTS",
            urlLand: "https://i.ibb.co/hDw3N1P/pexels-j-sarkar-991509.jpg",
            altLand: "Male model wearing a T-shirt",
            urlDemo: "https://i.ibb.co/3N84Q9M/plain-white-t-shirts.jpg",
            altDemo: "T-shirt",
            link: 't-shirts'
        },
        {
            type: "product",
            pad: "",
            name: "SNEAKERS",
            urlLand: "https://i.ibb.co/tHKdq1d/descarga-4.jpg",
            altLand: "Male model wearing sneakers",
            urlDemo: "https://i.ibb.co/5FPMtC6/Air-Jordan-4-Black-Cat-2-1.webp",
            altDemo: "Sneaker",
            link: 'sneakers'
        },
        {
            type: "advertising",
            content: (<div key="discount">

                <div className="relative  w-full h-[630px] bg-red-600">

                    {/*<Image src={"https://i.ibb.co/1vDW1V1/pexels-elif-tekkaya-4334669.jpg"} width="200" height="200" alt={'ll'} className="" /> */}

                    <div className="text-white flex flex-col gap-5 items-center text-center w-full absolute top-0 p-2">
                        
                        <div id="title">
                            <h1 className="text-xl font-black text-[#ff9900]">FINAL DISCOUNT</h1>
                            <p className=" font-semibold text-2xl">MORE ITEMS ADDED! <br /> UNTIL</p>
                        </div>

                        <div id="discount">
                            <span className="text-[#00cc00] text-7xl">-70%</span>
                            <p className=" text-lg">In stores and online</p>
                        </div>

                        <div id="products" className="w-full h-40 px-2 grid grid-cols-2 grid-rows-3 gap-3">
                            {discountProducts.map(product => (
                                <Link href={product.link} key={product.name} className="bg-white border-2 border-black text-black rounded-3xl flex items-center justify-center text-xs font-black hover:text-white hover:bg-black hover:border-white cursor-pointer">
                                    {product.name}
                                </Link>
                            ))}

                            {/* <div className="bg-white border-2 border-black text-black rounded-3xl col-start-1 col-end-3 flex items-center justify-center text-xs font-black hover:text-white hover:bg-black hover:border-white cursor-pointer">
                                SEE FAVORITES
                            </div> */}
                        </div>

                        <div id="warning" className="text-center px-1 pb-5 pt-9">
                            <p className="text-[10px] leading-relaxed">This promotion applies to selected items, which appear with the marked discount price, in the app it starts on 06/21/2023 at 9:00 p.m. and on the website at 10:00 p.m. and ends on 08/21/2023. 2023 at 11:59 p.m. Applies to BWord and is not combinable with other promotions.</p>
                        </div>
                        
                    </div>

                </div>

                

            </div>)
        },
        {
            type: "product",
            pad: "",
            name: "BERMUDAS",
            urlLand: "https://i.ibb.co/RC5m04Z/descarga-5.jpg",
            altLand: "Male model wearing a bermuda",
            urlDemo: "https://i.ibb.co/C8tKZdn/descarga-6.jpg",
            altDemo: "Bermuda",
            link: 'bermudas'
        },
        {
            type: "product",
            pad: "",
            name: "SHIRTS",
            urlLand: "https://i.ibb.co/k2PZx4C/Manga-larga-1.png",
            altLand: "Male model wearing a shirt",
            urlDemo: "https://i.ibb.co/sFW3RPK/images-2.jpg",
            altDemo: "Shirt",
            link: 'shirts'
        },
        {
            type: "advertising",
            content: (<div key="shipping" className="w-full h-auto bg-black text-center px-6 py-10 flex flex-col items-center gap-5">
                <h1 className="text-xl text-white">FREE SHIPPING!</h1>

                <svg class="w-8 h-8 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 1v12m0 0 4-4m-4 4L1 9"/>
                </svg>

                <p className="text-[#00cc00] text-xs">Free delivery in store I Free home delivery for orders over 199,900 COP. <span className="text-red-500">This offer is not applicable to discounted items.</span></p>
            </div>)
        },
        {
            type: "product",
            pad: "",
            name: "JEANS AND PANTS",
            urlLand: "https://i.ibb.co/c39RZSb/images-3.jpg",
            altLand: "Male model wearing a pants",
            urlDemo: "https://i.ibb.co/tsVjWkB/images-4.jpg",
            altDemo: "Pants",
            link: 'jeans-pants'
        },
    ]

    const products = [
        {
            type: 'jackets',
            price: '45',
            name: 'Jacket gray',
            urlImage: 'https://i.ibb.co/tzf5CrM/7592526802-2-6-8.jpg'
        },
        {
            type: 'jackets',
            price: '45',
            name: 'Jacket black',
            urlImage: 'https://i.ibb.co/7Nt9L2q/7592526800-2-6-8.jpg'
        },
        {
            type: 'jackets',
            price: '60',
            name: 'Jacket gray-green',
            urlImage: 'https://i.ibb.co/BVkw31k/7592523700-2-6-8.jpg'
        },
        {
            type: 'jackets',
            price: '60',
            name: 'Jacket dark gray',
            urlImage: 'https://i.ibb.co/vBSwDYH/7592513807-2-6-8.jpg'
        },
        {
            type: 'jackets',
            price: '50',
            name: 'Jacket white "SOHO"',
            urlImage: 'https://i.ibb.co/9880R0W/7592520803-2-6-8.jpg'
        },
        {
            type: 'jackets',
            price: '60',
            name: 'Jacket black',
            urlImage: 'https://i.ibb.co/8D6Qzjn/7592513800-2-6-8.jpg'
        },
        {
            type: 'jackets',
            price: '60',
            name: 'Jacket dark green',
            urlImage: 'https://i.ibb.co/HGjJP0B/7592513501-2-6-8.jpg'
        },
        {
            type: 'jackets',
            price: '60',
            name: 'Jacket blue',
            urlImage: 'https://i.ibb.co/HnRtP0q/7592513400-2-6-8.jpg'
        },
        {
            type: 'jackets',
            price: '60',
            name: 'Jacket white',
            urlImage: 'https://i.ibb.co/PFCCdR0/7592513251-2-6-8.jpg'
        },
        {
            type: 'jackets',
            price: '60',
            name: 'Jacket light gray',
            urlImage: 'https://i.ibb.co/Fsy5qRs/7592504802-2-6-8.jpg'
        },
        {
            type: 't-shirt',
            price: '30',
            name: 'T-shirt dark blue',
            urlImage: 'https://i.ibb.co/7nFXnX1/7242587400-2-6-8.jpg'
        },
        {
            type: 't-shirt',
            price: '30',
            name: 'T-shirt light gray',
            urlImage: 'https://i.ibb.co/1zHBMKC/7242598251-2-6-8.jpg'
        },
        {
            type: 't-shirt',
            price: '30',
            name: 'T-shirt light blue',
            urlImage: 'https://i.ibb.co/w06W2Vt/7242564400-2-6-8.jpg'
        },
        {
            type: 't-shirt',
            price: '30',
            name: 'T-shirt white',
            urlImage: 'https://i.ibb.co/0JKnW4V/7242562251-2-6-8.jpg'
        },
        {
            type: 't-shirt',
            price: '35',
            name: 'T-shirt white with black',
            urlImage: 'https://i.ibb.co/ZdtH02K/7241945800-2-6-8.jpg'
        },
        {
            type: 't-shirt',
            price: '30',
            name: 'T-shirt light green',
            urlImage: 'https://i.ibb.co/NYWh7k5/7242506500-2-6-8.jpg'
        },
        {
            type: 't-shirt',
            price: '30',
            name: 'T-shirt dark pink',
            urlImage: 'https://i.ibb.co/vQMPwwR/7241545606-2-6-8.jpg'
        },
        {
            type: 't-shirt',
            price: '30',
            name: 'T-shirt black',
            urlImage: 'https://i.ibb.co/gvNpQGm/7241944800-2-6-8.jpg'
        },
        {
            type: 't-shirt',
            price: '30',
            name: 'T-shirt black',
            urlImage: 'https://i.ibb.co/GVSY5DW/7241508800-2-6-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda black',
            urlImage: 'https://i.ibb.co/G71c83P/8699565833-2-6-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda blue',
            urlImage: 'https://i.ibb.co/0rt5mdS/7692505427-2-10-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda black',
            urlImage: 'https://i.ibb.co/G71c83P/8699565833-2-6-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda black',
            urlImage: 'https://i.ibb.co/MPJhKnc/7692505833-2-10-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda white',
            urlImage: 'https://i.ibb.co/QmnhxJ4/7692505712-2-10-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda beige',
            urlImage: 'https://i.ibb.co/tXQ4tRX/7692503711-2-6-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda white',
            urlImage: 'https://i.ibb.co/4th3dkJ/7691510250-2-6-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda blue',
            urlImage: 'https://i.ibb.co/n0mbspM/4699505427-2-6-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda light blue',
            urlImage: 'https://i.ibb.co/PNFVBrL/4699505434-2-6-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda gray',
            urlImage: 'https://i.ibb.co/WPr6rVB/4689803922-2-9-8.jpg'
        },
        {
            type: 'bermuda',
            price: '40',
            name: 'Bermuda dark blue',
            urlImage: 'https://i.ibb.co/X5FXNy1/4689803407-2-9-8.jpg'
        },
        {
            type: 'jeans_pants',
            price: '80',
            name: 'Pants dark gray',
            urlImage: 'https://i.ibb.co/znZk513/8678503807-2-6-8.jpg'
        },
        {
            type: 'jeans_pants',
            price: '80',
            name: 'Pants beige',
            urlImage: 'https://i.ibb.co/DVHk5Mr/8678503711-2-6-8.jpg'
        },
        {
            type: 'jeans_pants',
            price: '80',
            name: 'Pants brown',
            urlImage: 'https://i.ibb.co/v1H3JPt/8678503708-2-6-8.jpg'
        },
        {
            type: 'jeans_pants',
            price: '80',
            name: 'Pants light brown',
            urlImage: 'https://i.ibb.co/8YsvgKJ/8678503707-2-6-8.jpg'
        },
        {
            type: 'jeans_pants',
            price: '80',
            name: 'Pants light green',
            urlImage: 'https://i.ibb.co/Fq7VS6C/8678503505-2-6-8.jpg'
        },
        {
            type: 'jeans_pants',
            price: '80',
            name: 'Pants white',
            urlImage: 'https://i.ibb.co/F3cyphk/8678503251-2-6-8.jpg'
        },
        {
            type: 'jeans_pants',
            price: '80',
            name: 'Pants black',
            urlImage: 'https://i.ibb.co/b2g2YyK/7688550800-2-6-8.jpg'
        },
        {
            type: 'jeans_pants',
            price: '95',
            name: 'Jeans blue',
            urlImage: 'https://i.ibb.co/nR75Tk7/7688526427-2-6-8.jpg'
        },
        {
            type: 'jeans_pants',
            price: '95',
            name: 'Jeans black',
            urlImage: 'https://i.ibb.co/nQ5VPm8/7688510833-2-6-8.jpg'
        },
        {
            type: 'jeans_pants',
            price: '95',
            name: 'Jeans dark blue',
            urlImage: 'https://i.ibb.co/WKhMPGf/4684511427-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt light brown',
            urlImage: 'https://i.ibb.co/RHMhqN2/7473514926-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt green',
            urlImage: 'https://i.ibb.co/BNKw2kR/3473904514-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt beige',
            urlImage: 'https://i.ibb.co/JHz0pYf/4471500961-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt blue',
            urlImage: 'https://i.ibb.co/Lkxhpfb/4471500903-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt black',
            urlImage: 'https://i.ibb.co/LPnPfhf/4471500898-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt dark grey',
            urlImage: 'https://i.ibb.co/yqTpQBX/3473545800-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt beige',
            urlImage: 'https://i.ibb.co/qrdtFJX/3473545707-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt white',
            urlImage: 'https://i.ibb.co/DtnYLTY/3473545251-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt light brown',
            urlImage: 'https://i.ibb.co/26mXgTR/3473502250-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt dark',
            urlImage: 'https://i.ibb.co/LJhf56k/3473517920-2-6-8.jpg'
        },
        {
            type: 'shirts',
            price: '55',
            name: 'Shirt white',
            urlImage: 'https://i.ibb.co/KKCVk7y/3473508250-2-6-8.jpg'
        },
        {
            type: 'sneakers',
            price: '250',
            name: 'Sneaker gray',
            urlImage: 'https://i.ibb.co/TcyFXYh/ID4811-adidas-yeezy-boost-350-v2-lateral-derecho-04.png'
        },
        {
            type: 'sneakers',
            price: '200',
            name: 'Sneaker light gray with white',
            urlImage: 'https://i.ibb.co/wSS1YNr/MT580-RCB-NEW-BALANCE-580-01.jpg'
        },
        {
            type: 'sneakers',
            price: '120',
            name: 'Sandals black',
            urlImage: 'https://i.ibb.co/kD77pPY/DV2132-001-NIKE-AIR-MORE-UPTEMPO-BC-01.png'
        },
        {
            type: 'sneakers',
            price: '80',
            name: 'Sneaker white high',
            urlImage: 'https://i.ibb.co/26jKxTL/ID0361-1-FOOTWEAR-Photography-Side-Lateral-Center-View-grey.jpg'
        },
        {
            type: 'sneakers',
            price: '150',
            name: 'Sneaker beige',
            urlImage: 'https://i.ibb.co/2tSw2vX/FZ6323-RIVARLY-LOW-86-BC-01.jpg'
        },
        {
            type: 'sneakers',
            price: '250',
            name: 'Sneaker white with black',
            urlImage: 'https://i.ibb.co/VQ6y8WL/DD1391-100-NIKE-DUNK-LOW-PANDA-BROKEN-CHAINS-01.jpg'
        },
        {
            type: 'sneakers',
            price: '300',
            name: 'Sneaker dark gray',
            urlImage: 'https://i.ibb.co/rQrNCFY/DD0587-047-Jordan-5-Broken-Chains-01-copia.jpg'
        },
        {
            type: 'sneakers',
            price: '200',
            name: 'Sneaker gray',
            urlImage: 'https://i.ibb.co/fqJqSZW/Broken-Chains-Nike-Dunk-Low-DQ6215-001-01.jpg'
        },
        {
            type: 'sneakers',
            price: '250',
            name: 'Sneaker white',
            urlImage: 'https://i.ibb.co/KFtSp5h/bb550mda-new-balance-550-hemp-lateral-derecho-01.png'
        },
        {
            type: 'sneakers',
            price: '200',
            name: 'Sneaker blue with black',
            urlImage: 'https://i.ibb.co/Smg6qPG/553558-041-air-jordan-1-low-lateral-izquierdo-10.png'
        },

    ]

    const list_menu = [
        {
            text: 'ALL',
            link: '/all',
            image: 'https://i.ibb.co/8YHRTFB/Be-Funky-collage-1.png'
        },
        {
            text: 'JACKETS',
            link: '/jackets',
            image: 'https://i.ibb.co/HnRtP0q/7592513400-2-6-8.jpg'
        },
        {
            text: 'T-SHIRTS',
            link: '/t-shirts',
            image: 'https://i.ibb.co/GVSY5DW/7241508800-2-6-8.jpg'
        },
        {
            text: 'SNEAKERS',
            link: '/sneakers',
            image: 'https://i.ibb.co/KFtSp5h/bb550mda-new-balance-550-hemp-lateral-derecho-01.png'
        },
        {
            text: 'BERMUDAS',
            link: '/bermuda',
            image: 'https://i.ibb.co/G71c83P/8699565833-2-6-8.jpg'
        },
        {
            text: 'SHIRTS',
            link: '/shirts',
            image: 'https://i.ibb.co/LJhf56k/3473517920-2-6-8.jpg'
        },
        {
            text: 'JEANS AND PANTS',
            link: '/jeans-pants',
            image: 'https://i.ibb.co/b2g2YyK/7688550800-2-6-8.jpg'
        },
    ]



    return (
        <contextC.Provider value={{ searcher, dataContent, setSearcher, searchValue, setSearchValue, ScrollStart, arrowValue, products, list_menu, router, menuStatus, setMenuStatus }}>
            {children}
        </contextC.Provider>
    )
}

export { contextC, ContextProvider }
