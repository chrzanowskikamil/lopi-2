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
      <li className="footer-title">{title}</li>
      {children}
    </ul>
  );
};
export default FooterList;
