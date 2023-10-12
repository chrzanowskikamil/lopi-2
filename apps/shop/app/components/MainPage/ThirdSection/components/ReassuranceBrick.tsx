import { Col } from 'react-bootstrap';
import { FC } from 'react';
import style from '../thirdSection.module.scss';

type ReassuranceBrickTypes = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export const ReassuranceBrick: FC<ReassuranceBrickTypes> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Col className={style.brick}>
      <div className={style.iconBrick}>{icon}</div>
      <div className={style.textBrick}>
        <div className={style.titleBrick}>{title}</div>
        <div>{description}</div>
      </div>
    </Col>
  );
};
