import type { ImageProps } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

const Logo: FC<Omit<ImageProps, 'src'>> = ({
  height = 64,
  width = 64,
  ...props
}) => {
  return (
    <Image
      alt="Logo"
      height={height}
      width={width}
      unoptimized
      {...props}
      src="/logo.png"
    />
  );
};

export default Logo;
