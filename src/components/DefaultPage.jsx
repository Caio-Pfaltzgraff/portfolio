import { Outlet } from "react-router-dom";
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';

export function DefaultPage() {
  return (
    <>
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}