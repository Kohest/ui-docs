import { WeatherCard } from "kohest-ui";
import Code from "../../components/Code/Code";
import LinkButton from "../../components/LinkButton/LinkButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import ViewBox from "../../components/ViewBox/ViewBox";
import ScrollSpy from "../../components/ScrollSpy/ScrollSpy";
import ThisPageRefs from "../../components/ThisPageRefs/ThisPageRefs";

const WeatherCardPage = () => {
  return (
    <main className="home__main">
      <div className="home__content">
        <div>
          <TitleBlock
            title="Weather Card"
            subtitle="Weather card with different colors"
          />
        </div>
        <div className="viewBox_wrapper">
          <ViewBox content={<WeatherCard />} codeText={"<WeatherCard />"} />
          <div id="usage">
            <Subtitle text="Usage" />
          </div>
          <Code text={'import { WeatherCard } from "kohest-ui";'} />
          <div id="examples">
            <Subtitle text="Examples" />
          </div>
          <ViewBox
            viewBoxName="With customization"
            content={<WeatherCard color="white" />}
            codeText='<WeatherCard color="white" />'
          />
        </div>
        <div className="section_buttons">
          <LinkButton
            link="/docs/components/slider"
            text="Slider"
            side="left"
          />
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

export default WeatherCardPage;
