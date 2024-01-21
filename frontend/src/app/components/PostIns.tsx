'use client'
import React from 'react'
import Image from 'next/image'
export default function PostIns() {
    return (
        <>
            <div className="postw flex md:gap-3 border-b-2 border-gray-900 md:m-5 md:p-2 h-20 items-center">
                <Image src="https://pbs.twimg.com/profile_images/1677682039577870338/_Y6A0TSD_normal.jpg" alt="no pic" width="50" height="50" className='rounded-full m-2 w-8 h-8 items-center md:w-inherit md:h-inherit ' />
                <input type="text" className="w-full bg-black text-white md:text-xl" placeholder='Write Something For people!' />
            </div>
            <div className="actions flex flex-row md:px-10 justify-between">
                <div className="first space-x-3 cursor-pointer">
                    <span className="material-symbols-outlined" onClick={() => { console.log("clicked movie") }}>
                        image
                    </span>
                    <span className="material-symbols-outlined">
                        gif_box
                    </span>
                    <span className="material-symbols-outlined">
                        add_reaction
                    </span>
                </div>
                <button className="bg-blue-400 rounded-xl w-1/4 md:w-1/6 ">Post</button>
            </div>
        </>
    )
}
