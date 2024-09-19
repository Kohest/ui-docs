import { Slider } from "kohest-ui";
import Code from "../../components/Code/Code";
import LinkButton from "../../components/LinkButton/LinkButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import ViewBox from "../../components/ViewBox/ViewBox";
import image1 from "../../assets/slider/1.jpg";
import image2 from "../../assets/slider/2.jpg";
import image3 from "../../assets/slider/3.jpg";
import image4 from "../../assets/slider/4.jpg";
import image5 from "../../assets/slider/5.jpg";
import image6 from "../../assets/slider/6.jpg";
import ScrollSpy from "../../components/ScrollSpy/ScrollSpy";
import ThisPageRefs from "../../components/ThisPageRefs/ThisPageRefs";

const SliderPage = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  return (
    <main className="home__main">
      <div className="home__content">
        <div>
          <TitleBlock title="Slider" subtitle="Simple images slider" />
        </div>
        <div className="viewBox_wrapper">
          <ViewBox
            content={<Slider images={images} size="medium" />}
            codeText={'<Slider images={images} size="medium" />'}
          />
          <div id="usage">
            <Subtitle text="Usage" />
          </div>
          <Code text={'import { Slider } from "kohest-ui";'} />
          <div id="examples">
            <Subtitle text="Examples" />
          </div>
          <ViewBox
            viewBoxName="With customization"
            content={<Slider size="small" images={images} />}
            codeText='<Slider size="small" images={images} />'
          />
        </div>
        <div className="section_buttons">
          <LinkButton
            link="/docs/components/stopwatch"
            text="Stopwatch"
            side="left"
          />
          <LinkButton link="/docs/components/weatherCard" text="Weather Card" />
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

export default SliderPage;
