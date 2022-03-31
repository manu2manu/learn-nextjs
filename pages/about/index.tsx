import Layout from '../../components/layout';
import Intro, { Contact, MyName, Paragraph } from './index.style';

type ContactProps = {
  title: string;
  value: string;
};

function ContactWrapper({ title, value }: ContactProps) {
  return (
    <Contact>
      <strong>{title}:</strong> {value}
    </Contact>
  );
}

export default function AboutMe() {
  return (
    <Layout title="About me">
      <Intro>
        <MyName>Hello. I'm Manu.</MyName>
        <h3>Javascript Developer</h3>
        <ContactWrapper title="email" value="manujsdev@gmail.com" />
        <ContactWrapper title="twitter" value="@manujsdev" />
      </Intro>

      <Paragraph>
        I am a developer who graduated from Software engineering with more than 9 years of experience in high-impact
        environments with very good results. I'm ready for software management and development.{' '}
      </Paragraph>
      <Paragraph>
        I have experience in web application development and database administration in distributions based on Debian
        and its respective administrations.
      </Paragraph>
      <Paragraph>
        I consider myself very passionate, responsible, organized and creative. I have ease of communication and I
        believe in teamwork.
      </Paragraph>
      <Paragraph>
        I have a high willingness to continue my professional development and I definitely like new challenges.
      </Paragraph>
    </Layout>
  );
}
