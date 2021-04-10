import React from 'react'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router'

//fake backend
import { data } from '../../data'

const TopArtists: React.FC = () => {

    const history = useHistory()

    return(
        <div className="px-8 py-4 space-y-4 mt-16">
            <h1 className="text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-cyan-700">
                Top Artists <span className="text-red-700">💯</span>:
            </h1>
            <section className="flex">
                <div className="overflow-auto flex w-min space-x-4">
                    {
                        data.topArtists.map((art, index) => {
                            return(
                                <div 
                                    className="border border-purple-900 shadow-md rounded-md bg-gray-900 space-y-2 min-w-screen-sm" 
                                    key={index}
                                >
                                    <div className="w-64">
                                        <img 
                                            src={art.image} 
                                            alt={art.name} 
                                            className="w-full h-48"
                                        />
                                        <div className="p-4 flex items-center justify-between">
                                            <p className="font-mono text-transparent bg-clip-text bg-gradient-to-tr font-bold from-gray-400 to-gray-100">
                                                @{art.name}
                                            </p>
                                            <FontAwesomeIcon 
                                                icon={faArrowRight} 
                                                className="text-purple-800"
                                                onClick={() => history.push('/artist')}
                                            />
                                        </div>
                                        <div className="pb-3">
                                            <p className="text-left text-sm px-3 text-gray-400 font-medium">{art.bio}</p>
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

export default TopArtists