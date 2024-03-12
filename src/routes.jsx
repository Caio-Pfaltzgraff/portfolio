import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { DefaultPage } from './components/DefaultPage'
import { Menu } from './components/Menu'
import { ScrollToTop } from './components/ScrollToTop'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}