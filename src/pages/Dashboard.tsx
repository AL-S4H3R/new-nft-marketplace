import { IonPage } from '@ionic/react'
import React from 'react'
import Discover from '../components/dashboard/Discover'
import TopBar from '../components/dashboard/Topbar'

const Dashboard: React.FC = () => {
    return(
        <IonPage>
            <div className="min-h-screen">
                <TopBar />
                <Discover />
            </div>
        </IonPage>
    )
}

export default Dashboard