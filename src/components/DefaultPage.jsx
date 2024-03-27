import { Outlet } from "react-router-dom";
import { Footer } from '../components/Footer';
import { Menu } from '../components/Menu';

export function DefaultPage() {
  return (
    <>
      <header className="h-16 w-full">
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}