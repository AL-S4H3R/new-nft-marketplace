import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { data } from '../../data'
import { useHistory } from 'react-router'

const NewArt: React.FC = () => {
    
    const history = useHistory()
    return(
        <div className="px-8 py-4 space-y-4">
            <h1 className="text-2xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-cyan-700">
                Hottest NFT's:
            </h1>
            <section className="flex">
                <div className="overflow-auto flex w-min space-x-4 scrollbar-track-gray-700">
                    {
                        data.hottestNfts.map((art, index) => {
                            return(
                                <div 
                                    className="border border-purple-900 shadow-md rounded-md bg-gray-900 space-y-2 lg:space-y-6 min-w-screen-sm" 
                                    key={index}
                                >
                                    <div className="w-64 space-y-2">
                                        <img 
                                            src={art.image} 
                                            alt={art.name} 
                                            className="w-full h-48"
                                        />
                                        <div className="p-4 flex items-center justify-between">
                                            <div >
                                                <p className="font-mono text-transparent bg-clip-text bg-gradient-to-tr font-bold from-gray-400 to-gray-100">
                                                    {art.name}
                                                </p>
                                                <p className="text-gray-400 text-xs font-mono"> @{art.by}</p>
                                            </div>
                                            <FontAwesomeIcon 
                                                icon={faArrowRight} 
                                                className="text-purple-800 cursor-pointer"
                                                onClick={() => history.push('/artist')}
                                            />
                                        </div>
                                        <div className="pb-3">
                                            <p className="text-left text-sm px-3 text-gray-400 font-medium">{art.description}</p>
                                        </div>
                                        <div className="flex justify-center pb-3 px-4 font-mono font-bold">
                                            <button className="text-gray-300 bg-purple-600 px-2 py-1 rounded-md w-full">
                                                {art.price} ETH
                                            </button>
                                        </div>
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

export default NewArt