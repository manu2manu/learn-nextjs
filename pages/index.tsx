import type { NextPage } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { IndexContainer } from './index.style';
import ButtonComponent from '../components/button';
import Skills from '../components/skills';
import { CoreQualifications } from '../components/coreQualifications';
import { Projects } from '../components/projects';

const Home: NextPage = () => {
  return (
    <>
      {/* <HomeBgWrapper /> */}
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <IndexContainer>
          <span>Hello. I am Manu.</span>
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
