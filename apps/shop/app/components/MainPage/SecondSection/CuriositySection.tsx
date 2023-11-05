import style from './CuriositySection.module.scss';
import { FC } from 'react';
import Image from 'next/image';

export const CuriositySection: FC = () => {
  return (
    <div className={style.container}>
      <Image
        src="/curiosity-image.png"
        alt="curiosity image"
        width={1440}
        height={647}
      />
      <h4>
        Kawa jest drugim najbardziej popularnym napojem na świecie po wodzie i
        ma ponad tysiącletnią historię. Jej odkrycie przypisuje się etiopskiemu
        pasterzowi imieniem Kaldi, który zauważył, że jego kozy stały się
        bardziej energiczne po zjedzeniu owoców kawowca.
      </h4>
    </div>
  );
};
