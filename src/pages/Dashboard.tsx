import { IonPage } from '@ionic/react'
import React from 'react'
import TopBar from '../components/dashboard/Topbar'

const Dashboard: React.FC = () => {
    return(
        <IonPage>
            <div className="h-screen w-screen">
                <TopBar />
            </div>
        </IonPage>
    )
}

export default Dashboard