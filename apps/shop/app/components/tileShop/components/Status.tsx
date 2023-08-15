import { FC } from 'react';

type StatusProps = {
  status: string;
};

const Status: FC<StatusProps> = ({ status }) => {
  return <>{status}</>;
};

export default Status;
