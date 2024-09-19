import { useState } from "react";
import styles from "./ViewBox.module.scss";
import { Calendar } from "kohest-ui";
import Code from "../Code/Code";
interface Props {
  codeText?: React.ReactNode | string;
  content: React.ReactNode;
  viewBoxName?: string;
}
const ViewBox: React.FC<Props> = ({ content, codeText, viewBoxName }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.viewBox}>
      {viewBoxName && <h3 className={styles.viewBox_name}>{viewBoxName}</h3>}
      <div className={styles.viewBox_options}>
        <div className={styles.options_wrapper}>
          <button
            onClick={() => setActive(false)}
            className={
              styles.options_button + " " + (!active && styles.option_active)
            }
          >
            Preview
          </button>
          <button
            onClick={() => setActive(true)}
            className={
              styles.options_button + " " + (active && styles.option_active)
            }
          >
            Code
          </button>
        </div>
      </div>
      <div
        className={styles.viewBox_content_wrapper}
        style={{ background: active ? "rgba(24,24,27)" : "" }}
      >
        {!active && <div className={styles.viewBox_content}>{content}</div>}
        {active && <Code text={codeText} />}
      </div>
    </div>
  );
};

export default ViewBox;
