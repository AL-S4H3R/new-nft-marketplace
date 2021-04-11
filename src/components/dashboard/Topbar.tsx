import React from 'react'
import { useWeb3 } from '../../context/Web3Context'
import { NavLink } from 'react-router-dom'

const TopBar: React.FC = () => {

    const { account } = useWeb3()

    return(
        <nav style={{backgroundColor:"#13151a"}} className="fixed w-full px-8 py-4 flex items-center justify-between text-xl shadow-lg">
            <div>
                <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-fuchsia-500 text-center text-3xl font-semibold">
                    vybe
                </h1>
            </div>
            <div className="flex space-x-4 lg:space-x-12 text-base font-mono uppercase items-center">
                <NavLink to="/mint" className=" hover:border-b hover:border-purple-700">
                    <p className="text-base font-mono hover:bg-purple-900 bg-purple-700 px-3 py-1">
                        Create
                    </p>
                </NavLink>
                {
                    account 
                    ? <NavLink to="/account"><p className="text-base hover:text-purple-700">Account</p></NavLink> 
                    : <NavLink to="/wallet"><p className="text-base hover:text-purple-700">Login</p></NavLink>
                }
                <NavLink to="/dashboard">
                    <p className="text-base font-mono hover:text-purple-700">
                        Blog
                    </p>
                </NavLink>
            </div>
        </nav>
    )
}

export default TopBar