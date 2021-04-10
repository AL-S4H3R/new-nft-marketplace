import React from 'react'
import { data } from '../../data'

const TopArtists: React.FC = () => {

    return(
        <div className="px-8 py-4 space-y-4">
            <h1 className="text-2xl font-mono text-purple-500">
                Top Artists:
            </h1>
            <section className="flex">
            <div className="overflow-auto flex w-min space-x-4">
                {
                    data.topArtists.map((art, index) => {
                        return(
                            <div 
                                className="border border-gray-900 py-2 space-y-2 bg-gray-800 min-w-screen-sm" 
                                key={index}
                            >
                                <div className="w-64">
                                    <div>
                                        <h1>by - {art.name}</h1>
                                    </div>
                                    <img src={art.image} alt={art.name} className="w-full"/>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            </section>
        </div>
    )
}

export default TopArtists