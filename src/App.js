import * as urls from './resources/constants/url-endpoints'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={urls.LANDING} element={<h2>Landing Page</h2>} />
          <Route path={urls.SCRAPBOOK} element={<h2>Scrapbook Page</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
