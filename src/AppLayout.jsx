import { Outlet } from "react-router-dom";
import Navbar from "./Components/Layouts/Navbar";

const AppLayout = () => {
  return <>
  <Navbar/>
    <main className="container">
        <Outlet/>
    </main>
  </>;
};
export default AppLayout;