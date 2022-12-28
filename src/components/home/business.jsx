import { Text } from '../../common/text';
import { BusinessCard } from './business-card';

import businessImg from '../../assets/images/business.svg';
import financialImg from '../../assets/images/financial.svg';
import developmentImg from '../../assets/images/development.svg';
import analysisImg from '../../assets/images/analysis.svg';

export const Business = () => {
  return (
    <div className="relative flex items-center justify-between space-x-[91px] mb-[112px]">
      <Text
        className="max-w-[396px]"
        title="How can we help your Business ?"
        titleClassName="mb-[30px]"
        description="We build readymade websites, mobile applications, and elaborate online business services."
      />

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
    </div>
  );
};
