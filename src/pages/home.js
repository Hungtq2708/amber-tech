import { Layout } from '../common/layout';
import { Text } from '../common/text';
import { OutClient } from '../components/home/out-client';

export const HomePage = () => {
  return (
    <Layout>
      <Text
        title="A Digital Product Agency"
        description="Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services."
      />
      <OutClient />
    </Layout>
  );
};
