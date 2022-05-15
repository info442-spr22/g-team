import * as urls from './resources/constants/url-endpoints'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Landing from './page/Landing/Landing';
import Scrapbook from './page/Scrapbook/Scrapbook';

import firebase from 'firebase/app';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    //which sign in prociders to use
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // where to show the "display name" on the sign in page
            requireDisplayName: true
        }, //each object is a sign in method
        firebase.auth.GoogleAuthProvider.PROVIDER_ID_ID // sign in with Google
    ],
    //page won't show the account chooser
    credentialHelper: 'none',
    // use popup instead of redirect for externam sign up methods
    signInFlow: 'popup'
};

function App(props) {
    const [errorMessage, setErrorMessage] = useState(undefined);
    const [user, setUser] = useState(undefined);

    //register new user
    const handleSignUp = (email, password, handle, avatar) => {
        setErrorMessage(null);
    }

    // log in existing user
    const handleSignIn = (email, password) => {
        setErrorMessage(null);
    }

    //log out current user
    const handleSignOut = () => {
        setErrorMessage(null);
    }


    let content = null;
    
    if(!user) { //if logged out, show ign up form
        content = (
        <div className="container">
            <h1>Sign Up</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
        );
    } 
    else { // if logged in, show welcome message
        content = (
            <div>
                {user &&
                    <button className="btn btn-warning" onClick={handleSignOut}>
                        Log Out {user.displayName}
                    </button>
                }

                <Switch>
                    <Routes>
                    <Route path={urls.LANDING} element={<Landing />} />
                    <Route path={urls.SCRAPBOOK} element={<Scrapbook/>} />
                    </Routes>

                </Switch>

            </div>
        );
    }

    return (
        content
    );
}

export default App;

