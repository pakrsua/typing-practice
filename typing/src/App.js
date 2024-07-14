import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
      <Analytics></Analytics>
    </div>
  );
}

export default App;
