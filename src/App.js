import * as urls from './resources/constants/url-endpoints'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import WithNavBar from './page/WithNavBar/WithNavBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={''} element={<WithNavBar />}>
            <Route index element={<h2>Landing Page</h2>} />
            <Route path={urls.SCRAPBOOK} element={<h2>Scrapbook Page</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
