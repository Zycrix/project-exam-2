import { Outlet } from "react-router-dom";
import Nav from "../nav";
import Footer from "../footer";
import { Main } from "../../styles/common";
function Layout() {
  return (
    <>
      <Nav />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default Layout;
