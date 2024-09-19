import { Link, NavLink } from "react-router-dom";
import { AsideLink } from "../../@types/types";
import styles from "./AsideMenuContent.module.scss";
interface Props {
  title: string;
  links: AsideLink[];
}
const AsideMenuContent: React.FC<Props> = ({ title, links }) => {
  return (
    <div>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.links_wrapper}>
        {links.map((link) => (
          <NavLink
            end={link.link === "/docs"}
            key={link.name}
            to={link.link}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AsideMenuContent;
