import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './screens/layout.tsx'
import Home from './screens/home.tsx'
import Contact from './screens/contact.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="contact" element={<Contact/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
