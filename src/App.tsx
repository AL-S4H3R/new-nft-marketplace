import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

//tailwind css
import './index.css'

//pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ArtistProfile from './pages/ArtistProfile';
import Wallet from './pages/Wallet';
import MintNft from './pages/MintNft';
import Web3ContextProvider from './context/Web3Context';

const App: React.FC = () => {
    return(
        <IonApp>
            <Web3ContextProvider>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/artist" component={ArtistProfile }/>
                    <Route path="/wallet" component={Wallet} />
                    <Route path="/mint" component={MintNft} />
                </IonRouterOutlet>
            </IonReactRouter>  
            </Web3ContextProvider>      
        </IonApp>
    )
}


export default App;
