import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Analytics></Analytics>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
