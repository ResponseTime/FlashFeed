'use client'
import React from 'react'
import Item from './Item'

export default function Right() {
    const now = [
        { title: "some2", "description": "some description", "posts": "32.5k" },
        { title: "some43", "description": "some description", "posts": "32.5k" },
        { title: "some54", "description": "some description", "posts": "32.5k" },
        { title: "some1", "description": "some description", "posts": "32.5k" },
        { title: "some34", "description": "some description", "posts": "32.5k" },
    ]
    const follow: any = [

    ]
    return (
        <div className="w-full ">
            <div className="search m-3">
                <input type="text" placeholder="Search" className="w-1/2 rounded-full px-3 py-2 bg-[#16181c]" />
            </div>
            <div className="what m-3 bg-[#16181c] w-1/2 space-y-3 rounded-xl py-3">
                <h2 className="px-3 font-bold text-lg">
                    Whats Happening
                </h2>
                {now.map((n) => {
                    return <Item key={n.title} post={n} />
                })}
                <button className='px-3 text-lg text-blue-800'>show more</button>
            </div>
            <div className="who m-3 bg-[#16181c] w-1/2 space-y-3 rounded-xl py-3">
                <h2 className="px-3 font-bold text-lg">
                    Who to Follow
                </h2>
                {follow.map((n: any) => {
                    return <Item post={n} key={n.title} />
                })}
                <button className='px-3 text-lg text-blue-600'>show more</button>
            </div>
        </div>
    )
}
