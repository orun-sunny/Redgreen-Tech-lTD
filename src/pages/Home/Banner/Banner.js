import React from 'react'
import BannerImg from "../../../assests/GemibookXPro-a1_01.jpg"

const Banner = () => {
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={BannerImg} alt='/' className="w-6/12 h-96 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>




            <section class="container mx-auto pt-12">
                <div>
                    <h1 class=" font-semi text-2xl bold text-center text-bold">Must Have Picks</h1>
                    <p class="text-center text-lg text-bold">Shop our Editor Pick for outfit inspiration and must have looks</p>
                </div>
                <div>


                    <section class=" pt-5">
                        <div class=" align-middle  container mx-auto  ">
                            <div
                                class="grid grid-cols-4 sm:grid-cols-1 sm:col-span-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left pb-6">



                                <div
                                    class="group relative cursor-pointer items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 col-span-1 sm:col-span-1 grid-col-12 sm:col-span-1 ">
                                    <div class="h-96 w-72">
                                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                                            src="https://oasis.opstatics.com/content/dam/oasis/page/2023/na/home/pad-card/nogift-pc-2.7.png.thumb.webp" alt="" />
                                    </div>
                                    <div
                                        class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                                    </div>
                                    <div
                                        class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <h1 class="font-archivo text-3xl font-bold text-white">Beauty</h1>

                                        <button
                                            class="rounded-full bg-neutral-900  px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Add
                                            To Cart</button>
                                    </div>
                                </div>


                                <div
                                    class="group relative cursor-pointer items-center justify-center overflow-hidden  hover:shadow-xl hover:shadow-black/30 col-span-1 sm:col-span-1 grid-col-12 sm:col-span-1 ">
                                    <div class="h-96 w-72">
                                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                                            src="https://oasis.opstatics.com/content/dam/oasis/page/2023/tesla/product-card/nord-buds-2-pc.png.thumb.webp" alt="" />
                                    </div>
                                    <div
                                        class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                                    </div>
                                    <div
                                        class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <h1 class="font-archivo text-3xl font-bold text-white">One Beauty</h1>

                                        <button
                                            class="rounded-full bg-neutral-900  px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Add
                                            To Cart</button>
                                    </div>
                                </div>


                                <div
                                    class=" group relative cursor-pointer items-center justify-center overflow-hidden  hover:shadow-3xl  col-span-2 sm:col-span-2 grid-col-12 sm:col-span-2  ">
                                    <div>
                                        <img class=" w-full object-cover transition-transform duration-500 group-hover:scale-125"
                                            src="https://oasis.opstatics.com/content/dam/oasis/page/2023/na/home/yuanshen/Largeproductcard_PC.jpg.thumb.webp" alt="" />
                                    </div>
                                    <div
                                        class="absolute inset-0  group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                                    </div>
                                    <div
                                        class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                        <h1 class="font-archivo text-3xl font-bold text-white">Flash Sale!!!</h1>

                                        <button
                                            class="rounded-full bg-neutral-900  px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">60%
                                            OFF NOW</button>
                                    </div>

                                </div>



                            </div>
                        </div>
                    </section>


                </div>


            </section>

        </div>
    )
}

export default Banner