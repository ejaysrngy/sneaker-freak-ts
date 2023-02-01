import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Layout.styles.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
