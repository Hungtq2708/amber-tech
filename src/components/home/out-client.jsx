import { Text } from '../../common/text';
import { Image } from '../../common/image';
import { Layout } from '../../common/layout';

import ggImg from '../../assets/images/gg.svg';
import airbnbImg from '../../assets/images/airbnb.svg';
import uberImg from '../../assets/images/uber-eats.svg';
import amazonImg from '../../assets/images/amazon.svg';

export const OutClient = () => {
  return (
    <div className="grid grid-cols-6 gap-[60px] items-center justify-center">
      <Text
        title="Out Client"
        titleClassName="mb-[17px]"
        description="Several selected clients, who already believe in our service."
        descriptionClassName="!text-lg !text-[#757575]"
        className="col-span-2"
      />

      <Image src={ggImg} />
      <Image src={airbnbImg} />
      <Image src={uberImg} />
      <Image src={amazonImg} className="mt-[18px]" />
    </div>
  );
};
