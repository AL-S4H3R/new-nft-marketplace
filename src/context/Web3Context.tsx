import React from 'react'
import Web3 from 'web3'
import { portis } from '../config/portis'

interface IWeb3 {
    web3Instance: Web3 | null;
    account: string | null;
    connectToPortis: () => Promise<void> | void
}

const init: IWeb3 = {
    account: null,
    web3Instance: null,
    connectToPortis: () => {}
}

const Web3Context = React.createContext(init)

export const useWeb3 = () => {
    return React.useContext(Web3Context)
}

const Web3ContextProvider: React.FC = ({children}) => {
    const [web3, setWeb3] = React.useState<Web3 | null>(null)
    const [account, setAccount] = React.useState<string | null>(null)
    
    //gets a web3 instance, sets the state & does it accordingly for the eth account
    const connectToPortis = async () => {
        // @ts-ignore
        const web3 = new Web3(portis.provider)
        setWeb3(web3)
        console.log(web3)
        var accounts = await web3.eth.getAccounts()
        setAccount(accounts[0])
    }

    const values: IWeb3 = {
        account: account,
        web3Instance: web3,
        connectToPortis 
    }

    return(
        <Web3Context.Provider value={values}>
            {children}
        </Web3Context.Provider>
    )
}

export default Web3ContextProvider