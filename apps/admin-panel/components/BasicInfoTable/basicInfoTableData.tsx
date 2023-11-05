import Etiopia from '../../public/assets/Etiopia.png';
import Etiopia5 from '../../public/assets/Etiopia5.png';
import Image from 'next/image';
import Kolumbia from '../../public/assets/Kolumbia.png';
import Kostaryka from '../../public/assets/Kostaryka.png';
import Wietnam from '../../public/assets/Wietnam.png';

export type BasicInfoTableDataProps = {
  picture: JSX.Element;
  category: string;
  count: number;
  soldCount: number;
  status: 'Active' | 'Inactive';
};

export const basicInfoTableData: BasicInfoTableDataProps[] = [
  {
    picture: <Image src={Etiopia} alt={'Coffe'} />,
    category: 'Ethiopia',
    count: 23,
    soldCount: 12,
    status: 'Active',
  },
  {
    picture: <Image src={Wietnam} alt={'Coffe'} />,
    category: 'Wietnam',
    count: 43,
    soldCount: 54,
    status: 'Active',
  },
  {
    picture: <Image src={Kolumbia} alt={'Coffe'} />,
    category: 'Kolumbia',
    count: 43,
    soldCount: 54,
    status: 'Active',
  },
  {
    picture: <Image src={Kostaryka} alt={'Coffe'} />,
    category: 'Kostaryka',
    count: 43,
    soldCount: 54,
    status: 'Active',
  },
  {
    picture: <Image src={Etiopia5} alt={'Coffe'} />,
    category: 'Indonezja',
    count: 11,
    soldCount: 32,
    status: 'Inactive',
  },
];
