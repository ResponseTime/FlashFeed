'use client'
import React from 'react'
import Link from 'next/link';
export default function Sidebar() {
    const tabs = ["Home", "Notifications", "Messages", "Lists", "Bookmarks", "Communities", "Profile", "More"]
    return (
        <>
            <div className="w-[67%]">
                <div className="logo flex justify-end w-1/2">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 invert r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
                </div>
                <div className="flex side justify-end">
                    <ul className='flex flex-col text-xl px-11'>

                        {tabs.map((tab) => {
                            return <Link key={tab} href={tab === "Home" ? "/" : tab} className="flex justify-start items-center gap-3 w-fit px-2 py-2 hover:rounded-full hover:bg-gray-900 hover:cursor-pointer font-bold my-2"> <span className="!text-3xl material-symbols-outlined">
                                {tab === "Profile" ? "person" : tab === "Messages" ? "business_messages" : tab}
                            </span>{tab}</Link>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
