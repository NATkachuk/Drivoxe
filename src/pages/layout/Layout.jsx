
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Main >
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default Layout