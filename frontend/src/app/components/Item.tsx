
import React from 'react'

export default function Item(props: any) {
    return (
        <div className=" bg-[#16181c] cursor-pointer flex flex-col hover:bg-gray-800 px-3">
            <span className="text-sm text-gray-700">{props.post.title}</span>
            <span>{props.post.description}</span>
            <span className="text-sm text-gray-200">{props.post.posts}</span>
        </div>
    )
}
