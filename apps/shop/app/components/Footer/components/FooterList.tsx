import style from '../Footer.module.scss';

import { ReactNode } from 'react';

interface FooterListProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const FooterList: React.FC<FooterListProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <ul className={className}>
      <li className={style.footerTitle}>{title}</li>
      {children}
    </ul>
  );
};
export default FooterList;
