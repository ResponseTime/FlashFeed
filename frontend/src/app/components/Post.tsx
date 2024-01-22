import React from 'react'
import Image from 'next/image'
export default function Post(props: any) {
    return (
        <div className="post flex bg-red-600 w-full p-2 space-y-3 rounded-2xl">
            <div className="top flex gap-3 w-full">
                <Image src={props.post.user.pfp} alt="none" width="30" height="30" />
                <span>
                    {props.post.time}
                </span>
            </div>
            <div className="content">

            </div>
        </div>
    )
}
