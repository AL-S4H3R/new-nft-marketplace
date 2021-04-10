import React from 'react'
import { data } from '../../data'

const Profile: React.FC = () => {

    const [artistId, setArtistId] = React.useState(0)

    return(
        <div className="mt-16 px-8 py-4">
            <div style={{backgroundColor:"#13151a"}} className="space-y-4 px-4 py-2">
                <div className="space-y-1">    
                    <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-teal-500 text-2xl font-semibold">
                        {data.topArtists[artistId].name}
                    </h1>
                    <p className="text-sm text-gray-400 font-mono">@{data.topArtists[artistId].name}</p>
                </div>
                <div>
                    <p className="text-gray-300 italic">{data.topArtists[artistId].bio}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile