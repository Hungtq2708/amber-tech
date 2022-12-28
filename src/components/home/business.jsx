import { Text } from '../../common/text';
import { BusinessCard } from './business-card';
import { Image } from '../../common/image';
import { Layout } from '../../common/layout';

import businessImg from '../../assets/images/business.svg';
import financialImg from '../../assets/images/financial.svg';
import developmentImg from '../../assets/images/development.svg';
import analysisImg from '../../assets/images/analysis.svg';
import dots1Img from '../../assets/images/dots-1.svg';
import circleRedImg from '../../assets/images/circle-red.svg';
import rectangleBlueImg from '../../assets/images/rectangle-blue.svg';
import rectangleYellowImg from '../../assets/images/rectangle-yellow.svg';

export const Business = () => {
  return (
    <div className="relative flex items-center justify-between mb-[112px]">
      <Layout>
        <div className="flex items-center relative">
          <div className="relative mr-[91px]">
            <Text
              className="max-w-[396px]"
              title="How can we help your Business ?"
              titleClassName="mb-[30px]"
              description="We build readymade websites, mobile applications, and elaborate online business services."
            />
          </div>

          <div className="flex-1 justify-center flex space-x-[34px] col-span-8">
            <div className="flex flex-col space-y-[30px]">
              <BusinessCard
                className="mt-[79px]"
                imgSrc={businessImg}
                title="Business Idea Planning"
                description="We present you a proposal and discuss niffty-gritty like"
              />
              <BusinessCard
                imgSrc={developmentImg}
                title="Development Website and App"
                description="Communication protocols apart from engagement models"
                backgroundImg="bg-[#FFF2F8]"
              />
            </div>
            <div className="flex flex-col space-y-[30px]">
              <BusinessCard
                imgSrc={financialImg}
                title="Financial Planning System"
                description="Protocols apart from aengage models, pricing billing"
                backgroundImg="bg-[#FFF7E3]"
              />

              <BusinessCard
                imgSrc={analysisImg}
                title="Market Analysis Project"
                description="Protocols apart from aengage models, pricing billing"
                backgroundImg="bg-[#DEFFEE]"
              />
            </div>
          </div>

          <div className="absolute top-[290px] -left-[39px] -z-20 -rotate-180">
            <Image src={rectangleYellowImg} />
          </div>

          <div className="absolute bottom-[79px] left-0 -z-20">
            <Image src={dots1Img} />
          </div>

          <div className="absolute bottom-9 right-0 -z-10">
            <Image src={circleRedImg} />
          </div>
        </div>
      </Layout>

      <div className="absolute top-[140px] right-0 -z-10">
        <Image src={rectangleBlueImg} />
      </div>
    </div>
  );
};
