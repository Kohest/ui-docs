import { Calendar } from "kohest-ui";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import Code from "../../components/Code/Code";
import ViewBox from "../../components/ViewBox/ViewBox";
import Subtitle from "../../components/Subtitle/Subtitle";
import LinkButton from "../../components/LinkButton/LinkButton";
import ScrollSpy from "../../components/ScrollSpy/ScrollSpy";
import ThisPageRefs from "../../components/ThisPageRefs/ThisPageRefs";
const CalendarPage = () => {
  return (
    <main className="home__main">
      <div className="home__content">
        <div>
          <TitleBlock
            title="Calendar"
            subtitle="Simple and modern calendar component that have simple customization."
          />
        </div>
        <div className="viewBox_wrapper">
          <ViewBox
            content={<Calendar lang="eng" />}
            codeText={'<Calendar lang="eng" />'}
          />
          <div id="usage">
            <Subtitle text="Usage" />
          </div>
          <Code text={'import { Calendar } from "kohest-ui";'} />
          <div id="examples">
            <Subtitle text="Examples" />
          </div>
          <ViewBox
            content={<Calendar lang="rus" color="black" size="small" />}
            codeText={'<Calendar lang="rus" color="black" size="small" />'}
            viewBoxName="With customization"
          ></ViewBox>
        </div>
        <div className="section_buttons">
          <LinkButton link="/docs" text="Manual" side="left" />
          <LinkButton link="/docs/components/calc" text="Calculator" />
        </div>
      </div>
      <ScrollSpy sections={["usage", "examples"]}>
        {(activeSection) => (
          <ThisPageRefs
            activeSection={activeSection}
            refs={["Usage", "Examples"]}
          />
        )}
      </ScrollSpy>
    </main>
  );
};

export default CalendarPage;
