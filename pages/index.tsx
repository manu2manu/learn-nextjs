import type { NextPage } from 'next';
import Layout from '../components/layout';
import ButtonComponent from '../components/button';
import Skills from '../components/skills';
import { CoreQualifications } from '../components/coreQualifications';
import { Projects } from '../components/projects';
import IndexContainer from './index.style';

const Home: NextPage = () => {
  return (
    <>
      {/* <HomeBgWrapper /> */}
      <Layout>
        <IndexContainer>
          <span>Hello. I'm Manu.</span>
          <p>
            I'm a Developer Front-End with more than 9 years of experience in high-impact environments with very good
            results.
          </p>
          <ButtonComponent href="/about" text="More about me" />
        </IndexContainer>
        <Skills />
        <CoreQualifications />
        <Projects />
      </Layout>
    </>
  );
};

export default Home;
