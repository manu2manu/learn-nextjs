import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import { IndexContainer } from './index.style';
import ButtonComponent from '../components/button';
import Skills from '../components/skills';
import { CoreQualifications } from '../components/coreQualifications';

const Home: NextPage = ({ allPostsData }: any) => {
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
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }: any) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};
