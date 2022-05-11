import * as urls from './resources/constants/url-endpoints'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Landing from './page/Landing/Landing';
import Scrapbook from './page/Scrapbook/Scrapbook';
import profilePage from './page/Profile/profilePage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={urls.LANDING} element={<Landing />} />
          <Route path={urls.SCRAPBOOK} element={<Scrapbook/>} />
          <Route path={urls.PROFILE} element={<profilePage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
