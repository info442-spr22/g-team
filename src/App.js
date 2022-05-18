import React from 'react'
import * as urls from './resources/constants/url-endpoints'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Landing from './page/Landing/Landing';
import Scrapbook from './page/Scrapbook/Scrapbook';
import Gallery from './page/Gallery/Gallery';
import * as auth from 'firebase/auth';

const uiConfig = {
    //which sign in providers to use
    signInOptions: [
        {
            provider: auth.EmailAuthProvider.PROVIDER_ID,
            // where to show the "display name" on the sign in page
            requireDisplayName: true
        }, //each object is a sign in method
        auth.GoogleAuthProvider.PROVIDER_ID, // sign in with Google
        // auth.TwitterAuthProvider.PROVIDER_ID,
    ],
    //page won't show the account chooser
    credentialHelper: 'none',
    // use popup instead of redirect for externam sign up methods
    signInFlow: 'popup'
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={urls.LANDING} element={<Landing />} />
          <Route path={urls.SCRAPBOOK} element={<Scrapbook/>} />
          <Route path={urls.GALLERY} element={<Gallery/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;