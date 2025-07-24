
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

    <BrowserRouter basename="/AspektAnalityczny.github.io">
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Index />} />
      <Route path="bigos" element={<Bigos />} />
      <Route path="golabki" element={<Golabki />} />
      <Route path="pierogi" element={<Pierogi />} />
      <Route path="zurek" element={<Zurek />} />
    </Route>
  </Routes>
</BrowserRouter>
      
    </>
  )
}

export default App
