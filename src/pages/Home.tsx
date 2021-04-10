import React from 'react'
import { IonPage } from '@ionic/react'
import art from '../assets/art.svg'
import { useHistory } from 'react-router'


const Home: React.FC = () => {

    const textClass = `text-transparent bg-clip-text bg-gradient-to-tl from-cyan-500 to-fuchsia-500 `
    const data = {
        para:  `Connecting digital assets to the physical world`
    }

    const history = useHistory()

    return(
        <IonPage>
            <div className="h-screen w-screen px-8 py-4 space-y-20 overflow-auto">
                <div className="space-x-2">
                    <h1 className="font-mono text-transparent bg-clip-text bg-gradient-to-tl from-cyan-500 to-fuchsia-500 font-bold text-3xl">
                        vybe
                        <span className="text-xs mx-2">(beta)</span>
                    </h1>
                </div>
                <div className="space-y-4">
                    <img src={art} alt="art_museum"/>
                    <div className={textClass + "font-mono text-xl px-2"}>
                        <p className="text-center">{data.para}</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => history.push('/dashboard')} className="bg-gradient-to-br font-mono from-fuchsia-400 to-cyan-500 p-2 text-xl rounded-lg">Start Vybing</button>
                </div>
            </div>
        </IonPage>
    )
}

export default Home