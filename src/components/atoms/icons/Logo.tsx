import type { ImageProps } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

const Logo: FC<Omit<ImageProps, 'src'>> = (props) => {
  return (
    <Image
      alt="Logo"
      height={64}
      width={64}
      unoptimized
      {...props}
      src="/logo.png"
    />
  );
};

export default Logo;
