import { Stopwatch } from "kohest-ui";
import Code from "../../components/Code/Code";
import LinkButton from "../../components/LinkButton/LinkButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import ViewBox from "../../components/ViewBox/ViewBox";
import bgExample from "../../assets/stopwatch/bgExample.jpg";
import ScrollSpy from "../../components/ScrollSpy/ScrollSpy";
import ThisPageRefs from "../../components/ThisPageRefs/ThisPageRefs";
const StopwatchPage = () => {
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
          <ViewBox content={<Stopwatch />} codeText={"<Stopwatch />"} />
          <div id="usage">
            <Subtitle text="Usage" />
          </div>
          <Code text={'import { Stopwatch } from "kohest-ui";'} />
          <div id="examples">
            <Subtitle text="Examples" />
          </div>
          <ViewBox
            viewBoxName="With customization"
            content={<Stopwatch size="small" background={bgExample} />}
            codeText='<Stopwatch size="small" background={bgExample} />'
          />
        </div>
        <div className="section_buttons">
          <LinkButton
            link="/docs/components/qrGenerator"
            text="Qr Generator"
            side="left"
          />
          <LinkButton link="/docs/components/slider" text="Slider" />
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

export default StopwatchPage;
