import { Notes } from "kohest-ui";
import Code from "../../components/Code/Code";
import LinkButton from "../../components/LinkButton/LinkButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import ViewBox from "../../components/ViewBox/ViewBox";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import ScrollSpy from "../../components/ScrollSpy/ScrollSpy";
import ThisPageRefs from "../../components/ThisPageRefs/ThisPageRefs";
const NotesPage = () => {
  return (
    <main className="home__main">
      <div className="home__content">
        <div>
          <TitleBlock
            title="Notes"
            subtitle="Classic todo list with some customization"
          />
        </div>
        <div className="viewBox_wrapper">
          <ViewBox content={<Notes />} codeText={"<Notes />"} />
          <div id="usage">
            <Subtitle text="Usage" />
          </div>
          <Code text={'import { Notes } from "kohest-ui";'} />
          <div id="examples">
            <Subtitle text="Examples" />
          </div>
          <ViewBox
            viewBoxName="With customization"
            content={<Notes color="black" size="small" />}
            codeText='<Notes color="black" size="small" />'
          />
        </div>
        <div className="section_buttons">
          <LinkButton
            link="/docs/components/musicPlayer"
            text="Music Player"
            side="left"
          />
          <LinkButton link="/docs/components/qrGenerator" text="Qr Generator" />
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

export default NotesPage;
