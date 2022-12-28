import cx from 'classnames';

import { Image } from '../../common/image';
import { Text } from '../../common/text';

export const BusinessCard = ({
  backgroundImg = 'bg-[#F1F7FF]',
  imgSrc,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cx(
        'px-8 pt-[39px] pb-[57px] border border-[#F2F2F2] rounded-[40px] w-[308px] shadow-3xl',
        className
      )}
    >
      <div className={cx('rounded-[20px] p-6 mb-[31px] w-fit mx-auto', backgroundImg)}>
        <Image src={imgSrc} />
      </div>
      <Text
        className="text-center"
        title={title}
        titleClassName="text-2xl mb-[27px] !font-medium"
        description={description}
        descriptionClassName="text-[#757575]"
      />
    </div>
  );
};
