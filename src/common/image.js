import cx from 'classnames';

export const Image = ({ src = '', className, ...props }) => {
  return (
    <img
      src={src}
      alt="Preview"
      {...props}
      className={cx('rounded-lg inline-block object-cover', className)}
    />
  );
};
