import { Route } from 'react-router-dom'
import { BrowserRouter, Routes } from "react-router-dom"
import { Home } from '../pages/Home/Home'
import { Main } from '../pages/Main/Main'

export const Routing = () => {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        {/* <Route path="/upload" element={<Upload />} /> */}
    </Routes>
    </BrowserRouter>
  )
}
