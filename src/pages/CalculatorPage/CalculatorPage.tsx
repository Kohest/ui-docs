import { Calculator } from "kohest-ui";
import Subtitle from "../../components/Subtitle/Subtitle";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import ViewBox from "../../components/ViewBox/ViewBox";
import LinkButton from "../../components/LinkButton/LinkButton";
import Code from "../../components/Code/Code";
import ScrollSpy from "../../components/ScrollSpy/ScrollSpy";
import ThisPageRefs from "../../components/ThisPageRefs/ThisPageRefs";
const CalculatorPage: React.FC = () => {
  return (
    <main className="home__main">
      <div className="home__content">
        <div>
          <TitleBlock
            title="Calculator"
            subtitle="Simple calculator in iPhone style"
          />
        </div>
        <div className="viewBox_wrapper">
          <ViewBox content={<Calculator />} codeText={"<Calculator />"} />
          <div id="usage">
            <Subtitle text="Usage" />
          </div>
          <Code text={'import { Calculator } from "kohest-ui";'} />
        </div>
        <div className="section_buttons">
          <LinkButton
            link="/docs/components/calendar"
            text="Calendar"
            side="left"
          />
          <LinkButton
            link="/docs/components/secondCalc"
            text="Second Calculator"
          />
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

export default CalculatorPage;
