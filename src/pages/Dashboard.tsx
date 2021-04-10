import React from 'react'
import { IonPage } from '@ionic/react'
//components
import Discover from '../components/dashboard/Discover'
import NewArt from '../components/dashboard/NewArt'
import TopBar from '../components/dashboard/Topbar'

const Dashboard: React.FC = () => {
    return(
        <IonPage>
            <div className="min-h-screen overflow-auto">
                <TopBar />
                <div className="py-4">
                    <Discover />
                    <NewArt />
                </div>
            </div>
        </IonPage>
    )
}

export default Dashboard