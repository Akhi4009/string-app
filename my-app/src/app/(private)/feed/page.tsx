"use client"

import FeedContainer from "./feed-container"

export default async function Feed(){
    return (
        <main>
        <h2 className="text-slate-200">Feed</h2>
        <FeedContainer/>
        </main>
    )
}