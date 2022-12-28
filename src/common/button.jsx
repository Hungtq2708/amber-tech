import cx from 'classnames';

export const Button = ({
  label = '',
  variant = 'primary',
  type = 'button',
  onClick,
  className,
}) => {
  const bgButton = {
    primary: 'bg-[#2639ED]',
    success: 'bg-[#DEFFEE]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cx(
        `rounded-[60px] py-5 px-10 text-white text-xl font-semibold z-10 ${bgButton[variant]}`,
        className
      )}
    >
      {label}
    </button>
  );
};
