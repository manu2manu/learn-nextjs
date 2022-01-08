import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';

const Home: NextPage = ({allPostsData}: any) => {
  return (
   <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Manu. I’m a software engineer and a baseball fan. You can contact me on <a href="https://twitter.com/YoanMPP">Twitter</a>.</p>
         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Manu. I’m a software engineer and a baseball fan. You can contact me on <a href="https://twitter.com/YoanMPP">Twitter</a>.</p>
         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
            <section className={utilStyles.headingMd}>
        <p>Hello, I’m Manu. I’m a software engineer and a baseball fan. You can contact me on <a href="https://twitter.com/YoanMPP">Twitter</a>.</p>
         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Manu. I’m a software engineer and a baseball fan. You can contact me on <a href="https://twitter.com/YoanMPP">Twitter</a>.</p>
         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
       <section className={utilStyles.headingMd}>
        <p>Hello, I’m Manu. I’m a software engineer and a baseball fan. You can contact me on <a href="https://twitter.com/YoanMPP">Twitter</a>.</p>
         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Manu. I’m a software engineer and a baseball fan. You can contact me on <a href="https://twitter.com/YoanMPP">Twitter</a>.</p>
         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
       <section className={utilStyles.headingMd}>
        <p>Hello, I’m Manu. I’m a software engineer and a baseball fan. You can contact me on <a href="https://twitter.com/YoanMPP">Twitter</a>.</p>
         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Manu. I’m a software engineer and a baseball fan. You can contact me on <a href="https://twitter.com/YoanMPP">Twitter</a>.</p>
         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
 

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
  )
}

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

