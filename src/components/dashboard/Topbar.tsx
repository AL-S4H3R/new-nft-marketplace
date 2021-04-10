import React from 'react'

const TopBar: React.FC = () => {
    return(
        <nav className="px-8 py-4 flex items-center justify-between">
            <div>
                Hamburger Icon
            </div>
            <div>
                Logo
            </div>
            <div>
                Wallet icon
            </div>
        </nav>
    )
}

export default TopBar