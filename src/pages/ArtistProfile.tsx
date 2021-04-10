import { IonPage } from '@ionic/react'
import React from 'react'
import Profile from '../components/artist/Profile'
import TopBar from '../components/dashboard/Topbar'

const ArtistProfile: React.FC = () => {
    return(
        <IonPage>
            <div className="min-h-screen ">
                <TopBar/>
                <Profile />
            </div>
        </IonPage>
    )
}

export default ArtistProfile