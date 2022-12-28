import { Link } from 'react-router-dom';
import { Image } from './image';
import { Layout } from './layout';
import logo from '../assets/images/logo.svg';
import fbIcon from '../assets/images/facebook.svg';
import twitterIcon from '../assets/images/twitter.svg';
import linkedinIcon from '../assets/images/linkedin.svg';
import { MENUS_FOOTER } from '../constants/constants';

export const Footer = () => {
  return (
    <Layout>
      <div className="grid grid-cols-12 pt-[60px] mb-7 border-t border-[#E4E4E4]">
        <div className="col-span-4">
          <Link to={'/'}>
            <Image src={logo} />
          </Link>
          <div className="text-[#565656] text-sm max-w-[270px] mt-6 pt-0.5 mb-10">
            Leading digital agency with solid design and development expertise. We build readymade
            websites, mobile applications, and elaborate online business services.
          </div>
          <div className="flex gap-4 items-center justify-start">
            <Image src={fbIcon} alt={''} className="cursor-pointer" />
            <Image src={twitterIcon} alt={''} className="cursor-pointer" />
            <Image src={linkedinIcon} alt={''} className="cursor-pointer" />
          </div>
        </div>
        <div className="col-span-8 flex justify-between">
          {MENUS_FOOTER.map((item) => (
            <div key={item.id} className="flex flex-col justify-start items-center">
              <div className="w-fit">
                <h1 className="text-black text-xl font-semibold">{item.title}</h1>
                <div className="grid grid-cols-1 text-sm text-black gap-4  mt-6 font-normal">
                  {item.items.map((subTitle, idx) => (
                    <Link key={idx} href="#" legacyBehavior>
                      {subTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[#A4A4A4] text-sm border-[#F1F1F1] border-t">
        <div className="mt-4 mb-11 py-0.5 text-center">Copyright © 2022 Avi Yansah</div>
      </div>
    </Layout>
  );
};
