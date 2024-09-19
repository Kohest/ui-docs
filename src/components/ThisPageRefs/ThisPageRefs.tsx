import { generateAnchorLink } from "../../utils/generateAnchorLink";
import styles from "./ThisPageRefs.module.scss";

interface Props {
  activeSection: string;
  refs: string[];
}

const ThisPageRefs: React.FC<Props> = ({ activeSection, refs }) => {
  return (
    <div className={styles.home__this_page}>
      <div>
        <p className={styles.this_page__title}>On this page</p>
        <ul className={styles.this_page__list}>
          {refs.map((ref, index) => (
            <li
              key={index}
              className={
                activeSection.toLowerCase() === ref.toLowerCase()
                  ? styles.active
                  : ""
              }
            >
              <a href={generateAnchorLink(ref)}>{ref}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThisPageRefs;
