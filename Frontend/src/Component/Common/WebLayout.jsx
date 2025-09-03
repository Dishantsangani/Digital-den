import Footer from "./Footer";
import Navbar from "./Navbar";
import Support from "./Support";
import { Outlet } from "react-router-dom";

export default function WebLayout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Pages like Home render here */}
      <Support />
      <Footer />
    </>
  );
}
