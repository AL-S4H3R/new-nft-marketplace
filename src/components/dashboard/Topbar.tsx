import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserAlt } from '@fortawesome/free-solid-svg-icons'

const TopBar: React.FC = () => {
    return(
        <nav style={{backgroundColor:"#13151a"}} className="sticky z-50 px-8 py-4 flex items-center justify-between text-xl shadow-lg rounded-lg">
            <div className=" px-3 py-1 rounded-full text-gray-300 text-opacity-80">
                <FontAwesomeIcon icon={faBars}/>
            </div>
            <div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-teal-500 text-center text-3xl font-semibold">
                    vybe
                </h1>
            </div>
            <div className=" px-3 py-1 rounded-full text-gray-300 text-opacity-80">
                <FontAwesomeIcon icon={faUserAlt} className="cursor-pointer"/>
            </div>
        </nav>
    )
}

export default TopBar