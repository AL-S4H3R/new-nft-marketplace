import React from 'react'
import Web3 from 'web3'

interface IWeb3 {
    web3Instance: Web3 | null;
    account: string | null;
}

const init: IWeb3 = {
    account: null,
    web3Instance: null
}

const Web3Context = React.createContext(init)

export const useWeb3 = () => {
    return React.useContext(Web3Context)
}

const Web3ContextProvider: React.FC = ({children}) => {
    const [web3, setWeb3] = React.useState<Web3 | null>(null)
    const [account, setAccount] = React.useState<string | null>(null)
    
    const values: IWeb3 = {
        account: account,
        web3Instance: web3
    }

    return(
        <Web3Context.Provider value={values}>
            {children}
        </Web3Context.Provider>
    )
}

export default Web3ContextProvider