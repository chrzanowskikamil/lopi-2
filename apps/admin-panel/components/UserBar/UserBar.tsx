'use client';

import { Button, Form } from 'react-bootstrap';

import style from './UserBar.module.scss';

export const UserBar = () => {
  return (
    <div className={style.userBar}>
      <div className={style.userBarSearchContainer}>
        <Form.Control
          type="text"
          placeholder="Search"
          className={style.searchBar}
        />

        <Button type="submit" className={style.button}>
          Szukaj
        </Button>
      </div>
      <div className={style.userPanelContainer}>
        <div className={style.userPanel}>
          <div className={style.iconContainer}>
            <i className={`${style.iconColor} bi bi-chat-square-text`}></i>
            <i className={`${style.iconColor} bi bi-bell`}></i>
          </div>
          <div className={style.minature}></div>
          <div className={style.userData}>
            <span>Sławomir Kowalski</span>
            <span>Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
};
