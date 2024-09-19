import { MusicPlayer } from "kohest-ui";
import Code from "../../components/Code/Code";
import LinkButton from "../../components/LinkButton/LinkButton";
import Subtitle from "../../components/Subtitle/Subtitle";
import TitleBlock from "../../components/TitleBlock/TitleBlock";
import ViewBox from "../../components/ViewBox/ViewBox";
import songExample from "../../assets/musicPlayer/songExample.mp3";
import songCoverExample from "../../assets/musicPlayer/songCoverExample.jpg";
import ScrollSpy from "../../components/ScrollSpy/ScrollSpy";
import ThisPageRefs from "../../components/ThisPageRefs/ThisPageRefs";
const MusicPlayerPage: React.FC = () => {
  return (
    <main className="home__main">
      <div className="home__content">
        <div>
          <TitleBlock
            title="Music Player"
            subtitle="Music player component where you can customize background image and title with author and song."
          />
        </div>
        <div className="viewBox_wrapper">
          <ViewBox
            content={<MusicPlayer author="Example" song="" title="Example" />}
            codeText={
              '<MusicPlayer author="Example" song="" title="Example" />'
            }
          />
          <div id="usage">
            <Subtitle text="Usage" />
          </div>
          <Code text={'import { MusicPlayer } from "kohest-ui";'} />
          <div id="examples">
            <Subtitle text="Examples" />
          </div>
          <ViewBox
            viewBoxName="With customization"
            content={
              <MusicPlayer
                author="Ludwig van Beethoven"
                song={songExample}
                title="Moonlight Sonata"
                coverImage={songCoverExample}
              />
            }
            codeText={
              <>
                <span>{`<MusicPlayer author="Ludwig van Beethoven" song={songExample}`}</span>
                <span>{`title="Moonlight Sonata" coverImage={songCoverExample}/>`}</span>
              </>
            }
          />
        </div>
        <div className="section_buttons">
          <LinkButton link="/docs/components/clock" text="Clock" side="left" />
          <LinkButton link="/docs/components/notes" text="Notes" />
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

export default MusicPlayerPage;
