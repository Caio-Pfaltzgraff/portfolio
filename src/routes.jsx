import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { DefaultPage } from './components/DefaultPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}