import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

import Navbar from "../components/Navbar/Navbar";
import { AuthContextProvider } from "../contexts/AuthContext";
interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const Root = (props: Props) => {
  return (
    <AuthContextProvider>
      <div className="bg-transparent min-h-[100dvh] min-w-full box-border text-[1rem] font-sans z-0 pt-[5rem]">
        <Navbar {...props} />
        <div className="valid-height flex justify-center items-center">
          <Outlet />
        </div>
        <Footer />
        <ScrollToTop />
      </div>
    </AuthContextProvider>
  );
};

export default Root;
