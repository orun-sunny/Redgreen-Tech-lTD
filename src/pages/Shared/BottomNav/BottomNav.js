import React from 'react'
import Hero from "../../../assests/GemibookXPro-a1_01.jpg"


const BottomNav = () => {
    return (
        <>
            <div className="">

                <div className="text-center">
                    <p href='/' className="btn btn-ghost text-center"> Plus get a gift card up to $150.1 Shop now</p>
                </div>

            </div>

            <div className="hero bg-base-200 ">

                <div className="swiper mySwiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">

                            <div className="relative w-full">

                                <div>
                                    <img alt='header' className="sm:w-full w-full transition duration-500 hover:scale-125 "
                                        src={Hero} />
                                </div>



                                <p className="absolute tracking-wider  bottom-24 left-36 text-white text-center font-bold md:text-xl ">
                                    Discover Better
                                    basic and modern ,

                                    made of steel for your back.</p>
                            </div>


                        </div>



                    </div>
                    <div className="swiper-slide">


                        <div className="relative w-full">
                            <div className="">
                                <img alt='header' className=" transition duration-500 hover:scale-125 w-full object-cover "
                                  src={Hero}  />
                            </div>
                            <div className=" absolute  bottom-24 left-36 text-white text-center ">
                                <div className="px-8">


                                    <div>
                                        <p className=" font-archivo, font-bold md:text-xl ">Discover Better basic and modern ,
                                            {/* </br> */}
                                            made of steel for your back.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide">

                        <div className="relative w-full">
                            {/* <div className="">
                                <img alt='header' className=" transition duration-500 hover:scale-125 w-full object-cover "
                               src={Hero2} />
                            </div> */}
                            <div className=" absolute  bottom-24 left-36 text-white text-center ">
                                <div className="px-8">


                                    <div>
                                        <p className=" font-archivo, font-bold md:text-xl ">Discover Better basic and modern ,
                                            {/* </br> */}
                                            made of steel for your back.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="swiper-slide">
                        <div className="relative w-full">
                            <div className="">
                                <img alt='header' className=" transition duration-500 hover:scale-125 w-full object-cover "
                                    src="./assets/orun/header4.webp" />
                            </div>
                            <div className=" absolute  bottom-24 left-36 text-white text-center ">
                                <div className="px-8">


                                    <div>
                                        <p className=" font-archivo, font-bold md:text-xl ">Discover Better basic and modern ,
                                            {/* </br> */}
                                            made of steel for your back.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="swiper-slide">
                        <div className="relative w-full">
                            <div className="">
                                <img alt='header' className=" transition duration-500 hover:scale-125 w-full object-cover "
                                    src="./assets/orun/header4.webp" />
                            </div>
                            <div className=" absolute  bottom-24 left-36 text-white text-center ">
                                <div className="px-8">


                                    <div>
                                        <p className=" font-archivo, font-bold md:text-xl ">Discover Better basic and modern ,
                                            {/* </br> */}
                                            made of steel for your back.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div >
                    <div className="swiper-slide">

                        <div className="relative w-full">
                            <div className="">
                                <img alt='header' className=" transition duration-500 hover:scale-125 w-full object-cover "
                                  src={Hero}  />
                            </div>
                            <div className=" absolute  bottom-24 left-36 text-white text-center ">
                                <div className="px-8">


                                    <div>
                                        <p className=" font-archivo, font-bold md:text-xl ">Discover Better basic and modern ,
                                            {/* </br> */}
                                            made of steel for your back.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div >

                </div >
                {/* <div className=" swiper-button-prev"></div>
                <div className=" swiper-button-next"></div> */}




            </div >


        </>
    )
}

export default BottomNav