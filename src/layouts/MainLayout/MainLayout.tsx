import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./MainLayout.module.scss";
const MainLayout = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className="main-layout">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
