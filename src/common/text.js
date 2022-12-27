import cx from 'classnames';

export const Text = ({
  title = '',
  description = '',
  titleClassName,
  descriptionClassName,
  className,
}) => {
  return (
    <div className={cx('flex flex-col', className)}>
      {title && (
        <div className={cx('text-40 text-black mb-10 font-bold', titleClassName)}>{title}</div>
      )}

      {description && (
        <div className={cx('text-base text-[#565656]', descriptionClassName)}>{description}</div>
      )}
    </div>
  );
};
