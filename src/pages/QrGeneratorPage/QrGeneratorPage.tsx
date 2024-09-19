import { QrGenerator } from "kohest-ui";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import ViewBox from "../../components/ViewBox/ViewBox";
import Subtitle from "../../components/Subtitle/Subtitle";
import Code from "../../components/Code/Code";
import LinkButton from "../../components/LinkButton/LinkButton";
import ScrollSpy from "../../components/ScrollSpy/ScrollSpy";
import ThisPageRefs from "../../components/ThisPageRefs/ThisPageRefs";
const QrGeneratorPage = () => {
  return (
    <main className="home__main">
      <div className="home__content">
        <div>
          <TitleBlock
            title="Qr Generator"
            subtitle="Just small QR code generator."
          />
        </div>
        <div className="viewBox_wrapper">
          <ViewBox content={<QrGenerator />} codeText={"<QrGenerator />"} />
          <div id="usage">
            <Subtitle text="Usage" />
          </div>
          <Code text={'import { QrGenerator } from "kohest-ui";'} />
          <div id="examples">
            <Subtitle text="Examples" />
          </div>
          <ViewBox
            viewBoxName="With customization"
            content={<QrGenerator color="#8a8a8b" />}
            codeText='<QrGenerator color="#8a8a8b" />'
          />
        </div>
        <div className="section_buttons">
          <LinkButton link="/docs/components/notes" text="Notes" side="left" />
          <LinkButton link="/docs/components/stopwatch" text="Stopwatch" />
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

export default QrGeneratorPage;
