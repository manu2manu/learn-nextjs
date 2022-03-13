import Layout from '../../components/layout';
import { Intro, MyName } from './index.style';

type ContactProps = {
  title: string;
  value: string;
};

function ContactWrapper({ title, value }: ContactProps) {
  return (
    <span>
      <strong>{title}:</strong> {value}
    </span>
  );
}

export default function AboutMe() {
  return (
    <Layout>
      <Intro>
        <MyName>Hello. I am Manu.</MyName>
        <h3>Javascript Developer</h3>
        <ContactWrapper title="email" value="manujsdev@gmail.com" />
        <ContactWrapper title="phone" value="+53 58180301" />
      </Intro>

      <p>
        I am a developer who graduated from Software engineering with more than 9 years of experience in high-impact
        environments with very good results. I'm ready for software management and development.{' '}
      </p>
      <p>
        I have experience in web application development and database administration in distributions based on Debian
        and its respective administrations.
      </p>
      <p>
        I consider myself very passionate, responsible, organized and creative. I have ease of communication and I
        believe in teamwork.
      </p>
      <p>I have a high willingness to continue my professional development and I definitely like new challenges.</p>
    </Layout>
  );
}
