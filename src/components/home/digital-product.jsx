import { Button } from '../../common/button';
import { Image } from '../../common/image';
import { Layout } from '../../common/layout';
import { Text } from '../../common/text';

import dotImg from '../../assets/images/dots.svg';
import homeImg from '../../assets/images/home.svg';
import circleBlueImg from '../../assets/images/circle-blue.svg';
import rectangleYellowImg from '../../assets/images/rectangle-yellow.svg';

export const DigitalProduct = () => {
  return (
    <div className="relative mb-[277px] pt-[123px]">
      <Layout>
        <div className="flex space-x-[95px] items-center relative">
          <div className="relative w-full">
            <Text
              title="A Digital Product Agency"
              description="Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services."
              className="max-w-[471px] mb-[33px]"
            />
            <Button label="Contact Now" />
            <div className="absolute -bottom-[119px] -left-[53px] -z-10">
              <Image src={dotImg} />
            </div>
            <div className="absolute right-0 -bottom-[124px] -z-10">
              <Image src={rectangleYellowImg} className="-mb-[50%]" />
            </div>
          </div>
        </div>
      </Layout>

      <div className="absolute right-0 top-0 -z-10">
        <div className="relative">
          <div className="absolute top-0 left-0 -z-10">
            <Image src={circleBlueImg} className="-ml-[50%]" />
          </div>
          <Image src={homeImg} />
        </div>
      </div>
    </div>
  );
};
