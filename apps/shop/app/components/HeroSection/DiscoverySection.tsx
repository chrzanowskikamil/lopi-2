import style from './DiscoverySection.module.scss';
import { Button } from '@lopi-2/common';
import { FC } from 'react';
import { discoverySectionTexts } from './heroData';

export const DiscoverySection: FC = () => {
  return (
    <div className={style.container}>
      <h2>{discoverySectionTexts.title}</h2>
      <p>{discoverySectionTexts.subtitle}</p>
      <Button title={discoverySectionTexts.buttonText} />
    </div>
  );
};
