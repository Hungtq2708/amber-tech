import cx from 'classnames';

export const Image = ({ src = '', className, ...props }) => {
  return <img src={src} alt="Preview" {...props} className={cx('inline-block', className)} />;
};
