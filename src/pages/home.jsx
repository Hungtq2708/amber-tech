import { Layout } from '../common/layout';
import { Business } from '../components/home/business';
import { DigitalProduct } from '../components/home/digital-product';
import { OutClient } from '../components/home/out-client';

export const HomePage = () => {
  return (
    <>
      <DigitalProduct />
      <Layout>
        <OutClient />
      </Layout>
      <Business />
    </>
  );
};
