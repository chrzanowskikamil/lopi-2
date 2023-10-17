import Image, { StaticImageData } from 'next/image';

import { Col } from 'react-bootstrap';
import { FC } from 'react';

type CustomerLogoCol = {
  col?: number;
  src: StaticImageData;
  alt: string;
};
export const CustomerLogoCol: FC<CustomerLogoCol> = ({ col = 3, src, alt }) => {
  return (
    <Col col={col}>
      <Image src={src} alt={alt} />
    </Col>
  );
};
