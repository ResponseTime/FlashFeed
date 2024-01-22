'use client'
import React, { useState } from 'react'
import PostIns from './PostIns'
import clsx from 'clsx';
import Post from './Post';

export default function Main() {
    const [clicked, setClicked] = useState("for")
    const data = [{
        "user": {
            "name": "some",
            "pfp": "https://pbs.twimg.com/profile_images/1677682039577870338/_Y6A0TSD_normal.jpg"
        },
        "text": "some text",
        "media": "some img",
        "comments_N": "34",
        "comments": ["som coms"],
        "likes": "23",
        "shares": '34',
        "time": "ago"
    },
    {
        "user": {
            "name": "some",
            "pfp": "https://pbs.twimg.com/profile_images/1677682039577870338/_Y6A0TSD_normal.jpg"
        },
        "text": "some text",
        "media": "some img",
        "comments_N": "34",
        "comments": ["som coms"],
        "likes": "23",
        "shares": '34',
        "time": "ago"
    },
    {
        "user": {
            "name": "some",
            "pfp": "https://pbs.twimg.com/profile_images/1677682039577870338/_Y6A0TSD_normal.jpg"
        },
        "text": "some text",
        "media": "some img",
        "comments_N": "34",
        "comments": ["som coms"],
        "likes": "23",
        "shares": '34',
        "time": "ago"
    }]
    return (
        <div className="w-full border-l-[0.1rem] border-r-[0.1rem] border-gray-900">
            <div className="top flex p-3  cursor-pointer">
                <div className={clsx('foru w-1/2 flex justify-center font-bold rounded-lg p-2', {
                    "bg-blue-400": clicked === "for"
                })} onClick={() => { setClicked("for") }}>
                    for you
                </div>
                <div className={clsx("following w-1/2 flex justify-center font-bold rounded-lg p-2", {
                    "bg-blue-400": clicked === "following"
                })} onClick={() => { setClicked("following") }}>
                    Following
                </div>
                <div className="sett mx-3">
                    <span className="material-symbols-outlined">
                        settings
                    </span>
                </div>
            </div>
            <div className="h-[0.5px] w-full bg-gray-900"></div>
            <PostIns />
            <div className="ps flex flex-col justify-center p-5 space-y-3 ">
                {
                    data.map((d) => {
                        return <Post key={d} post={d} />
                    })
                }
            </div>
        </div>
    )
}
