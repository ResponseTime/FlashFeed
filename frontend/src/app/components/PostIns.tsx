'use client'
import React from 'react'
import Image from 'next/image'
export default function PostIns() {
    return (
        <>
            <div className="postw flex gap-3 border-b-2 border-gray-900 m-5 p-2 h-20">
                <Image src="https://pbs.twimg.com/profile_images/1677682039577870338/_Y6A0TSD_normal.jpg" alt="no pic" width="50" height="50" className='rounded-full m-2 ' />
                <input type="text" className="w-full bg-black text-white text-xl" placeholder='Post' />
            </div>
            <div className="actions flex flex-row px-10  justify-between">
                <div className="first space-x-3 cursor-pointer">
                    <span className="material-symbols-outlined" onClick={() => { console.log("clicked movie") }}>
                        movie
                    </span>
                    <span className="material-symbols-outlined">
                        gif_box
                    </span>
                    <span className="material-symbols-outlined">
                        add_reaction
                    </span>
                </div>
                <button className="bg-blue-400 rounded-xl w-1/6 ">Post</button>
            </div>
        </>
    )
}
