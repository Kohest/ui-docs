import { useRef, useState } from "react";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import styles from "./InstallationPage.module.scss";
import {} from "kohest-ui";
import Code from "../../components/Code/Code";
const InstallationPage = () => {
  return (
    <main className="home__main">
      <div className="home__content">
        <div>
          <TitleBlock
            title="Installation"
            subtitle="It's pretty simple. Just run the command:"
          />
          <Code text="npm install kohest-ui" />
        </div>
        <div className={styles.section_ts}>
          <TitleBlock
            title="Typescript"
            subtitle="This project and the components are written in TypeScript. I recommend using TypeScript for your project as well."
          />
        </div>
      </div>
      <div></div>
    </main>
  );
};

export default InstallationPage;
