import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultPage } from './components/DefaultPage'
import { Footer } from './components/Footer'
import { Menu } from './components/Menu'
import { ScrollToTop } from './components/ScrollToTop'
import { Start } from './pages/Start'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Start />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}