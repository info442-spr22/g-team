import * as urls from './resources/constants/url-endpoints'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Landing from './page/Landing/Landing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={urls.LANDING} element={<Landing />} />
          <Route path={urls.SCRAPBOOK} element={<h2>Scrapbook Page</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
