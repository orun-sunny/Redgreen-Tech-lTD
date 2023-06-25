import React from 'react'
import Hero from "../../../assests/GemibookXPro-a1_01.jpg"


const BottomNav = () => {
    return (
        <>


            <div className="hero">

                {/* <div className="swiper mySwiper">
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
   
              
            

                </div > */}
                {/* <div className=" swiper-button-prev"></div>
                <div className=" swiper-button-next"></div> */}

                <div className="hero min-h-screen" style={{
                    backgroundImage: `url(${Hero})`,
                    width: '100vw',
                    backgroundPosition: 'center',
                    height: '50px',
                }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>


            </div >


        </>
    )
}

export default BottomNav