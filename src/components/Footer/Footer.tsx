import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer__wrapper}>
      <div className={styles.footer__container}>
        <p className={styles.footer__text}>
          <span>Built by kohest. The source code is available on </span>
          <Link to="https://github.com/Kohest/ui-dev">GitHub</Link>
        </p>
        <p className={styles.footer__text}>
          <span>Design was stolen from </span>
          <Link to="https://ui.shadcn.com/docs">shad/cn</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
