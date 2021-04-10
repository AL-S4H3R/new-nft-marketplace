import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { useWeb3 } from '../../context/Web3Context'
import { useHistory } from 'react-router'

const TopBar: React.FC = () => {

    const { account } = useWeb3()
    const history = useHistory()
    
    const gotoMint = () => {
        if(account !== null){
            history.push('/mint')
        } 
        else {
            history.push('/wallet')
        }
    }

    return(
        <nav style={{backgroundColor:"#13151a"}} className="fixed w-full px-8 py-4 flex items-center justify-between text-xl shadow-lg">
            <div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-teal-500 text-center text-3xl font-semibold">
                    vybe
                </h1>
            </div>
            <button onClick={gotoMint} className="p-1 rounded-md border border-purple-700 bg-cyan-700">
                <p className="text-md font-mono">
                    mint
                </p>
            </button>
            {/* <div className=" px-3 py-1 rounded-full text-gray-300 text-opacity-80">
                <FontAwesomeIcon icon={faUserAlt} className="cursor-pointer"/>
            </div> */}
        </nav>
    )
}

export default TopBar