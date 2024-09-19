import styles from "./TitleBlock.module.scss";
interface Props {
  title: string;
  subtitle?: string;
}
const TitleBlock: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default TitleBlock;
