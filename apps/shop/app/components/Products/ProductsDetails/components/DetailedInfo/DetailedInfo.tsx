import { FC, useState } from 'react';
import { Row } from 'react-bootstrap';
import style from './detailedInfo.module.scss';

interface DetailedInfoProps {
  description: string;
}

export const DetailedInfo: FC<DetailedInfoProps> = ({ description }) => {
  const [detailsCurrentChoice, setDetailsCurrentChoice] =
    useState<string>('Description');

  return (
    <>
      <Row>
        <div className={style.details}>
          <div
            className={`  ${style.description} ${
              detailsCurrentChoice === 'Description' ? style.onScope : ''
            }`}
            onClick={() => {
              setDetailsCurrentChoice('Description');
            }}
          >
            Opis
          </div>
          <div
            className={`  ${style.addationalInfo} ${
              detailsCurrentChoice === 'Addational info' ? style.onScope : ''
            }`}
            onClick={() => {
              setDetailsCurrentChoice('Addational info');
            }}
          >
            Dodatkowe informacje
          </div>
          <div
            className={` ${style.opinions} ${
              detailsCurrentChoice === 'Opinions' ? style.onScope : ''
            }`}
            onClick={() => {
              setDetailsCurrentChoice('Opinions');
            }}
          >
            Opinie
          </div>
        </div>
        <div className={style.info}>
          {detailsCurrentChoice === 'Description' ? description : ''}
          {detailsCurrentChoice === 'Addational info'
            ? 'Dodatkowe informacje'
            : ''}
          {detailsCurrentChoice === 'Opinions' ? 'Opinie' : ''}
        </div>
      </Row>
    </>
  );
};
