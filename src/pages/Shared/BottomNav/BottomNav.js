import React from 'react'
import Hero from "../../../assests/GemibookXPro-a1_01.jpg"

const BottomNav = () => {
    return (
        <div>
            <div className="">

                <div className="text-center">
                    <p href='/' className="btn btn-ghost text-center"> Plus get a gift card up to $150.1 Shop now</p>
                </div>

            </div>

            <div className="hero bg-base-200">
                <div className="">
                    <div className='text-center'>
                        <h1 className="text-5xl font-bold">GemiBook XPro</h1>
                        <p className="py-2">Stay Productive And Entertained Every Day.</p>
               
                    </div>
                   <div>
                   <img alt='/' src={Hero} className="w-full rounded-lg shadow-2xl" />
                   </div>

                </div>
            </div>


        </div>
    )
}

export default BottomNav