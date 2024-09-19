import { useRef, useState } from "react";
import styles from "./Code.module.scss";
interface Props {
  text: React.ReactNode | string;
}
const Code: React.FC<Props> = ({ text }) => {
  const codeRef = useRef<HTMLDivElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    if (codeRef.current) {
      const codeText = codeRef.current.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };
  return (
    <div className={styles.code_wrapper}>
      <pre>
        <code ref={codeRef} className={styles.code}>
          {text}
        </code>
      </pre>
      <button className={styles.copy} onClick={copyToClipboard}>
        {isCopied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8a8a8b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check"
          >
            <path d="M20 6 9 17l-5-5"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#8a8a8b"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          </svg>
        )}
      </button>
    </div>
  );
};

export default Code;
