import { useState } from "react";
import styles from "./FAQ.module.scss";
import FAQQuestion from "../FAQ-Question/FAQ-Question";
const FAQ: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>FAQ</h2>
      <div>
        <FAQQuestion
          question="Which frameworks are supported?"
          answer="You can use any framework that supports React. Next.js, Astro, Remix,
        Gatsby etc."
        />
        <FAQQuestion
          question="Can I use this in my project?"
          answer={
            <>
              <p>
                Yes. Free to use for personal and commercial projects. No
                attribution required.
              </p>
              <p>
                But hey, let me know if you do. I'd love to see what you build.
              </p>
            </>
          }
        />
      </div>
    </div>
  );
};

export default FAQ;
