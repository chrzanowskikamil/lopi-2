import style from '../Footer.module.scss';

import { ReactNode } from 'react';

interface FooterListProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const FooterList: React.FC<FooterListProps> = ({ title, children }) => {
  return (
    <>
      <h5 className={style.footerTitle + ' mb-2'}>{title}</h5>
      <ul className={style.footerElement}>{children}</ul>
    </>
  );
};
