import styles from "./Subtitle.module.scss";
interface Props {
  text: string;
}
const Subtitle: React.FC<Props> = ({ text }) => {
  return <h2 className={styles.subtitle}>{text}</h2>;
};

export default Subtitle;
