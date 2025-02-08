import { forwardRef } from 'react';
import { svg } from '../constants';

const SvgIcon = forwardRef(({ name, size = 24, color = 'currentColor', ...props }, ref) => {
  const icon = svg[name];

  if (!icon) {
    return null;
  }

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {icon}
    </svg>
  );
});

export default SvgIcon;

