import AsideMenu from "../../components/AsideMenu/AsideMenu";
import FAQ from "../../components/FAQ/FAQ";
import LinkButton from "../../components/LinkButton/LinkButton";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import styles from "./DocsPage.module.scss";
const DocsPage = () => {
  return (
    <main className="home__main">
      <div className="home__content">
        <TitleBlock
          title="Introduction"
          subtitle="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
        />
        <div className={styles.description}>
          <p>
            This is a component library that you can copy and paste into your
            apps.
          </p>
          <p>I mean you install it as a dependency via npm.</p>
          <p>
            Pick the components you need. Pick and use them in your project and
            customize to your needs.
          </p>
        </div>
        <FAQ />
        <div className={styles.section_buttons}>
          <LinkButton link="/docs/components/calendar" text="Calendar" />
        </div>
      </div>
      <div className={styles.home__this_page}></div>
    </main>
  );
};

export default DocsPage;
