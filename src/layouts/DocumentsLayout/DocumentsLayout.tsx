import { Outlet } from "react-router-dom";
import AsideMenu from "../../components/AsideMenu/AsideMenu";
import styles from "./DocumentsLayout.module.scss";
const DocumentsLayout = () => {
  return (
    <div className={styles.home__wrapper}>
      <AsideMenu />
      <Outlet />
    </div>
  );
};

export default DocumentsLayout;
