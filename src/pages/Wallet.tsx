import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useHistory } from 'react-router'
import { useWeb3 } from '../context/Web3Context'

const Wallet: React.FC = () => {
    
    const history = useHistory()
    const { connectToPortis, contractInstance } = useWeb3()
    
    const connectWallet = async () => {
        try {
            var web3 = await connectToPortis()
            if(web3){
                var contract = await contractInstance(web3)
                console.log(contract)
            }
        }
        catch(err){
            console.error(err)
        }
    }

    return(
        <div className="min-h-screen">
            <div className="px-8 py-4 space-y-8">
                <div>
                    <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        className="text-purple-800"
                        onClick={() => history.goBack()}
                    />
                </div>
                <div className="font-mono text-xl text-purple-700">
                    <h1 className="text-center">Connect your blockchain wallet</h1>
                </div>
                <div className="flex justify-center px-4">
                    <button onClick={connectWallet} className="w-full bg-purple-800 p-2 font-mono text-xl">
                        Portis
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Wallet