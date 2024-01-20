'use client'
import React from 'react'

export default function Main() {
    return (
        <div className="w-full border-l-[0.1rem] border-r-[0.1rem] border-gray-900">
            <div className="top flex p-3  cursor-pointer">
                <div className="foru w-1/2 flex justify-center font-bold bg-blue-400 rounded-lg">
                    for you
                </div>
                <div className="following w-1/2 flex justify-center font-bold ">
                    Following
                </div>
                <div className="sett mx-3">
                    <span className="material-symbols-outlined">
                        settings
                    </span>
                </div>
            </div>
            <div className="h-[0.5px] w-full bg-gray-900"></div>
        </div>
    )
}
