export type ReassuranceDataProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const reassuranceData: ReassuranceDataProps[] = [
  {
    icon: <i className="bi bi-truck"></i>,
    title: 'szybka i bezpieczna dostawa',
    description: 'Darmowa dostawa przy zamówieniach powyżej 200 zł',
  },
  {
    icon: <i className="bi bi-lock"></i>,
    title: 'zakupy bez zmartwień',
    description: 'Proces płatności jest szybki, łatwy i bezpieczny.',
  },
  {
    icon: <i className="bi bi-arrow-counterclockwise"></i>,
    title: 'gwarancja zadowolenia',
    description: 'Możliwość zwrotu lub reklamacji w ciągu 14 dni',
  },
];
