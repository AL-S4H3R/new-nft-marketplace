import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserAlt, faWallet } from '@fortawesome/free-solid-svg-icons'

const TopBar: React.FC = () => {
    return(
        <nav className="px-8 py-4 flex items-center justify-between text-xl border-b-2 border-gray-900 shadow-md rounded-lg">
            <div className=" px-3 py-1 rounded-full text-purple-500 text-opacity-80">
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-teal-500 text-center text-2xl font-semibold">
                    vybe
                </h1>
            </div>
            <div className=" px-3 py-1 rounded-full text-teal-500 text-opacity-80">
                <FontAwesomeIcon icon={faUserAlt}/>
            </div>
        </nav>
    )
}

export default TopBar