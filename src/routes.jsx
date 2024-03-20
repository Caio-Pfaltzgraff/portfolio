import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultPage } from './components/DefaultPage';
import { ScrollToTop } from './components/ScrollToTop';
import NotFound from './pages/NotFound';
import Start from './pages/Start';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Start />} />
          <Route path='*' element={<NotFound />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}