'use client';

import { Container, Row } from 'react-bootstrap';

import { ReassuranceBrick } from './ReassuranceBrick';

export const ReassuranceSection = () => {
  return (
    <>
      <Container>
        <Row>
          <ReassuranceBrick
            icon={<i className="bi bi-truck"></i>}
            title={'szybka i bezpieczna dostawa'}
            description={'Darmowa dostawa przy zamówieniach powyżej 200 zł'}
          />
          <ReassuranceBrick
            icon={<i className="bi bi-lock"></i>}
            title={'zakupy bez zmartwień'}
            description={'Proces płatności jest szybki, łatwy i bezpieczny.'}
          />
          <ReassuranceBrick
            icon={<i className="bi bi-arrow-counterclockwise"></i>}
            title={'gwarancja zadowolenia'}
            description={'Możliwość zwrotu lub reklamacji w ciągu 14 dni'}
          />
        </Row>
      </Container>
    </>
  );
};
