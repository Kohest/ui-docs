import { SecondCalculator } from "kohest-ui";
import Code from "../../components/Code/Code";
import LinkButton from "../../components/LinkButton/LinkButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import ViewBox from "../../components/ViewBox/ViewBox";
import ScrollSpy from "../../components/ScrollSpy/ScrollSpy";
import ThisPageRefs from "../../components/ThisPageRefs/ThisPageRefs";
const SecondCalculatorPage = () => {
  return (
    <main className="home__main">
      <div className="home__content">
        <div>
          <TitleBlock
            title="Second Calculator"
            subtitle="Second calculator in futuristic style"
          />
        </div>
        <div className="viewBox_wrapper">
          <ViewBox
            content={<SecondCalculator />}
            codeText={"<SecondCalculator />"}
          />
          <div id="usage">
            <Subtitle text="Usage" />
          </div>
          <Code text={'import { SecondCalculator } from "kohest-ui";'} />
        </div>
        <div className="section_buttons">
          <LinkButton
            link="/docs/components/calc"
            text="Calculator"
            side="left"
          />
          <LinkButton link="/docs/components/clock" text="Clock" />
        </div>
      </div>
      <ScrollSpy sections={["usage"]}>
        {(activeSection) => (
          <ThisPageRefs activeSection={activeSection} refs={["Usage"]} />
        )}
      </ScrollSpy>
    </main>
  );
};

export default SecondCalculatorPage;
