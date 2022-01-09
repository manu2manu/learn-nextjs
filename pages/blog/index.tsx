import { GetStaticProps } from "next";
import Link from "next/link";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";

export default function Blog({ allPostsData }: any) {
  return ( 
    <Layout>
       <section >
        <h2 >Blog</h2>
        <ul >
          {allPostsData?.map(({ id, date, title }: any) => (
            <li key={id}>
               <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small >
                  <Date dateString={date} />
                </small>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  console.log('posts: ', allPostsData);
  return {
    props: {
      allPostsData
    }
  };
};
