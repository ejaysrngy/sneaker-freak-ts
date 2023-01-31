import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.styles.css";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    // TODO: Add Router
    <div className="layout-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
