import cx from 'classnames';

export const Layout = ({ children, className }) => {
  return <div className={cx('container mx-auto sm:px-4', className)}>{children}</div>;
};
