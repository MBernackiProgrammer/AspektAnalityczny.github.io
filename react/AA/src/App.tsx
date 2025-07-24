
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import './App.css'
import Index from './components/page';
import Bigos from './components/page/bigos';
import Golabki from './components/page/golabki';
import Pierogi from './components/page/pierogi';
import Zurek from './components/page/zurek';
import Layout from "./Layout";

function App() {

  return (
    <>

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout></Layout>}>
          <Route index element={<Index></Index>}></Route>
          <Route path='bigos' element={<Bigos></Bigos>}></Route>
          <Route path='golabki' element={<Golabki></Golabki>}></Route>
          <Route path='pierogi' element={<Pierogi></Pierogi>}></Route>
          <Route path='zurek' element={<Zurek></Zurek>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
