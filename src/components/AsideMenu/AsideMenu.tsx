import {
  componentsLinks,
  gettingStartedLinks,
} from "../../constants/asideLinks";
import AsideMenuContent from "../AsideMenuContent/AsideMenuContent";
import styles from "./AsideMenu.module.scss";
const AsideMenu = () => {
  return (
    <aside className={styles.aside_wrapper}>
      <div className={styles.aside}>
        <div className={styles.aside__content}>
          <AsideMenuContent
            title="Getting Started"
            links={gettingStartedLinks}
          />
          <AsideMenuContent title="Components" links={componentsLinks} />
        </div>
      </div>
    </aside>
  );
};

export default AsideMenu;
