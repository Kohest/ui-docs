import { Clock } from "kohest-ui";
import Code from "../../components/Code/Code";
import LinkButton from "../../components/LinkButton/LinkButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import ViewBox from "../../components/ViewBox/ViewBox";
import styles from "./ClockPage.module.scss";
import ScrollSpy from "../../components/ScrollSpy/ScrollSpy";
import ThisPageRefs from "../../components/ThisPageRefs/ThisPageRefs";

const ClockPage = () => {
  return (
    <main className="home__main">
      <div className="home__content">
        <TitleBlock
          title="Clock"
          subtitle="Clock component that have simple customization."
        />
        <div className="viewBox_wrapper">
          <ViewBox
            content={<Clock width="500px" fontSize="70px" clockWidth="90px" />}
            codeText={
              '<Clock width="500px" fontSize="70px" clockWidth="90px" />'
            }
          />
          <div id="usage">
            <Subtitle text="Usage" />
          </div>
          <Code text={'import { Clock } from "kohest-ui";'} />
          <div id="examples">
            <Subtitle text="Examples" />
          </div>
          <ViewBox
            viewBoxName="With customization"
            content={
              <Clock
                width="400px"
                fontSize="30px"
                clockWidth="90px"
                height="120px"
                shapeWidth="120px"
                shapeHeight="120px"
              />
            }
            codeText={
              <>
                <span>
                  {'<Clock width="400px" fontSize="30px" clockWidth="90px"'}
                </span>
                <span>
                  {'height="120px" shapeWidth="120px" shapeHeight="120px" />'}
                </span>
              </>
            }
          />
        </div>
        <div className="section_buttons">
          <LinkButton
            link="/docs/components/secondCalc"
            text="Second Calculator"
            side="left"
          />
          <LinkButton link="/docs/components/musicPlayer" text="Music Player" />
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

export default ClockPage;
